import { ExampleBlock } from "./example-block";

export default {
  title: "Example block",
  component: ExampleBlock,
};

const Template = (args) => <ExampleBlock {...args}></ExampleBlock>;

export const Default = Template.bind({});
export const WithChildren = Template.bind({});
WithChildren.args = {
  children: <p>This is a test!</p>,
};

export const WithBackgroundColor = Template.bind({});
WithBackgroundColor.args = {
  backgroundColor: "#ff0000",
  children: <p>This is a test!</p>,
};
