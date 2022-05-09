import { Box, BoxProps, useStyleConfig } from "@chakra-ui/react"
import { FC } from "react"

export const Card: FC<BoxProps> = (props) => {
  const styles = useStyleConfig("Card", props)
  return <Box __css={styles} {...props} />
}
