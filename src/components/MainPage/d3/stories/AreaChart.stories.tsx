import AreaChart from "../Charts";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DataType } from "../types/types";

const data: DataType[] = [
  { date: "2021-03-22", value: 255.820007 },
  { date: "2021-03-23", value: 249.259995 },
  { date: "2021-03-24", value: 243.75 },
  { date: "2021-03-25", value: 234.339996 },
  { date: "2021-03-26", value: 249.619995 },
  { date: "2021-03-29", value: 251.300003 },
];

export default {
  component: AreaChart,
  title: "AreaChart",
} as ComponentMeta<typeof AreaChart>;

const Template: ComponentStory<typeof AreaChart> = (args) => (
  <AreaChart {...args} />
);

export const Default = Template.bind({});

Default.args = {
  data,
};
