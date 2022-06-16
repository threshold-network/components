import { mode } from "@chakra-ui/theme-tools"

export const CheckListItem = {
  parts: ["checkListItemWrapper", "icon", "title", "subtitle"],
  baseStyle: (props: any) => {
    return {
      icon: {
        marginTop: "2px",
        height: "24px",
        width: "24px",
        color: "brand.500",
      },
      title: {
        color: mode("gray.700", "white")(props),
      },
      subtitle: {
        color: mode("gray.500", "gray.300")(props),
      },
    }
  },
}
