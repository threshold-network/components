import { FC } from "react"
import { List, ListProps, useStyleConfig } from "@chakra-ui/react"
import ChecklistItem, { CheckListItemProps } from "../ChecklistItem"
import BoxLabel from "../BoxLabel"

export interface CheckListGroupProps extends ListProps {
  checklistItems: CheckListItemProps[]
  title?: string
}

const ChecklistGroup: FC<CheckListGroupProps> = ({
  checklistItems,
  title,
  ...restProps
}) => {
  const styles = useStyleConfig("CheckListGroup", {})

  return (
    <>
      {title && <BoxLabel sx={styles}>{title}</BoxLabel>}
      <List spacing={4} {...restProps}>
        {checklistItems.map((item, i) => (
          <ChecklistItem {...item} key={item.itemId} />
        ))}
      </List>
    </>
  )
}

export default ChecklistGroup
