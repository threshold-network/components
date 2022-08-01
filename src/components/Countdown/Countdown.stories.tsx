import { Meta, Story } from "@storybook/react"
import { addLeadingZero } from "../../utils"
import { H4 } from "../Typography"
import { Countdown as CountdownComponent, CountdownProps } from "./index"

const targetUnixTimestamp = Math.floor(Date.now() / 1000) + 600

const Template: Story<CountdownProps> = (args) => {
  return (
    <CountdownComponent {...args}>
      {(days, hours, minutes, seconds) => {
        return (
          <H4 color="brand.500" fontWeight={800}>
            {addLeadingZero(hours)} : {addLeadingZero(minutes)} :{" "}
            {addLeadingZero(seconds)}
          </H4>
        )
      }}
    </CountdownComponent>
  )
}

export const Countdown = Template.bind({})
Countdown.args = {
  targetDateInUnix: targetUnixTimestamp,
}

export default {
  title: "Countdown",
  component: Countdown,
} as Meta
