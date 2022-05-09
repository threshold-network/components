import { Meta, Story } from "@storybook/react"
import {
  NumberFormatInput as NumberFormatInputComponent,
  NumberFormatInputProps,
} from "./index"

const Template: Story<NumberFormatInputProps> = (args) => {
  return <NumberFormatInputComponent {...args} />
}

export const NumberFormatInput = Template.bind({})
NumberFormatInput.args = {
  placeholder: "Enter an amount",
  paddingLeft: "2.5rem",
  paddingRight: "4.5rem",
}

export default {
  title: "NumberFormatInput",
  component: NumberFormatInput,
} as Meta
