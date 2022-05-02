import { FC } from "react"
import {
  Box,
  Stack,
  ListIcon,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react"
import { BsCheckCircleFill } from "react-icons/all"
import { Body2, Body3 } from "../Typography"
import { ChecklistItemProps } from "../../types"

const ChecklistItem: FC<ChecklistItemProps> = ({
  title,
  subTitle,
  icon = BsCheckCircleFill,
}) => {
  return (
    <ListItem>
      <Stack direction="row">
        <ListIcon
          mt="2px"
          height="22px"
          width="22px"
          as={icon}
          color="green.500"
        />
        <Box>
          {typeof title === "string" ? (
            <Body2 color={useColorModeValue("gray.700", "white")}>
              {title}
            </Body2>
          ) : (
            title
          )}
          {typeof subTitle === "string" ? (
            <Body3 color={useColorModeValue("gray.500", "gray.300")}>
              {subTitle}
            </Body3>
          ) : (
            subTitle
          )}
        </Box>
      </Stack>
    </ListItem>
  )
}

export default ChecklistItem
