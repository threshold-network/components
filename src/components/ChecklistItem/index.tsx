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
import { BodyMd, BodySm } from "../Typography"
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
            <BodyMd __css={styles.title}>{itemTitle}</BodyMd>
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

export default ChecklistItem
