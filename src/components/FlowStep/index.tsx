import { FC } from "react"
import { Box, BoxProps, Icon, useMultiStyleConfig } from "@chakra-ui/react"
import { BodyMd, BodySm, LabelLg, LabelSm, LabelXs } from "../Typography"
import { IoArrowForwardCircleSharp } from "react-icons/all"

export enum FlowStepStatus {
  active = "ACTIVE",
  inactive = "INACTIVE",
  complete = "COMPLETE",
}

export type FlowStepVariant = "vertical" | "horizontal"
export type FlowStepSize = "sm" | "lg"

export interface FlowStepProps extends BoxProps {
  status?: FlowStepStatus
  variant?: FlowStepVariant
  size?: FlowStepSize
  preTitle: string
  title: string
  isDescriptionHidden?: boolean
  isDescriptionArrowHidden?: boolean
}

export const FlowStep: FC<FlowStepProps> = (props) => {
  const {
    status = FlowStepStatus.inactive,
    variant = "vertical",
    size = "lg",
    preTitle,
    title,
    children,
    isDescriptionHidden = false,
    isDescriptionArrowHidden = false,
    ...rest
  } = props

  const styles = useMultiStyleConfig("FlowStep", {
    status,
    variant,
    size,
    ...rest,
  })

  const isActive = status === FlowStepStatus.active
  const isComplete = status === FlowStepStatus.complete
  const isSmall = size === "sm"
  const PreTitle = isSmall ? LabelXs : LabelSm
  const Title = isSmall ? LabelSm : LabelLg
  const Description = isSmall ? BodySm : BodyMd

  return (
    <Box sx={styles.wrapper} {...rest}>
      <Box sx={styles.divider} />
      <Box sx={styles.subWrapper}>
        <PreTitle sx={styles.preTitle}>{preTitle}</PreTitle>
        <Title sx={styles.title}>{title}</Title>
        {!isDescriptionHidden &&
          !isComplete &&
          (typeof children === "string" ? (
            <Box display="flex">
              {!isDescriptionArrowHidden && isActive && (
                <Icon
                  sx={styles.descriptionArrow}
                  as={IoArrowForwardCircleSharp}
                />
              )}
              <Description>{children}</Description>
            </Box>
          ) : isDescriptionArrowHidden ? (
            children
          ) : (
            <Box display="flex">
              <Icon
                sx={styles.descriptionArrow}
                as={IoArrowForwardCircleSharp}
              />
              <Box>{children}</Box>
            </Box>
          ))}
      </Box>
    </Box>
  )
}
