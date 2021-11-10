import React from "react";

import { Input } from "./Input";

export default {
  title: "Sangha/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  type: "text",
  label: "",
};
