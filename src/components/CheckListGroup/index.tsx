import { FC } from "react"
import { List, useStyleConfig } from "@chakra-ui/react"
import ChecklistItem, { CheckListItemProps } from "../ChecklistItem"
import BoxLabel from "../BoxLabel"

export interface CheckListGroupProps {
  checklistItems: CheckListItemProps[]
  title?: string
}

const ChecklistGroup: FC<CheckListGroupProps> = ({ checklistItems, title }) => {
  const styles = useStyleConfig("CheckListGroup", {})

  return (
    <>
      {title && <BoxLabel sx={styles}>{title}</BoxLabel>}
      <List spacing={4}>
        {checklistItems.map((item, i) => (
          <ChecklistItem {...item} key={i} />
        ))}
      </List>
    </>
  )
}

export default ChecklistGroup
