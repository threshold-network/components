import { FC } from "react"
import { Box, BoxProps, Icon, useMultiStyleConfig } from "@chakra-ui/react"
import { BodyMd, BodySm, LabelLg, LabelSm, LabelXs } from "../Typography"
import { IoArrowForwardCircleSharp } from "react-icons/all"
import {
  FlowStepSize,
  FlowStepStatus,
  FlowStepVariant,
} from "../../theme/FlowStep"

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
    variant = FlowStepVariant.vertical,
    size = FlowStepSize.lg,
    preTitle,
    title,
    children,
    isDescriptionHidden = false,
    isDescriptionArrowHidden = false,
    ...rest
  } = props
  const styles = useMultiStyleConfig("FlowStep", props)

  const isActive = status === FlowStepStatus.active
  const isComplete = status === FlowStepStatus.complete
  const isSmall = size === FlowStepSize.sm
  const PreTitle = isSmall ? LabelXs : LabelSm
  const Title = isSmall ? LabelSm : LabelLg
  const Description = isSmall ? BodySm : BodyMd

  return (
    <Box __css={styles.wrapper} {...rest}>
      <Box __css={styles.divider} />
      <Box __css={styles.subWrapper}>
        <PreTitle __css={styles.preTitle}>{preTitle}</PreTitle>
        <Title __css={styles.title}>{title}</Title>
        {!isDescriptionHidden &&
          !isComplete &&
          (typeof children === "string" ? (
            <Box display="flex">
              {!isDescriptionArrowHidden && isActive && (
                <Icon
                  __css={styles.descriptionArrow}
                  as={IoArrowForwardCircleSharp}
                />
              )}
              <Description>{children}</Description>
            </Box>
          ) : (
            children
          ))}
      </Box>
    </Box>
  )
}

export default FlowStep
