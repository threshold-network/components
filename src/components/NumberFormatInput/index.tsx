import ReactNumberFormat from "react-number-format"
import { chakra, InputProps, useMultiStyleConfig } from "@chakra-ui/react"
import { FC } from "react"

const ChakraWrapper = chakra(ReactNumberFormat)

export interface NumberFormatInputValues {
  formattedValue: string
  value: string
  floatValue: number
}

export interface NumberFormatInputProps extends InputProps {
  onValueChange: (values: NumberFormatInputValues) => void
  decimalScale?: number
}

export const NumberFormatInput: FC<NumberFormatInputProps> = (props) => {
  const { field: css } = useMultiStyleConfig("Input", props)

  return (
    // @ts-ignore
    <ChakraWrapper
      allowLeadingZeros={false}
      thousandSeparator
      decimalScale={props.decimalScale}
      __css={css}
      {...props}
      disabled={props.isDisabled}
    />
  )
}
