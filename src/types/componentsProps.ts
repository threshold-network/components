import { InputProps, ProgressProps } from "@chakra-ui/react"
import { IconType } from "react-icons"

export interface ChecklistGroupProps {
  checklistItems: ChecklistItemProps[]
  title?: string
}

export interface ChecklistItemProps {
  title: string | JSX.Element
  subTitle?: string | JSX.Element
  icon?: IconType
}

export interface MultiSegmentProgressProps extends ProgressProps {
  values: {
    color: string
    value: number
    tooltip?: string
  }[]
}

export interface NumberInputValues {
  formattedValue: string
  value: string
  floatValue: number
}

export interface NumberInputProps extends InputProps {
  onValueChange: (values: NumberInputValues) => void
}
