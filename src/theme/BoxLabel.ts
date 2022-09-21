import { ComponentStyleConfig } from "@chakra-ui/react"
import { colors } from "./utils"
import { mode } from "@chakra-ui/theme-tools"

export type BoxLabelVariant = "solid" | "outline"
export type BoxLabelSize = "xs" | "sm" | "md" | "lg"
export type BoxLabelStatus =
  | "primary"
  | "secondary"
  | "magic"
  | "success"
  | "warning"
  | "error"

type ColorMap = {
  [key in BoxLabelStatus]: string
}

export const BoxLabel: ComponentStyleConfig = {
  baseStyle: {
    display: "inline-flex",
    width: "fit-content",
    px: 2,
    py: 1,
    borderRadius: "md",
  },
  variants: {
    solid: (props) => {
      const status: BoxLabelStatus = props.status || "primary"

      return {
        bg: {
          primary: mode("brand.50", "whiteAlpha.200")(props),
          secondary: mode("gray.50", "whiteAlpha.100")(props),
          magic: colors.gradient[3],
          success: mode("green.100", "green.200")(props),
          warning: mode("yellow.100", "yellow.200")(props),
          error: mode("red.100", "red.200")(props),
        }[status],
        border: "none",
        color: {
          primary: mode("brand.700", "brand.100")(props),
          secondary: mode("gray.700", "gray.100")(props),
          magic: "white",
          success: "green.800",
          warning: "yellow.800",
          error: "red.800",
        }[status],
      }
    },
    outline: (props) => {
      const status: BoxLabelStatus = props.status || "primary"
      const colorMap: ColorMap = {
        primary: mode("brand.700", "brand.300")(props),
        secondary: mode("gray.700", "gray.300")(props),
        magic: mode("brand.500", "brand.100")(props),
        success: mode("green.500", "green.300")(props),
        warning: mode("yellow.500", "yellow.300")(props),
        error: mode("red.500", "red.300")(props),
      }

      return {
        bg: "transparent",
        border: "1px solid",
        borderColor: colorMap[status],
        color: colorMap[status],
      }
    },
  },
  defaultProps: {
    variant: "solid",
    status: "primary",
  },
}
