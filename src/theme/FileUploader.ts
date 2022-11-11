import { mode } from "@chakra-ui/theme-tools"

export const FileUploader = {
  parts: ["container"],
  baseStyle: (props: any) => {
    return {
      container: {
        w: "full",
        maxW: props.size == "lg" ? "600px" : "320px",
      },
      uploadArea: {
        py: 16,
        px: 4,
        border: "1px dashed",
        borderColor: "gray.300",
        bg: mode(
          props.isCurrentlyDragging ? "gray.200" : "gray.50",
          props.isCurrentlyDragging ? "gray.700" : "gray.800"
        )(props),
        borderRadius: "6px",
      },
    }
  },
}
