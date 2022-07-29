import { mode } from "@chakra-ui/theme-tools"
import { FlowStepStatus } from "../components/FlowStep"

export const FlowStep = {
  parts: [
    "wrapper",
    "divider",
    "subWrapper",
    "preTitle",
    "title",
    "description",
    "descriptionArrow",
  ],
  baseStyle: (props: any) => {
    const isActive = props.status === FlowStepStatus.active
    const isComplete = props.status === FlowStepStatus.complete

    return {
      wrapper: {
        display: "flex",
        mb: 4,
      },
      subWrapper: {
        w: "100%",
      },
      divider: {
        bg:
          isActive || isComplete
            ? mode("brand.500", "brand.300")(props)
            : "gray.300",
        minH: "100%",
      },
      preTitle: {
        mb: 2,
        color: mode("brand.500", "brand.300")(props),
      },
      title: {
        mb: 2,
      },
      description: {},
      descriptionArrow: {
        w: "16px",
        h: "16px",
        mr: 2,
        color: mode("brand.500", "brand.300")(props),
      },
    }
  },
  variants: {
    horizontal: {
      wrapper: {
        flexDirection: "column",
      },
      divider: {
        w: "auto",
        h: "4px",
        mb: 4,
      },
      subWrapper: {
        pl: 0,
      },
    },
    vertical: {
      wrapper: {
        flexDirection: "row",
      },
      divider: {
        w: "4px",
        h: "auto",
        mb: 0,
      },
      subWrapper: {
        pl: 4,
      },
    },
  },
  sizes: {
    sm: {
      descriptionArrow: {
        mt: "2px",
      },
    },
    lg: {
      descriptionArrow: {
        mt: "4px",
      },
    },
  },
}
