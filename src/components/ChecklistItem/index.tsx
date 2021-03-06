import { FC } from "react"
import {
  Box,
  Stack,
  ListIcon,
  ListItem,
  useMultiStyleConfig,
  ListItemProps,
} from "@chakra-ui/react"
import { BsFillArrowRightCircleFill } from "react-icons/all"
import { BodyMd, BodySm } from "../Typography"
import { IconType } from "react-icons"

export interface ChecklistItemProps
  extends Omit<ListItemProps, "id" | "title"> {
  itemId: string
  itemTitle: string | JSX.Element
  itemSubTitle?: string | JSX.Element
  icon?: IconType
}

export const ChecklistItem: FC<ChecklistItemProps> = ({
  itemId,
  itemTitle,
  itemSubTitle,
  icon = BsFillArrowRightCircleFill,
  ...restProps
}) => {
  const styles = useMultiStyleConfig("CheckListItem", restProps)
  return (
    <ListItem
      __css={styles.checkListItemWrapper}
      itemID={itemId}
      {...restProps}
    >
      <Stack direction="row">
        <ListIcon sx={styles.icon} as={icon} />
        <Box>
          {typeof itemTitle === "string" ? (
            <BodyMd sx={styles.title}>{itemTitle}</BodyMd>
          ) : (
            itemTitle
          )}
          {typeof itemSubTitle === "string" ? (
            <BodySm sx={styles.subtitle}>{itemSubTitle}</BodySm>
          ) : (
            itemSubTitle
          )}
        </Box>
      </Stack>
    </ListItem>
  )
}
