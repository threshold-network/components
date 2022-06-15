import { FC } from "react"
import { List, ListProps, useStyleConfig } from "@chakra-ui/react"
import { ChecklistItem, ChecklistItemProps } from "../ChecklistItem"
import { BoxLabel } from "../BoxLabel"

export interface ChecklistGroupProps extends ListProps {
  checklistItems: ChecklistItemProps[]
  title?: string
}

export const ChecklistGroup: FC<ChecklistGroupProps> = ({
  checklistItems,
  title,
  ...restProps
}) => {
  const styles = useStyleConfig("CheckListGroup", restProps)

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
