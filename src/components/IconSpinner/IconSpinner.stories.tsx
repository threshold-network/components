import { Meta, Story } from "@storybook/react"
import { IconSpinner as IconSpinnerComponent } from "./index"
import Threshold from "../../static/icons/Ttoken"

const Template: Story = (args) => {
  return <IconSpinnerComponent {...args} />
}

export const IconSpinner = Template.bind({})
IconSpinner.args = { icon: Threshold }

export default {
  title: "IconSpinner",
  component: IconSpinner,
} as Meta
