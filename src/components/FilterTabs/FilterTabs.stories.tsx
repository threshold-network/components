import React from "react"
import { Meta, Story } from "@storybook/react"
import { Container } from "@chakra-ui/react"
import { FilterTabs as FilterTabsComponent, FilterTabsProps } from "./"

interface FilterTabsStoryProps extends FilterTabsProps {}

const Template: Story<FilterTabsStoryProps> = (args) => {
  return (
    <Container>
      <FilterTabsComponent {...args} />
    </Container>
  )
}

export const FilterTabs = Template.bind({})

FilterTabs.args = {
  tabs: [
    {
      title: "Tab 1",
      tabId: "1",
    },
    { title: "Tab 2", tabId: "2" },
    { title: "Tab 3", tabId: "3" },
    { title: "Tab 4", tabId: "4" },
  ],
}

export default {
  title: "FilterTabs",
  component: FilterTabs,
  argTypes: {
    tabs: {
      description: "The tabs that will be rendered",
    },
    variant: {
      description: "The variant of the filter",
      defaultValue: "primary",
      control: {
        type: "select",
        options: {
          primary: "primary",
          inline: "inline",
        },
      },
    },
    size: {
      description: "The size of the filter",
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
