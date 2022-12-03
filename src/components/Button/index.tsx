import {
  Button as ChakraButton,
  ButtonProps,
  forwardRef,
} from "@chakra-ui/react"

interface IButton extends ButtonProps {
  isSelected?: boolean
}

export const Button = forwardRef<IButton, "button">((props, ref) => (
  <ChakraButton ref={ref} {...props} />
))
