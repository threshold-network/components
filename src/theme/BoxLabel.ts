import theme from "./index"
export type BoxLabelVariant = "solid" | "outline"
export type BoxLabelSize = "xs" | "sm" | "md" | "lg"
export type BoxLabelStatus = "primary" | "secondary" | "magic"

type ColorMap = {
  [key in BoxLabelStatus]: string
}

export const BoxLabel = {
  baseStyle: ({
    variant,
    status,
  }: {
    status: BoxLabelStatus
    variant: BoxLabelVariant
  }) => {
    const bgMap: ColorMap = {
      primary: variant === "outline" ? "transparent" : "brand.50",
      secondary: variant === "outline" ? "transparent" : "gray.50",
      magic: variant === "outline" ? "transparent" : theme.colors.gradient[3],
    }

    const colorMap: ColorMap = {
      primary: "brand.700",
      secondary: "gray.700",
      magic: variant === "outline" ? "brand.500" : "white",
    }

    const borderColorMap: ColorMap = {
      ...colorMap,
      magic: "brand.500",
    }

    return {
      display: "inline-flex",
      width: "fit-content",
      px: 2,
      py: 1,
      borderRadius: "md",
      color: colorMap[status] || colorMap.primary,
      bg: bgMap[status] || bgMap.primary,
      borderColor:
        variant === "outline"
          ? borderColorMap[status] || borderColorMap.primary
          : "none",
      border: variant === "outline" ? "1px solid" : "none",
    }
  },
  defaultProps: {
    status: "primary",
  },
}
