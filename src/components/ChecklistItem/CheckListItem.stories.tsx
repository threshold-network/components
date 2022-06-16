import { Meta, Story } from "@storybook/react"
import {
  ChecklistItem as ChecklistItemComponent,
  ChecklistItemProps,
} from "./index"
import { List } from "@chakra-ui/react"

const Template: Story<ChecklistItemProps> = (args) => {
  return (
    <List spacing={4}>
      <ChecklistItemComponent {...args} />
    </List>
  )
}

export const CheckListItem = Template.bind({})
CheckListItem.args = {
  itemTitle: "Check list item 1",
  itemSubTitle: "subtitle",
}

export default {
  title: "CheckListItem",
  component: CheckListItem,
} as Meta
