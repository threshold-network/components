import { mode } from "@chakra-ui/theme-tools"
import { ComponentStyleConfig } from "@chakra-ui/react"

export type FilterTabVariant = "primary" | "inline"
export type FilterTabSize = "xs" | "sm" | "md" | "lg"

export const FilterTab: ComponentStyleConfig = {
  baseStyle: {
    bg: undefined,
    color: "gray.500",
    borderColor: undefined,
  },
  variants: {
    primary: (props) => ({
      width: "full",
      border: "none",
      color: mode("gray.500", "white")(props),
      _hover: {
        bg: mode("#F2EDFF", "gray.700")(props),
        color: mode("brand.500", "brand.100")(props),
      },
      _active: {
        bg: mode("brand.50", "whiteAlpha.200")(props),
        color: mode("brand.500", "brand.100")(props),
        borderColor: mode("gray.50", "gray.300")(props),
        _hover: {
          bg: mode("#F2EDFF", "gray.700")(props),
        },
      },
    }),
    inline: (props) => ({
      width: "fit-content",
      border: undefined,
      _hover: {
        bg: mode("gray.100", "gray.800")(props),
      },
      _active: {
        bg: mode("white", "gray.800")(props),
        color: mode("gray.700", "gray.50")(props),
        border: "1px solid red",
        borderColor: mode("gray.300", "gray.300")(props),
        _hover: {
          bg: mode("gray.100", "gray.700")(props),
        },
      },
    }),
  },
}
