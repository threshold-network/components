import { Alert, AlertIcon, AlertProps, AlertStatus } from "@chakra-ui/react"
import { CheckIcon, InfoIcon, WarningIcon } from "@chakra-ui/icons"
import { FC } from "react"

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
  if (status === "magic") {
    return (
      <Alert status="info" {...restProps} backgroundColor="brand.100">
        {withIcon && <AlertIcon color="brand.500" />}
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
