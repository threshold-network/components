import React from "react"
import { Meta, Story } from "@storybook/react"
import { Container, Link, Image } from "@chakra-ui/react"
import DepositBTCAddressCreationImage from "../../static/images/DepositBTCAddressCreationImage.png"
import { FlowStep as FlowStepComponent, FlowStepProps } from "./"
import { BodyMd } from "../Typography"
import {
  FlowStepSize,
  FlowStepStatus,
  FlowStepVariant,
} from "../../theme/FlowStep"

interface FlowStepStoryProps extends FlowStepProps {
  useCustomChildren: boolean
}

const JsxChildren = (
  <>
    <BodyMd mb={2}>
      Provide an ETH address and a BTC Recovery address to generate an unique
      BTC deposit address. <Link color="purple.500">Read more</Link>
    </BodyMd>
    <Image maxW="240px" src={DepositBTCAddressCreationImage} />
  </>
)

const Template: Story<FlowStepStoryProps> = (args) => {
  const children = args.useCustomChildren ? JsxChildren : args.children

  return (
    <Container>
      <FlowStepComponent {...args}>{children}</FlowStepComponent>
    </Container>
  )
}

export const FlowStep = Template.bind({})

FlowStep.args = {
  preTitle: "Step 1",
  title: "Provide Data",
  children:
    "Provide an ETH address and a BTC Recovery address to generate an unique BTC deposit address.",
  isDescriptionHidden: false,
  isDescriptionArrowHidden: false,
}

export default {
  title: "FlowStep",
  component: FlowStep,
  argTypes: {
    useCustomChildren: {
      description: "Show a custom description",
      defaultValue: false,
      control: {
        type: "boolean",
      },
    },
    size: {
      description: "The size of the flow step",
      defaultValue: FlowStepSize.lg,
      control: {
        type: "select",
        options: {
          sm: FlowStepSize.sm,
          lg: FlowStepSize.lg,
        },
      },
    },
    variant: {
      description: "The position of the flow step",
      defaultValue: FlowStepVariant.vertical,
      control: {
        type: "select",
        options: {
          vertical: FlowStepVariant.vertical,
          horizontal: FlowStepVariant.horizontal,
        },
      },
    },
    status: {
      description: "The status of the flow step",
      defaultValue: FlowStepStatus.inactive,
      control: {
        type: "select",
        options: {
          active: FlowStepStatus.active,
          inactive: FlowStepStatus.inactive,
          complete: FlowStepStatus.complete,
        },
      },
    },
  },
} as Meta
