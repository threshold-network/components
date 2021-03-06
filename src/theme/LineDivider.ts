import { mode } from "@chakra-ui/theme-tools"

const baseIconSize = 18
const mdIconSize = 24

export const LineDivider = {
  parts: ["dividerWrapper", "divider", "icon"],
  baseStyle: (props: any) => {
    return {
      dividerWrapper: {
        position: "relative",
      },
      divider: {
        my: 6,
      },
      icon: {
        color: mode("gray.600", "gray.600")(props),
        bg: mode("white", "gray.800")(props),
        position: "absolute",
        left: 0,
        right: 0,
        margin: "auto",
        top: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 1,
        w: { base: `${baseIconSize}px`, md: `${mdIconSize}px` },
        h: { base: `${baseIconSize}px`, md: `${mdIconSize}px` },
      },
    }
  },
}
