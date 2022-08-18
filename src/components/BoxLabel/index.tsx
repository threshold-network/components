import { FC, ReactNode, useMemo } from "react"
import { chakra, TextProps, useMultiStyleConfig } from "@chakra-ui/react"
import { BodyLg, BodyMd, BodySm, BodyXs } from "../Typography"
import {
  BoxLabelVariant,
  BoxLabelSize,
  BoxLabelStatus,
} from "../../theme/BoxLabel"

export interface BoxLabelProps extends TextProps {
  colorScheme?: BoxLabelVariant
  size?: BoxLabelSize
  icon?: ReactNode
  status?: BoxLabelStatus
  variant?: BoxLabelVariant
}

export const BoxLabel: FC<BoxLabelProps> = ({ ...props }) => {
  const sx = useMultiStyleConfig("BoxLabel", props)
  const p = { sx, ...props }

  const TypographyElement = useMemo(() => {
    switch (props.size) {
      case "xs":
        return BodyXs
      case "sm":
        return BodySm
      case "md":
        return BodyMd
      case "lg":
        return BodyLg
      default:
        return BodySm
    }
  }, [props.size])

  return (
    <TypographyElement {...p}>
      {props.icon && (
        <chakra.span
          display="inline-flex"
          alignSelf="center"
          flexShrink={0}
          mr={2}
        >
          {props.icon}
        </chakra.span>
      )}
      {props.children}
    </TypographyElement>
  )
}
