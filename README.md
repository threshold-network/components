# Threshold Network Web3 Design System

This library is used by our team to build products with a consistent user experience.

When we first were deciding how we wanted to structure a design system, we evaluated several options to see what could be used for a web3 product. The web3 space has several components that are unique and important to the UX of the application, e.g. transaction modals and wallet interactions. No design system fully covered these use cases, so we decided to customize our own on top of an open source Chakra library.

If you use this in your product, we ask that you link back to this repo.

This ReadMe document is structured into two parts. The first part outlines how to use the reusable React components. The second outlines design documentation for each component. For the Figma library, you can duplicate the Figma file [here](https://www.figma.com/file/zZi2fYDUjWEMPQJWAt8VWv/Threshold-DS?node-id=3436%3A24296).

# Part 1: React Components

Refer here for instructions on how to use this repo's reusable React components for Threshold Network.

## Setup

### Install packages

`yarn`

### Run storybook

`yarn run storybook`

## Use package locally in different project

### Build the project

`yarn build` - this should build the code inside a `lib` directory

### Create compressed gzip archive of package dependencies

To use the package locally without uploading it to npm registry you can:

`yarn pack --filename <filename>` - which will create a gzip archive (with the name given after `-- namefile`) of the
package in the root directory

### Use the gzip archive in your project

To use the created gzip archive in your project you should go to your project directory and run:

```
yarn add file:<path_to_the_file>.tgz
```

Alternatively you can just add the file to the project's `package.json` by adding this line there:

`"@threshold-network/components": "file:./<path_to_this_project>/<name_of_the_file>.tgz",`

and after that you just run:

`yarn`

### You can now use your local package in your project

You can now use the local version of threshold network components by simply importing them from
`@threshold-network.components`. For
example:

`import { H1 } from "@threshold-network/components"`

#### ✍️ NOTE

After executing `yarn pack` yarn caches the package so any changes made will not be saved after re-doing `yarn pack`
until you clean the yarn cache (`yarn cache clean`) or just change the name of the packed file specified in `--filename`
argument.

# Part 2: Design System Documentation

Below you will find the design system documentation, separated by section. For the Figma library, you can duplicate the Figma file [here](https://www.figma.com/file/zZi2fYDUjWEMPQJWAt8VWv/Threshold-DS?node-id=3436%3A24296).

[ WORK IN PROGRESS ]

## Theming

## Atoms

## Molecules

## Organisms

## Layouts
