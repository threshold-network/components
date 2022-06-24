import { mode } from "@chakra-ui/theme-tools"

export type FilterTabVariant = "primary" | "inline"
export type FilterTabSize = "xs" | "sm" | "md" | "lg"

export const FilterTab = {
  baseStyle: {
    bg: undefined,
    color: "gray.500",
    borderColor: undefined,
  },
  variants: (props: any) => ({
    primary: {
      width: "full",
      border: "none",
      _hover: {
        bg: mode("brand.50", "brand.800")(props),
      },
      _active: {
        bg: mode("brand.50", "brand.800")(props),
        color: mode("brand.500", "brand.100")(props),
        borderColor: mode("gray.50", "gray.300")(props),
        _hover: {
          bg: mode("brand.50", "brand.800")(props),
        },
      },
    },
    inline: {
      width: "fit-content",
      border: undefined,
      _hover: {
        bg: mode("white", "gray.800")(props),
      },
      _active: {
        bg: mode("white", "gray.800")(props),
        color: mode("gray.700", "gray.50")(props),
        borderColor: mode("gray.50", "gray.300")(props),
        _hover: {
          bg: mode("brand.50", "brand.800")(props),
        },
      },
    },
  }),
}
