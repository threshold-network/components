import { createContext, FC, useState } from "react"

export const FilterTabsContext = createContext({
  selectedTabId: "",
  variant: "primary",
  onTabClick: (tabId: string) => {},
})

interface TabsProviderProps {
  selectedTabId?: string
  variant?: string
  onTabClick?: (tabId: string) => void
}

export const FilterTabsProvider: FC<TabsProviderProps> = (props) => {
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
