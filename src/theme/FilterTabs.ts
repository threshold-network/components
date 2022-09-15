import { mode } from "@chakra-ui/theme-tools"
import { ComponentStyleConfig } from "@chakra-ui/react"

export const FilterTabs: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "6px",
    padding: 1,
  },
  variants: {
    primary: (props) => ({
      bgColor: mode("white", "gray.800")(props),
      border: "1px solid",
      borderColor: "gray.700",
      boxShadow: "md",
      width: "full",
    }),
    inline: (props) => ({
      bgColor: mode("gray.50", "gray.900")(props),
      boxShadow: undefined,
      width: "fit-content",
    }),
  },
  defaultProps: {
    variant: "primary",
  },
}
