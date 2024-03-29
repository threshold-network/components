import { Meta, Story } from "@storybook/react"
import { Box } from "@chakra-ui/react"
import {
  BodyLg,
  BodyMd,
  BodySm,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  LabelLg,
  LabelMd,
  LabelSm,
} from "./index"

const Template: Story = () => {
  return (
    <Box>
      <H1>Here is H1</H1>
      <H2>Here is H2</H2>
      <H3>Here is H3</H3>
      <H4>Here is H4</H4>
      <H5>Here is H5</H5>
      <H6>Here is H6</H6>
      <BodyLg>Body Lg</BodyLg>
      <BodyMd>Body Md</BodyMd>
      <BodySm>Body Sm</BodySm>
      <LabelLg>Label Lg</LabelLg>
      <LabelMd>Label Md</LabelMd>
      <LabelSm>Label Sm</LabelSm>
    </Box>
  )
}

export const Typography = Template.bind({})

export default {
  title: "Typography",
  component: Typography,
} as Meta
