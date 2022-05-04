import { Meta, Story } from "@storybook/react"
import NumberInputComponent, { CustomNumberInputProps } from "./index"

const Template: Story<CustomNumberInputProps> = (args) => {
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
