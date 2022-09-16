import React from "react"
import { Meta, Story } from "@storybook/react"
import { Container } from "@chakra-ui/react"
import {
  FilterTabs as FilterTabsComponent,
  FilterTab as FilterTabComponent,
  FilterTabsProps,
} from "./"

interface FilterTabsStoryProps extends FilterTabsProps {}

const Template: Story<FilterTabsStoryProps> = (args) => {
  return (
    <Container>
      <FilterTabsComponent {...args}>
        <FilterTabComponent tabId={"1"}>Filter Tab 1</FilterTabComponent>
        <FilterTabComponent tabId={"2"}>Filter Tab 2</FilterTabComponent>
      </FilterTabsComponent>
    </Container>
  )
}

export const FilterTabs = Template.bind({})

FilterTabs.args = {
  variant: "primary",
  size: "md",
  selectedTabId: "1",
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
