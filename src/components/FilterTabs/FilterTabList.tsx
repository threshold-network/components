import { ButtonGroupProps, useStyleConfig, ButtonGroup } from "@chakra-ui/react"
import { FC } from "react"
import { FilterTabVariant, FilterTabSize } from "../../theme/FilterTab"
import { FilterTabListProvider } from "./context"

export interface FilterTabListProps extends ButtonGroupProps {
  variant?: FilterTabVariant
  size?: FilterTabSize
  selectedTabId?: string
  onTabClick?: (tabId: string) => void
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
    <FilterTabListProvider
      onTabClick={onTabClick}
      variant={variant}
      selectedTabId={selectedTabId}
    >
      <ButtonGroup spacing="3" size={size} sx={styles} {...props}>
        {children}
      </ButtonGroup>
    </FilterTabListProvider>
  )
}
