import { Meta, Story } from "@storybook/react"
import { ThresholdSpinner as ThresholdSpinnerComponent } from "./index"

const Template: Story = () => {
  return <ThresholdSpinnerComponent />
}

export const ThresholdSpinner = Template.bind({})

export default {
  title: "ThresholdSpinner",
  component: ThresholdSpinner,
} as Meta
