import { FC } from "react"
import { Button, ButtonGroup, useColorModeValue } from "@chakra-ui/react"

export type Variant = "primary" | "outline"
export type Size = "xs" | "sm" | "md" | "lg"

export interface FilterTabProps {
  title: string
  tabId: string
  onClick?: (tabId: string) => void
  selectedTabId: string
  variant: Variant
  size: Size
}

export interface FilterTabsProps {
  variant?: Variant
  size?: Size
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

  const activeColor = useColorModeValue(
    variant === "primary" ? "brand.500" : "gray.700",
    variant === "primary" ? "brand.100" : "gray.50"
  )
  const passiveColor = "gray.500"

  const activeBg = useColorModeValue(
    variant === "primary" ? "brand.50" : "white",
    variant === "primary" ? "brand.800" : "gray.900"
  )

  const activeBorderColor = useColorModeValue("gray.50", "gray.300")

  const passiveHoverBg = useColorModeValue(
    variant === "primary" ? "brand.50" : "white",
    variant === "primary" ? "brand.800" : "gray.800"
  )

  return (
    <Button
      isFullWidth
      border={variant === "primary" ? "none" : undefined}
      variant={isActive ? "outline" : "ghost"}
      bg={isActive ? activeBg : undefined}
      _hover={{
        bg: isActive ? activeBg : passiveHoverBg,
      }}
      _active={{
        bg: isActive ? activeBg : undefined,
      }}
      color={isActive ? activeColor : passiveColor}
      borderColor={isActive ? activeBorderColor : undefined}
      onClick={() => onClick?.(tabId)}
      size={size}
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
  const bgColor = useColorModeValue(
    variant === "primary" ? "white" : "gray.50",
    "gray.900"
  )

  return (
    <ButtonGroup
      boxShadow={variant === "primary" ? "md" : undefined}
      backgroundColor={bgColor}
      borderRadius="6px"
      p={1}
      spacing="3"
      size={size}
      w="full"
    >
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
