import { FC } from "react"
import { List } from "@chakra-ui/react"
import ChecklistItem, { CheckListItemProps } from "../ChecklistItem"
import BoxLabel from "../BoxLabel"

export interface CheckListGroupProps {
  checklistItems: CheckListItemProps[]
  title?: string
}

const ChecklistGroup: FC<CheckListGroupProps> = ({ checklistItems, title }) => {
  return (
    <>
      {title && (
        <BoxLabel w="fit-content" mb={4}>
          {title}
        </BoxLabel>
      )}
      <List spacing={4}>
        {checklistItems.map((item, i) => (
          <ChecklistItem {...item} key={i} />
        ))}
      </List>
    </>
  )
}

export default ChecklistGroup
