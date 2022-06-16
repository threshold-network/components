import { FC } from "react"
import { TextProps, useColorModeValue } from "@chakra-ui/react"
import { BodySm } from "../Typography"

export const BoxLabel: FC<TextProps> = (props) => (
  <BodySm
    borderRadius="md"
    px={2}
    py={1}
    bg={useColorModeValue("gray.50", "gray.700")}
    {...props}
  >
    {props.children}
  </BodySm>
)
