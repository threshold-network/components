import { FC } from "react"
import {
  Box,
  Stack,
  ListIcon,
  ListItem,
  useMultiStyleConfig,
} from "@chakra-ui/react"
import { BsCheckCircleFill } from "react-icons/all"
import { Body2, Body3 } from "../Typography"
import { IconType } from "react-icons"

export interface CheckListItemProps {
  title: string | JSX.Element
  subTitle?: string | JSX.Element
  icon?: IconType
}

const ChecklistItem: FC<CheckListItemProps> = ({
  title,
  subTitle,
  icon = BsCheckCircleFill,
}) => {
  const styles = useMultiStyleConfig("CheckListItem", {})
  return (
    <ListItem __css={styles.checkListItemWrapper}>
      <Stack direction="row">
        <ListIcon sx={styles.icon} as={icon} />
        <Box>
          {typeof title === "string" ? (
            <Body2 sx={styles.title}>{title}</Body2>
          ) : (
            title
          )}
          {typeof subTitle === "string" ? (
            <Body3 sx={styles.subtitle}>{subTitle}</Body3>
          ) : (
            subTitle
          )}
        </Box>
      </Stack>
    </ListItem>
  )
}

export default ChecklistItem
