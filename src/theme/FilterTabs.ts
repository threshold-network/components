import { mode } from "@chakra-ui/theme-tools"

export const FilterTabs = {
  baseStyle: (props: any) => {
    const { variant } = props

    return {
      bgColor: mode(
        props.variant === "primary" ? "white" : "gray.50",
        "gray.900"
      )(props),
      boxShadow: variant === "primary" ? "md" : undefined,
      borderRadius: "6px",
      padding: 1,
      width: variant === "primary" ? "full" : "fit-content",
    }
  },
}
