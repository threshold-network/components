import { FC } from "react"
import { Button, ButtonGroup, useStyleConfig } from "@chakra-ui/react"
import { FilterTabSize, FilterTabVariant } from "../../theme/FilterTab"

export interface FilterTabProps {
  title: string
  tabId: string
  onClick: (tabId: string) => void
  selectedTabId: string
  variant: FilterTabVariant
  size: FilterTabSize
}

export interface FilterTabsProps {
  variant?: FilterTabVariant
  size?: FilterTabSize
  selectedTabId: string
  setSelectedTabId: (tabId: string) => void
  tabs: {
    title: string
    tabId: string
    onClick?: (tabId: string) => void
  }[]
}

const FilterTab: FC<FilterTabProps> = ({
  selectedTabId,
  tabId,
  onClick,
  title,
  variant,
  size,
}) => {
  const isActive = selectedTabId === tabId
  const styles = useStyleConfig("FilterTab", { isActive, variant })

  return (
    <Button
      variant={isActive ? "outline" : "ghost"}
      onClick={() => onClick(tabId)}
      size={size}
      sx={styles}
    >
      {title}
    </Button>
  )
}

export const FilterTabs: FC<FilterTabsProps> = ({
  tabs,
  selectedTabId,
  setSelectedTabId,
  variant = "primary",
  size = "md",
}) => {
  const styles = useStyleConfig("FilterTabs", { variant })

  return (
    <ButtonGroup spacing="3" size={size} sx={styles}>
      {tabs.map((tab) => {
        return (
          <FilterTab
            size={size}
            variant={variant}
            key={tab.tabId}
            title={tab.title}
            tabId={tab.tabId}
            onClick={tab.onClick ? tab.onClick : setSelectedTabId}
            selectedTabId={selectedTabId}
          />
        )
      })}
    </ButtonGroup>
  )
}
