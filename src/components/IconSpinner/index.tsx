import {
  Flex,
  Icon,
  Spinner as ChakraSpinner,
  SpinnerProps,
  useMultiStyleConfig,
} from "@chakra-ui/react"
import { FC } from "react"
import { IconType } from "react-icons"

export interface IconSpinnerProps extends SpinnerProps {
  icon?: IconType
}

export const IconSpinner: FC<IconSpinnerProps> = ({
  icon,
  ...restSpinnerProps
}) => {
  const styles = useMultiStyleConfig("IconSpinner", restSpinnerProps)
  return (
    <Flex sx={styles.iconSpinnerWrapper}>
      <ChakraSpinner
        thickness="8px"
        speed="1.3s"
        emptyColor="gray.200"
        {...restSpinnerProps}
        sx={styles.chakraSpinner}
      />
      <Icon sx={styles.icon} as={icon} />
    </Flex>
  )
}
