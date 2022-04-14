import { Meta, Story } from "@storybook/react"
import MultiSegmentProgressComponent from "./index"
import { StackProps } from "@chakra-ui/react"
import { MultiSegmentProgressProps } from "../../types"

const Template: Story<MultiSegmentProgressProps> = (args) => {
  return <MultiSegmentProgressComponent {...args} />
}

export const MultiSegmentProgress = Template.bind({})
MultiSegmentProgress.args = {
  values: [
    {
      color: "green",
      value: 10,
      tooltip: `10`,
    },
    {
      color: "blue",
      value: 20,
      tooltip: `20`,
    },
    {
      color: "yellow",
      value: 50,
      tooltip: `50`,
    },
  ],
}

export default {
  title: "MultiSegmentProgress",
  component: MultiSegmentProgress,
} as Meta
