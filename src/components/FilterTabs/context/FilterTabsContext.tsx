import { createContext, FC, useContext, useState } from "react"

export const useFilterTabsContext = () => {
  return useContext(FilterTabsContext)
}

export const FilterTabsContext = createContext({
  selectedTabId: "",
  variant: "primary",
  onTabClick: (tabId: string) => {},
})

export interface FilterTabsProviderProps {
  selectedTabId?: string
  variant?: string
  onTabClick?: (tabId: string) => void
}

export const FilterTabsProvider: FC<FilterTabsProviderProps> = (props) => {
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
