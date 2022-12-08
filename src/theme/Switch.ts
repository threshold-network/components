const baseStyle = (props: any) => {
  const { colorScheme: c } = props
  return {
    track: {
      _checked: {
        _dark: {
          bg: `${c}.500`,
        },
      },
    },
  }
}

export const Switch = {
  baseStyle,
}
