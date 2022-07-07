import { FC } from "react"
import { Box, Icon, useColorModeValue } from "@chakra-ui/react"
import { BodyMd, BodySm, LabelLg, LabelSm, LabelXs } from "../Typography"
import { IoArrowForwardCircleSharp } from "react-icons/all"

export type FlowStepStatus = "active" | "inactive" | "complete"
export type FlowStepPosition = "vertical" | "horizontal"
export type FlowStepSize = "sm" | "lg"

export interface FlowStepProps {
  status?: FlowStepStatus
  position?: FlowStepPosition
  size?: FlowStepSize
  preTitle: string
  title: string
  description?: string | JSX.Element
  hideDescription?: boolean
  hideDescriptionArrow?: boolean
}

export const FlowStep: FC<FlowStepProps> = ({
  status = "inactive",
  position = "vertical",
  size = "lg",
  preTitle,
  title,
  description,
  hideDescription = false,
  hideDescriptionArrow = false,
}) => {
  const isActive = status === "active"
  const isComplete = status === "complete"
  const isVertical = position === "vertical"
  const PreTitle = size === "sm" ? LabelXs : LabelSm
  const Title = size === "sm" ? LabelSm : LabelLg
  const Description = size === "sm" ? BodySm : BodyMd

  return (
    <Box display="flex" mb={4} flexDirection={isVertical ? "row" : "column"}>
      <Box
        bg={
          isActive || isComplete
            ? useColorModeValue("brand.500", "brand.300")
            : "gray.300"
        }
        w={isVertical ? "4px" : "auto"}
        h={isVertical ? "auto" : "4px"}
        mb={isVertical ? 0 : 4}
        minH="100%"
      />
      <Box pl={isVertical ? 4 : 0} w="full">
        <PreTitle mb={2} color={useColorModeValue("brand.500", "brand.300")}>
          {preTitle}
        </PreTitle>
        <Title mb={2}>{title}</Title>
        {!hideDescription &&
          !isComplete &&
          (typeof description === "string" ? (
            <Box display="flex">
              {!hideDescriptionArrow && isActive && (
                <Icon
                  mt={size === "sm" ? "2px" : "4px"}
                  w="16px"
                  h="16px"
                  mr={2}
                  color={useColorModeValue("brand.500", "brand.300")}
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
