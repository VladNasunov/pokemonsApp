import { ComponentMeta, ComponentStory } from "@storybook/react";
import AppFooter, { AppFooterProps } from "./Footer";

export default {
  component: AppFooter,
  title: "AppFooter",
  argTypes: {
    title:{
      type: 'string',
      description: 'footer title'
    }
  }
} as ComponentMeta<typeof AppFooter>;

const Template: ComponentStory<typeof AppFooter> = (args) => (
  <AppFooter {...args} />
);

export const Default = Template.bind({});

Default.args = {
  title: "Pokemon App ©2022 Created by Vlad Nasunov",
};
