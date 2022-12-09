const baseStyle = (props: any) => {
  const { colorScheme: c } = props
  return {
    track: {
      _checked: {
        _dark: {
          bg: c === "brand" ? `${c}.500` : `${c}.200`,
        },
      },
    },
  }
}

export const Switch = {
  baseStyle,
}
