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
  description?: string | JSX.Element
  isDescriptionHidden?: boolean
  isDescriptionArrowHidden?: boolean
}

export const FlowStep: FC<FlowStepProps> = (props) => {
  const {
    status = "inactive",
    variant = "vertical",
    size = "lg",
    preTitle,
    title,
    description,
    isDescriptionHidden = false,
    isDescriptionArrowHidden = false,
    ...rest
  } = props
  const styles = useMultiStyleConfig("FlowStep", props)

  const isActive = status === "active"
  const isComplete = status === "complete"
  const isSmall = size === "sm"
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
          (typeof description === "string" ? (
            <Box display="flex">
              {!isDescriptionArrowHidden && isActive && (
                <Icon
                  __css={styles.descriptionArrow}
                  as={IoArrowForwardCircleSharp}
                />
              )}
              <Description>{description}</Description>
            </Box>
          ) : (
            description
          ))}
      </Box>
    </Box>
  )
}

export default FlowStep
