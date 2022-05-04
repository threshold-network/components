import { Meta, Story } from "@storybook/react"
import CheckListItemComponent, { CheckListItemProps } from "./index"
import { List } from "@chakra-ui/react"

const Template: Story<CheckListItemProps> = (args) => {
  return (
    <List spacing={4}>
      <CheckListItemComponent {...args} />
    </List>
  )
}

export const CheckListItem = Template.bind({})
CheckListItem.args = {
  title: "Check list item 1",
  subTitle: "subtitle",
}

export default {
  title: "CheckListItem",
  component: CheckListItem,
} as Meta
