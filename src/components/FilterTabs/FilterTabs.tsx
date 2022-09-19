import { ButtonGroupProps, useStyleConfig, ButtonGroup } from "@chakra-ui/react"
import { FC } from "react"
import { FilterTabVariant, FilterTabSize } from "../../theme/FilterTab"
import { FilterTabsProvider } from "./context"

export interface FilterTabsProps extends ButtonGroupProps {
  variant?: FilterTabVariant
  size?: FilterTabSize
  selectedTabId?: string
  onTabClick?: (tabId: string) => void
}

export const FilterTabs: FC<FilterTabsProps> = ({
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
