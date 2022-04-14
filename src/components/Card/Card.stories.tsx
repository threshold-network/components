import { Meta, Story } from "@storybook/react"
import CardComponent from "./index"

const Template: Story = () => {
  return <CardComponent>Simple Card</CardComponent>
}

export const Card = Template.bind({})

export default {
  title: "Card",
  component: Card,
} as Meta
