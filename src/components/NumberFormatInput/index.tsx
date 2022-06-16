import ReactNumberFormat from "react-number-format"
import { chakra, InputProps, useMultiStyleConfig } from "@chakra-ui/react"
import { FC, forwardRef } from "react"

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

export const NumberFormatInput: FC<NumberFormatInputProps> = forwardRef<
  HTMLInputElement,
  NumberFormatInputProps
>((props, ref) => {
  const { field: css } = useMultiStyleConfig("Input", props)

  const { decimalScale, isDisabled, ...restProps } = props

  return (
    // @ts-ignore
    <ChakraWrapper
      allowLeadingZeros={false}
      thousandSeparator
      decimalScale={props.decimalScale}
      __css={css}
      disabled={isDisabled}
      getInputRef={ref}
      {...restProps}
    />
  )
})
