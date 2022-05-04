import { mode } from "@chakra-ui/theme-tools"

export const IconSpinner = {
  parts: ["iconSpinnerWrapper", "chakraSpinner", "icon"],
  baseStyle: (props: any) => {
    return {
      iconSpinnerWrapper: {
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
      },
      chakraSpinner: {
        color: "brand.500",
        height: "120px",
        width: "120px",
      },
      icon: {
        position: "absolute",
        height: "60px",
        width: "60px",
      },
    }
  },
}
