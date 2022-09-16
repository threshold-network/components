import { createContext, FC, useContext, useState } from "react"

export const useFilterTabsContext = () => {
  const context = useContext(FilterTabsContext)

  if (!context) {
    throw new Error(
      "FilterTabs context was used outside of <FilterTabs> component. Please wrap your component with <FilterTab></FilterTabs> to create a proper context."
    )
  }
  return context
}

export interface FilterTabsContextProps {
  selectedTabId: string
  variant: string
  onTabClick: (tabId: string) => void
}

export const FilterTabsContext = createContext<
  FilterTabsContextProps | undefined
>(undefined)

export interface FilterTabsProviderProps
  extends Partial<FilterTabsContextProps> {}

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
