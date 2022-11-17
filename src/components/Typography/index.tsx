import { FC } from "react"
import { Heading, Text, TextProps, useColorModeValue } from "@chakra-ui/react"

export const H1: FC<TextProps> = (props) => {
  return (
    <Heading
      as="h1"
      fontWeight="700"
      fontSize={{ base: "48px", md: "60px" }}
      lineHeight={{ base: "52px", md: "64px" }}
      color={useColorModeValue("gray.700", "gray.300")}
      {...props}
    />
  )
}

export const H2: FC<TextProps> = (props) => {
  return (
    <Heading
      as="h2"
      fontWeight="600"
      fontSize={{ base: "40px", md: "48px" }}
      lineHeight={{ base: "46px", md: "52px" }}
      color={useColorModeValue("gray.700", "gray.300")}
      {...props}
    />
  )
}

export const H3: FC<TextProps> = (props) => {
  return (
    <Heading
      as="h3"
      fontWeight="600"
      fontSize={{ base: "32px", md: "36px" }}
      lineHeight={{ base: "38px", md: "40px" }}
      color={useColorModeValue("gray.700", "gray.300")}
      {...props}
    />
  )
}

export const H4: FC<TextProps> = (props) => {
  return (
    <Heading
      as="h4"
      fontWeight="500"
      fontSize={{ base: "28px", md: "30px" }}
      lineHeight={{ base: "34px", md: "38px" }}
      color={useColorModeValue("gray.700", "gray.300")}
      {...props}
    />
  )
}

export const H5: FC<TextProps> = (props) => {
  return (
    <Heading
      as="h5"
      fontWeight="500"
      fontSize="24px"
      lineHeight="32px"
      color={useColorModeValue("gray.700", "gray.300")}
      {...props}
    />
  )
}

export const H6: FC<TextProps> = (props) => {
  return (
    <Heading
      as="h6"
      fontWeight="500"
      fontSize="18px"
      lineHeight="28px"
      color={useColorModeValue("gray.700", "gray.300")}
      {...props}
    />
  )
}

export const BodyLg: FC<TextProps> = (props) => {
  return (
    <Text
      as="p"
      fontWeight="400"
      fontSize="18px"
      lineHeight="28px"
      color={useColorModeValue("gray.700", "gray.300")}
      {...props}
    />
  )
}

export const BodyMd: FC<TextProps> = (props) => {
  return (
    <Text
      as="p"
      fontWeight="400"
      fontSize="16px"
      lineHeight="24px"
      color={useColorModeValue("gray.700", "gray.300")}
      {...props}
    />
  )
}

export const BodySm: FC<TextProps> = (props) => {
  return (
    <Text
      as="p"
      fontWeight="400"
      fontSize="14px"
      lineHeight="20px"
      color={useColorModeValue("gray.700", "gray.300")}
      {...props}
    />
  )
}

export const BodyXs: FC<TextProps> = (props) => {
  return (
    <Text
      as="p"
      fontWeight="400"
      fontSize="12px"
      lineHeight="16px"
      color={useColorModeValue("gray.700", "gray.300")}
      {...props}
    />
  )
}

export const LabelLg: FC<TextProps> = (props) => {
  return (
    <Text
      fontWeight="600"
      fontSize="20px"
      lineHeight="28px"
      letterSpacing="0.1em"
      textTransform="uppercase"
      color={useColorModeValue("gray.700", "gray.300")}
      {...props}
    />
  )
}

export const LabelMd: FC<TextProps> = (props) => {
  return (
    <Text
      fontWeight="600"
      fontSize="16px"
      lineHeight="24px"
      letterSpacing="0.075em"
      textTransform="uppercase"
      color={useColorModeValue("gray.700", "gray.300")}
      {...props}
    />
  )
}

export const LabelSm: FC<TextProps> = (props) => {
  return (
    <Text
      fontWeight="600"
      fontSize="14px"
      lineHeight="16px"
      letterSpacing="0.075em"
      textTransform="uppercase"
      color={useColorModeValue("gray.700", "gray.300")}
      {...props}
    />
  )
}

export const LabelXs: FC<TextProps> = (props) => {
  return (
    <Text
      fontWeight="500"
      fontSize="10px"
      lineHeight="12px"
      letterSpacing="0.075em"
      textTransform="uppercase"
      color={useColorModeValue("gray.700", "gray.300")}
      {...props}
    />
  )
}
