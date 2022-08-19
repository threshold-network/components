import {
  Alert,
  AlertIcon,
  AlertProps,
  AlertStatus,
  useColorMode,
  Image,
} from "@chakra-ui/react"
import { CheckIcon, InfoIcon, WarningIcon } from "@chakra-ui/icons"
import { FC } from "react"
import magicAlertIcon from "../../static/images/MagicAlertIcon.png"

const ALERT_BOX_STATUSES = {
  info: { icon: InfoIcon, colorScheme: "blue" },
  warning: { icon: WarningIcon, colorScheme: "orange" },
  success: { icon: CheckIcon, colorScheme: "green" },
  error: { icon: WarningIcon, colorScheme: "red" },
  magic: { icon: InfoIcon, colorScheme: "brand" },
}

export type AlertBoxStatus = keyof typeof ALERT_BOX_STATUSES

export interface AlertBoxProps extends Omit<AlertProps, "status"> {
  status?: AlertBoxStatus
  withIcon?: boolean
}

export const AlertBox: FC<AlertBoxProps> = ({
  children,
  status,
  withIcon = true,
  ...restProps
}) => {
  const { colorMode } = useColorMode()

  const isDarkMode = colorMode === "dark"

  if (status === "magic") {
    return (
      <Alert
        status="info"
        backgroundColor={isDarkMode ? "rgba(255, 255, 255, 0.08)" : "brand.100"}
        borderColor={isDarkMode ? "brand.400" : "brand.500"}
        {...restProps}
      >
        {withIcon && <Image h="20px" src={magicAlertIcon} mr={2} />}
        {children}
      </Alert>
    )
  }
  return (
    <Alert status={status} {...restProps}>
      {withIcon && <AlertIcon />}
      {children}
    </Alert>
  )
}
