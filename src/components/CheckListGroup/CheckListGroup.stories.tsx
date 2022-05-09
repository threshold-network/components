import { Meta, Story } from "@storybook/react"
import {
  ChecklistGroup as ChecklistGroupComponent,
  ChecklistGroupProps,
} from "./index"

const Template: Story<ChecklistGroupProps> = (args) => {
  return <ChecklistGroupComponent {...args} />
}

export const ChecklistGroup = Template.bind({})
ChecklistGroup.args = {
  title: "Awesome checklist",
  checklistItems: [
    {
      itemId: "list-1",
      itemTitle: "Checklist item 1",
      itemSubTitle: "subtitle",
    },
    {
      itemId: "list-2",
      itemTitle: "Checklist item 2",
      itemSubTitle: "subtitle",
    },
  ],
}

export default {
  title: "ChecklistGroup",
  component: ChecklistGroup,
} as Meta
