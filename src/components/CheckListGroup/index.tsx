import { FC } from "react"
import { List } from "@chakra-ui/react"
import ChecklistItem from "../ChecklistItem"
import BoxLabel from "../BoxLabel"
import { ChecklistGroupProps } from "../../types"

const ChecklistGroup: FC<ChecklistGroupProps> = ({ checklistItems, title }) => {
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
