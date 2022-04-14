import { ReactElement } from "react"
import { createIcon } from "@chakra-ui/icons"

export interface IconMap {
  [key: string]: ReactElement
}

export interface ChakraIconMap {
  [key: string]: ReturnType<typeof createIcon>
}

export interface ChecklistGroupProps {
  checklistItems: ChecklistItemProps[]
  title?: string
}

export interface ChecklistItemProps {
  title: string | JSX.Element
  subTitle?: string | JSX.Element
}
