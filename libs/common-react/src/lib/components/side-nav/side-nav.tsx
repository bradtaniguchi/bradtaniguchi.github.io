import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { ReactNode } from 'react';

/* eslint-disable-next-line */
export interface SideNavProps {
  /**
   * The side the side-nav is to be displayed on.
   * Top is also an option, but this will not be used.
   *
   * @default 'left'
   */
  anchor?: 'left' | 'right' | 'bottom';
  /**
   * If the side-nav is opened
   */
  opened?: boolean;
  /**
   * Array of items to be displayed within the `List`
   * of the nav
   */
  items?: ReactNode[];
  /**
   * When the side-nav emits the close event.
   */
  onClose?: () => void;
}

export function SideNav(props: SideNavProps) {
  return (
    <Drawer
      anchor={props.anchor ?? 'left'}
      open={props.opened}
      onClose={props.onClose}
    >
      <Box
        sx={{ width: props.anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
      >
        <List>
          <ListItem disablePadding sx={{ minHeight: '64px' }}>
            <ListItemButton onClick={props.onClose}>
              <ListItemIcon>
                <ChevronLeftIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <Divider />
          {props.items || []}
        </List>
      </Box>
    </Drawer>
  );
}

export default SideNav;
