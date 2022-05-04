import ReactNumberFormat from "react-number-format"
import { chakra, InputProps, useMultiStyleConfig } from "@chakra-ui/react"
import { FC } from "react"

const ChakraWrapper = chakra(ReactNumberFormat)

interface NumberInputValues {
  formattedValue: string
  value: string
  floatValue: number
}

export interface CustomNumberInputProps extends InputProps {
  onValueChange: (values: NumberInputValues) => void
}

const NumberInput: FC<CustomNumberInputProps> = (props) => {
  const { field: css } = useMultiStyleConfig("Input", props)

  return (
    // @ts-ignore
    <ChakraWrapper
      allowLeadingZeros={false}
      thousandSeparator
      __css={css}
      {...props}
      disabled={props.isDisabled}
    />
  )
}

export default NumberInput
