import {
  Flex,
  Icon,
  Spinner as ChakraSpinner,
  useMultiStyleConfig,
} from "@chakra-ui/react"
import { FC } from "react"
import { IconType } from "react-icons"

export interface IconSpinnerProps {
  icon?: IconType
}

export const IconSpinner: FC<IconSpinnerProps> = ({ icon }) => {
  const styles = useMultiStyleConfig("IconSpinner", {})
  return (
    <Flex sx={styles.iconSpinnerWrapper}>
      <ChakraSpinner
        thickness="8px"
        speed="1.3s"
        emptyColor="gray.200"
        sx={styles.chakraSpinner}
      />
      <Icon sx={styles.icon} as={icon} />
    </Flex>
  )
}
