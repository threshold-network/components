import React from "react"
import { Story, Meta } from "@storybook/react"
import { DividerProps, Container, Text } from "@chakra-ui/react"
import { LineDivider as LineDividerComponent, LineDividerIcon } from "./"
import {
  FaArrowCircleDown,
  FaArrowCircleUp,
  FiAlertCircle,
} from "react-icons/all"
import { IconMap } from "../../types"

interface LineDividerStoryProps extends Omit<DividerProps, "orientation"> {
  children: string | undefined
}

const iconMap: IconMap = {
  ArrowDown: <LineDividerIcon as={FaArrowCircleDown} />,
  ArrowUp: <LineDividerIcon as={FaArrowCircleUp} />,
  Alert: <LineDividerIcon as={FiAlertCircle} />,
}

const Template: Story<LineDividerStoryProps> = ({ children }) => {
  const icon = children ? iconMap[children] : undefined
  return (
    <Container>
      <Text>Above the divider</Text>
      <LineDividerComponent>{icon}</LineDividerComponent>
      <Text>Below the divider</Text>
    </Container>
  )
}

export const LineDivider = Template.bind({})

export default {
  title: "LineDivider",
  component: LineDivider,
  argTypes: {
    children: {
      description:
        "You can add an icon to the divider by passing `< DividerIcon as={YOUR_ICON} />`",
      control: {
        type: "select",
        options: {
          Undefined: undefined,
          ArrowDown: "ArrowDown",
          ArrowUp: "ArrowUp",
          Alert: "Alert",
        },
      },
      table: {
        defaultValue: { summary: "undefined" },
      },
    },
  },
} as Meta
