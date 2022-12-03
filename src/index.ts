import { defaultTheme } from "./theme"
import { Button } from "./components"

export * from "@chakra-ui/react"
export * from "./components"
export * as Type from "./types"
export { defaultTheme } from "./theme"
export * as ThemeUtils from "./theme/utils"
export * from "./hooks"
export * from "./utils"

// Exporting the local components explicitly to override the chakra version
export { Button }
