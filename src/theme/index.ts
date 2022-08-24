import { extendTheme } from "@chakra-ui/react"
import { Button } from "./Button"
import { Badge } from "./Badge"
import { Alert } from "./Alert"
import { LineDivider } from "./LineDivider"
import { Card } from "./Card"
import { Progress } from "./Progress"
import { CheckListItem } from "./CheckListItem"
import { CheckListGroup } from "./CheckListGroup"
import { IconSpinner } from "./IconSpinner"
import { FilterTab } from "./FilterTab"
import { FilterTabs } from "./FilterTabs"
import { fonts } from "./fonts"
import { BoxLabel } from "./BoxLabel"
import { colors } from "./utils"
import { FlowStep } from "./FlowStep"
import { DetailedLinkListItem } from "./DetailedLinkListItem"

export const defaultTheme = {
  fonts,
  colors,
  components: {
    Alert,
    Button,
    BoxLabel,
    Badge,
    Card,
    CheckListGroup,
    CheckListItem,
    IconSpinner,
    LineDivider,
    Progress,
    FilterTab,
    FilterTabs,
    FlowStep,
    DetailedLinkListItem,
  },
}

const index = extendTheme(defaultTheme)

export default index
