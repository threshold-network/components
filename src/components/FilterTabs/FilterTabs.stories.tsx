import React, { useState } from "react"
import { Meta, Story } from "@storybook/react"
import { Container } from "@chakra-ui/react"
import { FilterTabs as FilterTabsComponent, FilterTabsProps } from "./"

interface FilterTabsStoryProps extends FilterTabsProps {}

const Template: Story<FilterTabsStoryProps> = (args) => {
  const [tab, setTab] = useState("1")
  return (
    <Container>
      <FilterTabsComponent
        {...args}
        size="lg"
        selectedTabId={tab}
        setSelectedTabId={setTab}
      />
    </Container>
  )
}

export const FilterTabs = Template.bind({})

FilterTabs.args = {
  tabs: [
    {
      title: "Tab 1",
      tabId: "1",
      onClick: (tabId) => {
        console.log("tab", tabId)
      },
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
          outline: "outline",
        },
      },
    },
  },
} as Meta
