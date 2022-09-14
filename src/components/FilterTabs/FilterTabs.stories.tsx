import React from "react"
import { Meta, Story } from "@storybook/react"
import { Container } from "@chakra-ui/react"
import {
  FilterTabList as FilterTabListComponent,
  FilterTab as FilterTabComponent,
  FilterTabListProps,
} from "./"

interface FilterTabListStoryProps extends FilterTabListProps {}

const Template: Story<FilterTabListStoryProps> = (args) => {
  return (
    <Container>
      <FilterTabListComponent {...args}>
        <FilterTabComponent tabId={"1"}>Filter Tab 1</FilterTabComponent>
        <FilterTabComponent tabId={"2"}>Filter Tab 2</FilterTabComponent>
      </FilterTabListComponent>
    </Container>
  )
}

export const FilterTabList = Template.bind({})

FilterTabList.args = {
  variant: "primary",
  size: "md",
  selectedTabId: "1",
}

export default {
  title: "FilterTabs",
  component: FilterTabList,
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
