import { Meta, Story } from "@storybook/react"
import { AlertBox as AlertBoxComponent, AlertBoxProps } from "."

const Template: Story<AlertBoxProps> = (args) => {
  return <AlertBoxComponent {...args}>Some alert!</AlertBoxComponent>
}

export const AlertBox = Template.bind({})

export default {
  title: "AlertBox",
  component: AlertBox,
  argTypes: {
    status: {
      description: "The status of the AlertBox",
      defaultValue: "error",
      control: {
        type: "select",
        options: {
          error: "error",
          success: "success",
          warning: "warning",
          info: "info",
          magic: "magic",
        },
      },
    },
    withIcon: {
      description: "Should display proper icon for the given status",
      defaultValue: true,
      control: {
        type: "boolean",
      },
    },
  },
} as Meta
