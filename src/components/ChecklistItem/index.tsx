import { FC } from "react"
import {
  Box,
  Stack,
  ListIcon,
  ListItem,
  useMultiStyleConfig,
  ListItemProps,
} from "@chakra-ui/react"
import { BsCheckCircleFill } from "react-icons/all"
import { Body2, Body3 } from "../Typography"
import { IconType } from "react-icons"

export interface CheckListItemProps
  extends Omit<ListItemProps, "id" | "title"> {
  itemId: string
  itemTitle: string | JSX.Element
  itemSubTitle?: string | JSX.Element
  icon?: IconType
}

const ChecklistItem: FC<CheckListItemProps> = ({
  itemTitle,
  itemSubTitle,
  icon = BsCheckCircleFill,
  ...restProps
}) => {
  const styles = useMultiStyleConfig("CheckListItem", {})
  return (
    <ListItem __css={styles.checkListItemWrapper} {...restProps}>
      <Stack direction="row">
        <ListIcon sx={styles.icon} as={icon} mt={10} />
        <Box>
          {typeof itemTitle === "string" ? (
            <Body2 __css={styles.title}>{itemTitle}</Body2>
          ) : (
            itemTitle
          )}
          {typeof itemSubTitle === "string" ? (
            <Body3 sx={styles.subtitle}>{itemSubTitle}</Body3>
          ) : (
            itemSubTitle
          )}
        </Box>
      </Stack>
    </ListItem>
  )
}

export default ChecklistItem
