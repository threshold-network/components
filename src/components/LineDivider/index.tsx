import React, { FC } from "react"
import {
  Box,
  Divider as ChakraDivider,
  DividerProps,
  Icon,
  IconProps,
  StylesProvider,
  useMultiStyleConfig,
  useStyles,
} from "@chakra-ui/react"
import { HTMLChakraProps } from "@chakra-ui/system"

export const LineDividerIcon: FC<HTMLChakraProps<"span"> & IconProps> = ({
  as,
  ...restProps
}) => {
  return <LineDividerCenterElement as={as} {...restProps} />
}

export const LineDividerCenterElement: FC<HTMLChakraProps<"div">> = ({
  children,
  as,
  ...propStyles
}) => {
  const styles = useStyles()

  return (
    <Box as={as} __css={{ ...styles.icon, ...propStyles }}>
      {children}
    </Box>
  )
}

export const LineDivider = ({
  children,
  ...props
}: Omit<DividerProps, "orientation">) => {
  const styles = useMultiStyleConfig("LineDivider", {})
  const hasChildren = React.Children.count(children) > 0
  const Wrapper = !hasChildren ? React.Fragment : Box
  const wrapperProps = !hasChildren ? {} : { __css: styles.dividerWrapper }

  return (
    <Wrapper {...wrapperProps}>
      <StylesProvider value={styles}>
        {children}
        <ChakraDivider __css={styles.divider} {...props} />
      </StylesProvider>
    </Wrapper>
  )
}
