import { Meta, Story } from "@storybook/react"
import NumberInputComponent from "./index"
import { NumberInputProps } from "../../types"

const Template: Story<NumberInputProps> = (args) => {
  return <NumberInputComponent {...args} />
}

export const NumberInput = Template.bind({})
NumberInput.args = {
  placeholder: "Enter an amount",
  paddingLeft: "2.5rem",
  paddingRight: "4.5rem",
}

export default {
  title: "NumberInput",
  component: NumberInput,
} as Meta
