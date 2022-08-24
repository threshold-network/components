import { Meta, Story } from "@storybook/react"
import {
  DetailedLinkListItem as DetailedLinkListItemComponent,
  DetailedLinkListItemProps,
} from "./index"
import { List } from "@chakra-ui/react"
import createIdenticon from "ethereum-blockies-base64"
import { Link as RouterLink } from "react-router-dom"
import BisonTrailsLogo from "../../static/images/BisonTrailsLogo.png"

const Template: Story<DetailedLinkListItemProps> = (args) => {
  return (
    <List spacing={4}>
      <DetailedLinkListItemComponent
        {...args}
        routerComponent={args.isExternal ? undefined : RouterLink}
        href="some_route"
      />
    </List>
  )
}

export const DetailedLinkListItem = Template.bind({})

export default {
  title: "DetailedLinkListItem",
  component: DetailedLinkListItem,
  argTypes: {
    imgSrc: {
      control: {
        type: "select",
        options: {
          Undefined: undefined,
          BisonTrails: BisonTrailsLogo,
          EthereumAddress: createIdenticon("0xABCD"),
        },
      },
    },
    imgFallback: {
      control: {
        type: "text",
      },
      defaultValue: "LFV",
    },
    title: {
      control: {
        type: "text",
      },
      defaultValue: "Bison Trails",
    },
    subtitle: {
      control: {
        type: "text",
      },
      defaultValue: "viktor@bisontrails.com",
    },
    linkText: {
      control: {
        type: "text",
      },
    },
    isExternal: {
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
  },
} as Meta
