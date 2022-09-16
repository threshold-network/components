import { ChakraComponent, useStyleConfig, Button } from "@chakra-ui/react"
import { useFilterTabsContext } from "./context"

export interface FilterTabComponent
  extends ChakraComponent<"button", { tabId: string }> {}

export const FilterTab: FilterTabComponent = ({
  tabId,
  children,
  ...props
}) => {
  const { selectedTabId, variant, onTabClick } = useFilterTabsContext()
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
