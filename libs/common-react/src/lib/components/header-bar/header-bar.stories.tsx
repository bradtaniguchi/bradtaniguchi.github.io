import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Story, Meta } from '@storybook/react';
import { HeaderBar, HeaderBarProps, HeaderBarContext } from './header-bar';

export default {
  component: HeaderBar,
  title: 'HeaderBar',
  argTypes: {
    onHamburgerClick: {
      action: 'onHamburgerClick',
    },
    onMenuClick: {
      action: 'onMenuClick',
    },
  } as Record<keyof HeaderBarProps, unknown>,
} as Meta;

const Template: Story<HeaderBarProps> = (args) => <HeaderBar {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Empty = Template.bind({});
Empty.args = {
  hideHamburger: true,
  hideMenu: true,
};

export const AuthenticatedEmptyExample = Template.bind({});
AuthenticatedEmptyExample.args = {};
AuthenticatedEmptyExample.decorators = [
  (Story) => (
    <HeaderBarContext.Provider
      value={
        // This is an example of an authenticated "toolbar"
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row' }}>
          <Typography
            component="div"
            sx={{
              flexGrow: 1,
            }}
          >
            {/* I can't center this vertically! */}
            <div>Authenticated Example</div>
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="Authenticated User Icon"
          >
            <AccountCircle />
          </IconButton>
        </Box>
      }
    >
      <Story />
    </HeaderBarContext.Provider>
  ),
];

export const WithSearchExample = Template.bind({});
WithSearchExample.args = {};
