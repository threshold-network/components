import { mode } from "@chakra-ui/theme-tools"

export const CheckListItem = {
  parts: ["checkListItemWrapper", "icon", "title", "subtitle"],
  baseStyle: (props: any) => {
    return {
      icon: {
        marginTop: "2px",
        height: "22px",
        width: "22px",
        color: "green.500",
      },
      title: {
        color: mode("blue", "red")(props),
      },
      subtitle: {
        color: mode("gray.500", "gray.300")(props),
      },
    }
  },
}
