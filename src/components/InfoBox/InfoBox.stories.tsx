import { Meta, Story } from "@storybook/react"
import InfoBoxComponent from "./index"
import { StackProps } from "@chakra-ui/react"

const Template: Story<{ text?: string; variant?: any } & StackProps> = (
  args
) => {
  return <InfoBoxComponent {...args} />
}

export const IngoBoxBase = Template.bind({})
IngoBoxBase.args = {
  variant: "base",
  text: "Info box - variant: base",
}
export const InfoBoxModal = Template.bind({})
InfoBoxModal.args = {
  variant: "modal",
  text: "Info box - variant: modal",
}

export default {
  title: "InfoBox",
  component: IngoBoxBase,
} as Meta
