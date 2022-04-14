import { Meta, Story } from "@storybook/react"
import CheckListGroupComponent from "./index"
import { ChecklistGroupProps } from "../../types"

const Template: Story<ChecklistGroupProps> = (args) => {
  return <CheckListGroupComponent {...args} />
}

export const CheckListGroup = Template.bind({})
CheckListGroup.args = {
  title: "Awesome checklist",
  checklistItems: [
    {
      title: "Check list item 1",
      subTitle: "subtitle",
    },
    {
      title: "Check list item 2",
      subTitle: "subtitle",
    },
  ],
}

export default {
  title: "CheckListGroup",
  component: CheckListGroup,
} as Meta
