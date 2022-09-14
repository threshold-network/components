import { createContext, FC, useState } from "react"

export const FilterTabListContext = createContext({
  selectedTabId: "",
  variant: "primary",
  onTabClick: (tabId: string) => {},
})

export interface FilterTabListProviderProps {
  selectedTabId?: string
  variant?: string
  onTabClick?: (tabId: string) => void
}

export const FilterTabListProvider: FC<FilterTabListProviderProps> = (
  props
) => {
  const [selectedTabId, setSelectedTabId] = useState(props.selectedTabId || "")
  const variant = props.variant ? props.variant : "primary"

  return (
    <FilterTabListContext.Provider
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
    </FilterTabListContext.Provider>
  )
}
