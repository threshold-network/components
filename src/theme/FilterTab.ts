import { mode } from "@chakra-ui/theme-tools"

export type FilterTabVariant = "primary" | "inline"
export type FilterTabSize = "xs" | "sm" | "md" | "lg"

export const FilterTab = {
  baseStyle: (props: any) => {
    const { isActive, variant } = props

    const activeColor = mode(
      variant === "primary" ? "brand.500" : "gray.700",
      variant === "primary" ? "brand.100" : "gray.50"
    )(props)
    const passiveColor = "gray.500"

    const activeBg = mode(
      variant === "primary" ? "brand.50" : "white",
      variant === "primary" ? "brand.800" : "gray.900"
    )(props)

    const activeBorderColor = mode("gray.50", "gray.300")(props)

    const passiveHoverBg = mode(
      variant === "primary" ? "brand.50" : "white",
      variant === "primary" ? "brand.800" : "gray.800"
    )(props)

    return {
      width: variant === "primary" ? "full" : "fit-content",
      border: variant === "primary" ? "none" : undefined,
      bg: isActive ? activeBg : undefined,
      color: isActive ? activeColor : passiveColor,
      borderColor: isActive ? activeBorderColor : undefined,
      _hover: {
        bg: isActive ? activeBg : passiveHoverBg,
      },
      _active: {
        bg: isActive ? activeBg : undefined,
      },
    }
  },
}
