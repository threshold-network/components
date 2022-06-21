import React, { useState } from "react"
import { Meta, Story } from "@storybook/react"
import { Container, TabsProps } from "@chakra-ui/react"
import { FilterTabs as FilterTabsComponent } from "./"

interface FilterTabsStoryProps extends TabsProps {}

const Template: Story<FilterTabsStoryProps> = () => {
  const [tab, setTab] = useState("1")
  return (
    <Container>
      <FilterTabsComponent
        variant="outline"
        size="lg"
        selectedTabId={tab}
        setSelectedTabId={setTab}
        tabs={[
          {
            title: "Tab 1",
            tabId: "1",
            onClick: (tabId) => {
              console.log("tab", tabId)
              setTab(tabId)
            },
          },
          { title: "Tab 2", tabId: "2" },
          { title: "Tab 3", tabId: "3" },
          { title: "Tab 4", tabId: "4" },
        ]}
      />
      <FilterTabsComponent
        size="lg"
        selectedTabId={tab}
        setSelectedTabId={setTab}
        tabs={[
          {
            title: "Tab 1",
            tabId: "1",
            onClick: (tabId) => {
              console.log("tab", tabId)
              setTab(tabId)
            },
          },
          { title: "Tab 2", tabId: "2" },
          { title: "Tab 3", tabId: "3" },
          { title: "Tab 4", tabId: "4" },
        ]}
      />
    </Container>
  )
}

export const FilterTabs = Template.bind({})

export default {
  title: "FilterTabs",
  component: FilterTabs,
  argTypes: {
    children: {
      description: "Use the filter tabs to switch between states",
    },
  },
} as Meta
