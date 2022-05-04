import { Meta, Story } from "@storybook/react"
import CheckListGroupComponent, { CheckListGroupProps } from "./index"

const Template: Story<CheckListGroupProps> = (args) => {
  return <CheckListGroupComponent {...args} />
}

export const CheckListGroup = Template.bind({})
CheckListGroup.args = {
  title: "Awesome checklist",
  checklistItems: [
    {
      itemId: "list-1",
      itemTitle: "Check list item 1",
      itemSubTitle: "subtitle",
    },
    {
      itemId: "list-2",
      itemTitle: "Check list item 2",
      itemSubTitle: "subtitle",
    },
  ],
}

export default {
  title: "CheckListGroup",
  component: CheckListGroup,
} as Meta
