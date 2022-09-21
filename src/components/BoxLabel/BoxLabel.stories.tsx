import React from "react"
import { Meta, Story } from "@storybook/react"
import { Icon } from "@chakra-ui/react"
import { FiAlertCircle, IoSparklesSharp } from "react-icons/all"
import { BoxLabel as BoxLabelComponent, BoxLabelProps } from "./index"
import { IconMap } from "../../types"

interface BoxLabelStoryProps extends BoxLabelProps {
  icon: string
}

const iconMap: IconMap = {
  Sparkle: <Icon as={IoSparklesSharp} />,
  Alert: <Icon as={FiAlertCircle} />,
}

const Template: Story<BoxLabelStoryProps> = (args) => {
  const icon = iconMap[args.icon]

  return (
    <BoxLabelComponent {...args} icon={icon}>
      Simple Box Label
    </BoxLabelComponent>
  )
}

export const BoxLabel = Template.bind({})

export default {
  title: "BoxLabel",
  component: BoxLabel,
  argTypes: {
    icon: {
      control: {
        type: "select",
        options: {
          Undefined: undefined,
          Sparkle: "Sparkle",
          Alert: "Alert",
        },
      },
    },
    status: {
      description: "Status of the BoxLabel",
      defaultValue: "primary",
      control: {
        type: "select",
        options: {
          primary: "primary",
          secondary: "secondary",
          magic: "magic",
          success: "success",
          error: "error",
          warning: "warning",
        },
      },
    },
    variant: {
      description: "Variant of the BoxLabel",
      defaultValue: "solid",
      control: {
        type: "select",
        options: {
          solid: "solid",
          outline: "outline",
        },
      },
    },
    size: {
      description: "Size of the BoxLabel",
      defaultValue: "md",
      control: {
        type: "select",
        options: {
          xs: "xs",
          sm: "sm",
          md: "md",
          lg: "lg",
        },
      },
    },
  },
} as Meta
