import { mode } from "@chakra-ui/theme-tools"

export const FilterTabs = {
  baseStyle: {
    borderRadius: "6px",
    padding: 1,
  },
  variants: (props: any) => ({
    primary: {
      bgColor: mode("white", "gray.900")(props),
      boxShadow: "md",
      width: "full",
    },
    inline: (props: any) => ({
      bgColor: mode("gray.50", "gray.900")(props),
      boxShadow: undefined,
      width: "fit-content",
    }),
  }),
}
