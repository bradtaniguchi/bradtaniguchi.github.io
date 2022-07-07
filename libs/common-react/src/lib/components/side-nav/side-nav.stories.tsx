import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Meta, Story } from '@storybook/react';
import { SideNav, SideNavProps } from './side-nav';
export default {
  component: SideNav,
  title: 'SideNav',
  argTypes: {
    onClose: {
      action: 'onClose',
    },
  } as Record<keyof SideNavProps, unknown>,
} as Meta;

const Template: Story<SideNavProps> = (args) => <SideNav {...args} />;

export const BasicTextList = Template.bind({});
BasicTextList.args = {
  opened: true,
  items: ['Item 1', 'Item 2'].map((text) => (
    <ListItem key={text} disablePadding>
      <ListItemButton>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  )),
};
