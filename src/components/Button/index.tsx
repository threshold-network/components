import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react"
import { FC } from "react"

export const Button: FC<ButtonProps & { isSelected?: boolean }> = (props) => {
  return <ChakraButton {...props} />
}
