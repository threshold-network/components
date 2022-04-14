import ReactNumberFormat from "react-number-format"
import { chakra, useMultiStyleConfig } from "@chakra-ui/react"
import { FC } from "react"
import { NumberInputProps } from "../../types"

const ChakraWrapper = chakra(ReactNumberFormat)

const NumberInput: FC<NumberInputProps> = (props) => {
  const { field: css } = useMultiStyleConfig("Input", props)

  return (
    // @ts-ignore
    <ChakraWrapper
      allowLeadingZeros={false}
      thousandSeparator
      __css={css}
      {...props}
    />
  )
}

export default NumberInput
