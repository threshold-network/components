import { mode } from "@chakra-ui/theme-tools"
import { defineStyle } from "@chakra-ui/styled-system"

const baseStyle = (props: any) => {
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
}

const sizes = {
  lg: defineStyle({
    maxW: "600px",
  }),
}

export const FileUploader = {
  parts: ["container, uploadArea"],
  baseStyle,
  sizes,
  defaultProps: {
    size: "md",
  },
}
