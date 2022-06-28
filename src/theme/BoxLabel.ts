import { ComponentStyleConfig } from "@chakra-ui/react"
import { colors } from "./utils"
export type BoxLabelVariant = "solid" | "outline"
export type BoxLabelSize = "xs" | "sm" | "md" | "lg"
export type BoxLabelStatus = "primary" | "secondary" | "magic"

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
          primary: "brand.50",
          secondary: "gray.50",
          magic: colors.gradient[3],
        }[status],
        border: "none",
        color: {
          primary: "brand.700",
          secondary: "gray.700",
          magic: "white",
        }[status],
      }
    },
    outline: (props) => {
      const status: BoxLabelStatus = props.status || "primary"
      const colorMap: ColorMap = {
        primary: "brand.700",
        secondary: "gray.700",
        magic: "brand.500",
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
