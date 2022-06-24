import { createContext, FC, useContext, useState } from "react"
import { Button, ButtonGroup, useStyleConfig } from "@chakra-ui/react"
import { FilterTabSize, FilterTabVariant } from "../../theme/FilterTab"

export interface FilterTabProps {
  title: string
  tabId: string
  variant: FilterTabVariant
}

export interface FilterTabsProps {
  variant?: FilterTabVariant
  size?: FilterTabSize
  selectedTabId?: string
  onTabClick?: (tabId: string) => void
  tabs: {
    title: string
    tabId: string
    onClick?: (tabId: string) => void
  }[]
}

const FilterTabsContext = createContext({
  selectedTabId: "",
  onTabClick: (tabId: string) => {},
})

interface TabsProviderProps {
  selectedTabId?: string
  onTabClick?: (tabId: string) => void
}

const FilterTabsProvider: FC<TabsProviderProps> = (props) => {
  const [selectedTabId, setSelectedTabId] = useState(props.selectedTabId || "")

  return (
    <FilterTabsContext.Provider
      value={{
        selectedTabId,
        onTabClick: props.onTabClick || setSelectedTabId,
      }}
    >
      {props.children}
    </FilterTabsContext.Provider>
  )
}

const FilterTab: FC<FilterTabProps> = ({ tabId, title, variant }) => {
  const { selectedTabId, onTabClick } = useContext(FilterTabsContext)
  const isActive = selectedTabId === tabId
  const styles = useStyleConfig("FilterTab", { isActive, variant })

  console.log("styles ", styles)

  return (
    <Button
      isActive={isActive}
      variant={isActive ? "outline" : "ghost"}
      onClick={() => onTabClick(tabId)}
      sx={styles}
    >
      {title}
    </Button>
  )
}

export const FilterTabs: FC<FilterTabsProps> = ({
  tabs,
  variant = "primary",
  size = "md",
  selectedTabId,
  onTabClick,
}) => {
  const styles = useStyleConfig("FilterTabs", { variant })

  return (
    <FilterTabsProvider
      onTabClick={onTabClick}
      selectedTabId={selectedTabId || tabs[0].tabId}
    >
      <ButtonGroup spacing="3" size={size} sx={styles}>
        {tabs.map((tab) => {
          return (
            <FilterTab
              variant={variant}
              key={tab.tabId}
              title={tab.title}
              tabId={tab.tabId}
            />
          )
        })}
      </ButtonGroup>
    </FilterTabsProvider>
  )
}
