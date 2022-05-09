import { Meta, Story } from "@storybook/react"
import {
  MultiSegmentProgress as MultiSegmentProgressComponent,
  MultiSegmentProgressProps,
} from "./index"

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
