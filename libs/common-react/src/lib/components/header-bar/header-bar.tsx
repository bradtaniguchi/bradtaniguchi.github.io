import MenuIcon from '@mui/icons-material/Menu';
import MoreVert from '@mui/icons-material/MoreVert';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { SyntheticEvent } from 'react';
import { HeaderBarContext } from './header-bar-context';

/* eslint-disable-next-line */
export interface HeaderBarProps {
  /**
   * Hide the hamburger menu on the left.
   *
   * Usually only done for responsive reasons.
   */
  hideHamburger?: boolean;
  /**
   * Callback called when the hamburger menu on the left is called
   */
  onHamburgerClick?: (e: SyntheticEvent) => void;
  /**
   * Callback called when three-dot menu on the right is called.
   */
  onMenuClick?: (e: SyntheticEvent) => void;
  /**
   * Hide the three-dot menu on the right.
   */
  hideMenu?: boolean;
  /**
   * Children to display, will override the context display.
   */
  children?: React.ReactNode;
}

/**
 * The header-bar component provides a basic interface layout implementation for
 * a mui based "app-bar". However, this version includes a few specific setups
 * that are almost always used. Namely a responsive "hamburger" button, and
 * an integrated context-provider that can be used to "provide" an internal
 * implementation of a component, such as a "search-bar" or other UI based
 * actions within the center of the screen.
 *
 * To correctly leverage this component, you **must** provide the
 * HeaderBarContext.Provider at the "top-level" of your app, usually App.
 *
 * @see HeaderBarContext
 *
 */
export function HeaderBar(props: HeaderBarProps) {
  return (
    <HeaderBarContext.Consumer>
      {(headerBarContext) => (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="sticky">
            <Toolbar>
              {props.hideHamburger ? null : (
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="hamburger-menu"
                  sx={{ mr: 2 }}
                  onClick={props.onHamburgerClick}
                >
                  <MenuIcon />
                </IconButton>
              )}
              <Typography component="div" sx={{ flexGrow: 1 }}>
                {props.children ? props.children : headerBarContext}
              </Typography>
              {props.hideMenu ? null : (
                <IconButton
                  size="large"
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={props.onMenuClick}
                >
                  <MoreVert />
                </IconButton>
              )}
            </Toolbar>
          </AppBar>
        </Box>
      )}
    </HeaderBarContext.Consumer>
  );
}

export default HeaderBar;

export * from './header-bar-context';
