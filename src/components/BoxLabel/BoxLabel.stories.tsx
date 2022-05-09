import { Meta, Story } from "@storybook/react"
import { BoxLabel as BoxLabelComponent } from "./index"

const Template: Story = () => {
  return <BoxLabelComponent>Simple Box Label</BoxLabelComponent>
}

export const BoxLabel = Template.bind({})

export default {
  title: "BoxLabel",
  component: BoxLabel,
} as Meta
