import { ProgressProps } from "@chakra-ui/react"

export interface ChecklistGroupProps {
  checklistItems: ChecklistItemProps[]
  title?: string
}

export interface ChecklistItemProps {
  title: string | JSX.Element
  subTitle?: string | JSX.Element
}

export interface MultiSegmentProgressProps extends ProgressProps {
  values: {
    color: string
    value: number
    tooltip?: string
  }[]
}
