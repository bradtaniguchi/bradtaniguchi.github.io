import { Box } from '@primer/react';
import { Meta, Story } from '@storybook/react';
import { StorybookLanding, StorybookLandingProps } from './storybook-landing';

export default {
  component: StorybookLanding,
  title: 'StorybookLanding',
  argTypes: { onButtonClick: { action: 'onButtonClick' } },
  decorators: [
    (Story) => (
      <Box>
        <Story />
      </Box>
    ),
  ],
} as Meta;

const Template: Story<StorybookLandingProps> = (args) => (
  <StorybookLanding {...args} />
);

export const Default = Template.bind({});
Default.args = {
  onButtonClick: null as unknown as undefined,
};
