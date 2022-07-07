import React from "react"
import { Meta, Story } from "@storybook/react"
import { Container, Link, Image } from "@chakra-ui/react"
import customDescriptionImage from "./customDescriptionImage.png"
import { FlowStep as FlowStepComponent, FlowStepProps } from "./"
import { BodyMd } from "../Typography"

interface FlowStepStoryProps extends FlowStepProps {
  customDescription: boolean
}

const CustomDescription = (
  <>
    <BodyMd mb={2}>
      Provide an ETH address and a BTC Recovery address to generate an unique
      BTC deposit address. <Link color="purple.500">Read more</Link>
    </BodyMd>
    <Image maxW="240px" src={customDescriptionImage} />
  </>
)

const Template: Story<FlowStepStoryProps> = (args) => {
  const description = args.customDescription
    ? CustomDescription
    : args.description

  return (
    <Container>
      <FlowStepComponent {...args} description={description} />
    </Container>
  )
}

export const FlowStep = Template.bind({})

FlowStep.args = {
  preTitle: "Step 1",
  title: "Provide Data",
  description:
    "Provide an ETH address and a BTC Recovery address to generate an unique BTC deposit address.",
  hideDescription: false,
  hideDescriptionArrow: false,
}

export default {
  title: "FlowStep",
  component: FlowStep,
  argTypes: {
    customDescription: {
      description: "Show a custom description",
      defaultValue: false,
      control: {
        type: "boolean",
      },
    },
    size: {
      description: "The size of the flow step",
      defaultValue: "lg",
      control: {
        type: "select",
        options: {
          sm: "sm",
          lg: "lg",
        },
      },
    },
    position: {
      description: "The position of the flow step",
      defaultValue: "vertical",
      control: {
        type: "select",
        options: {
          vertical: "vertical",
          horizontal: "horizontal",
        },
      },
    },
    status: {
      description: "The status of the flow step",
      defaultValue: "inactive",
      control: {
        type: "select",
        options: {
          active: "active",
          inactive: "inactive",
          complete: "complete",
        },
      },
    },
  },
} as Meta
