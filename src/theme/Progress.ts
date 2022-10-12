import { progressAnatomy as parts } from "@chakra-ui/anatomy"
import {
  getColor,
  mode,
  PartsStyleFunction,
  SystemStyleFunction,
} from "@chakra-ui/theme-tools"

// adapted from:  https://codesandbox.io/s/chakra-ui-theme-extension-w5u2n?file=/src/theme/Progress/index.js
const multiSegmentFilledTrack = (props: any) => {
  const { theme, values, max } = props

  const breakpoints = []
  let totalPct = 0
  const trackColor = getColor(theme, mode("gray.100", "gray.300")(props))

  // @ts-ignore
  values.forEach(({ color: fillColor, value }) => {
    // @ts-ignore
    const pct = +Number.parseFloat((value / max) * 100).toFixed(1)

    breakpoints.push(`${fillColor} ${totalPct}%`)

    totalPct += pct
    if (totalPct > max) {
      totalPct = max
    }

    breakpoints.push(`${fillColor} ${totalPct}%`)
  })

  if (totalPct < max) {
    breakpoints.push(`${trackColor} ${totalPct}%`)
    breakpoints.push(`${trackColor} 100%`)
  }

  const gradient = `
    linear-gradient(
    to right,
    ${breakpoints.join(", ")}
  )`

  // Need to override the width specified by style
  return {
    minWidth: "100%",
    bgImage: gradient,
    borderRadius: "full",
  }
}

const baseStyleFilledTrack: SystemStyleFunction = (props) => {
  const { colorScheme, theme, isIndeterminate } = props

  const darkModeColorValue = colorScheme === "brand" ? "550" : "200"
  const bgColor = mode(
    `${colorScheme}.500`,
    `${colorScheme}.${darkModeColorValue}`
  )(props)

  const gradient = `linear-gradient(
    to right,
    transparent 0%,
    ${getColor(theme, bgColor)} 50%,
    transparent 100%
  )`

  return {
    ...(isIndeterminate ? { bgImage: gradient } : { bgColor }),
  }
}

const baseStyleTrack: SystemStyleFunction = (props) => {
  return {
    bg: mode("gray.100", "gray.300")(props),
  }
}

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  track: baseStyleTrack(props),
  filledTrack: baseStyleFilledTrack(props),
})

export const Progress = {
  defaultProps: {
    colorScheme: "whiteAlpha",
  },
  baseStyle,
  variants: {
    multiSegment: (props: any) => ({
      track: {
        borderRadius: "full",
      },
      filledTrack: multiSegmentFilledTrack(props),
    }),
  },
}
