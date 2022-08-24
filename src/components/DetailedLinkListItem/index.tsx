import React, { FC } from "react"
import {
  BoxProps,
  Image,
  HStack,
  Stack,
  useMultiStyleConfig,
  Flex,
  Button,
  Icon,
  Square,
} from "@chakra-ui/react"
import { FiArrowUpRight } from "react-icons/all"
import { BodyLg, BodySm } from "../Typography"

export interface DetailedLinkListItemProps extends BoxProps {
  imgSrc?: any
  imgFallback?: string
  title: string
  subtitle?: string
  linkText?: string
  href: string
  isExternal?: boolean
  routerComponent?: any
}

export const DetailedLinkListItem: FC<DetailedLinkListItemProps> = ({
  imgSrc,
  imgFallback,
  title,
  subtitle,
  linkText,
  href,
  isExternal = true,
  routerComponent,
  ...restProps
}) => {
  const styles = useMultiStyleConfig("DetailedLinkListItem", restProps)

  if (!isExternal && !routerComponent) {
    throw new Error(
      "Internal Link components must include a router component such as Link from 'react-router-dom'"
    )
  }

  return (
    <HStack sx={styles.container}>
      <Flex>
        {imgSrc ? (
          <Image sx={styles.image} src={imgSrc} />
        ) : imgFallback ? (
          <Square sx={styles.imageFallback} size={styles.imageFallback.size}>
            {imgFallback.slice(0, 3).toUpperCase()}
          </Square>
        ) : null}
        <Stack spacing={0}>
          <BodyLg>{title}</BodyLg>
          <BodySm>{subtitle}</BodySm>
        </Stack>
      </Flex>
      <Button
        sx={styles.link}
        variant="link"
        as={isExternal ? "a" : routerComponent}
        target={isExternal ? "_blank" : undefined}
        href={href}
        to={href}
        rightIcon={isExternal ? <Icon as={FiArrowUpRight} /> : undefined}
      >
        {linkText || "Read More"}
      </Button>
    </HStack>
  )
}
