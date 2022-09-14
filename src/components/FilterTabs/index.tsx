import { createContext, FC, useContext, useState } from "react"
import {
  Button,
  ButtonGroup,
  ButtonGroupProps,
  useStyleConfig,
  ChakraComponent,
} from "@chakra-ui/react"
import { FilterTabSize, FilterTabVariant } from "../../theme/FilterTab"

export interface FilterTabComponent
  extends ChakraComponent<"button", { tabId: string }> {}

export interface FilterTabListProps extends ButtonGroupProps {
  variant?: FilterTabVariant
  size?: FilterTabSize
  selectedTabId?: string
  onTabClick?: (tabId: string) => void
}

const FilterTabsContext = createContext({
  selectedTabId: "",
  variant: "primary",
  onTabClick: (tabId: string) => {},
})

interface TabsProviderProps {
  selectedTabId?: string
  variant?: string
  onTabClick?: (tabId: string) => void
}

const FilterTabsProvider: FC<TabsProviderProps> = (props) => {
  const [selectedTabId, setSelectedTabId] = useState(props.selectedTabId || "")
  const variant = props.variant ? props.variant : "primary"

  return (
    <FilterTabsContext.Provider
      value={{
        selectedTabId,
        variant,
        onTabClick: (tabId) => {
          if (props.onTabClick) {
            props.onTabClick(tabId)
          }
          setSelectedTabId(tabId)
        },
      }}
    >
      {props.children}
    </FilterTabsContext.Provider>
  )
}

export const FilterTab: FilterTabComponent = ({
  tabId,
  children,
  ...props
}) => {
  const { selectedTabId, variant, onTabClick } = useContext(FilterTabsContext)
  const isActive = selectedTabId === tabId
  const styles = useStyleConfig("FilterTab", { isActive, variant })

  return (
    <Button
      isActive={isActive}
      variant={isActive ? "outline" : "ghost"}
      onClick={() => onTabClick(tabId)}
      sx={styles}
      {...props}
    >
      {children}
    </Button>
  )
}

export const FilterTabList: FC<FilterTabListProps> = ({
  variant = "primary",
  size = "md",
  selectedTabId,
  onTabClick,
  children,
  ...props
}) => {
  const styles = useStyleConfig("FilterTabs", { variant })

  return (
    <FilterTabsProvider
      onTabClick={onTabClick}
      variant={variant}
      selectedTabId={selectedTabId}
    >
      <ButtonGroup spacing="3" size={size} sx={styles} {...props}>
        {children}
      </ButtonGroup>
    </FilterTabsProvider>
  )
}
