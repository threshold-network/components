import { Meta, Story } from "@storybook/react"
import { FileUploader as FileUploaderComponent } from "./index"

const Template: Story = (args) => {
  return (
    <FileUploaderComponent
      onFileUpload={(file) => console.log("uploaded", file)}
      {...args}
    />
  )
}

export const FileUploader = Template.bind({})

export default {
  title: "FileUploader",
  component: FileUploader,
  argTypes: {
    headerHelperText: {
      description: "Helper text in the top right",
      defaultValue: "Drag and drop to test",
      control: {
        type: "text",
      },
    },
    size: {
      description: "The size of the uploader",
      defaultValue: "lg",
      control: {
        type: "select",
        options: {
          large: "lg",
          small: "sm",
        },
      },
    },
  },
} as Meta
