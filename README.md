# Threshold Network React Components

This repo contains reusable React components for Threshold Network.

## Setup

Install packages

`yarn`

Run storybook

`yarn run storybook`

## Use package locally in different project

`yarn build` - this should build the code inside a `lib` directory

To use the package locally without uploading it to npm registry you can:

`npm pack` - which will create a tar file of the package in the root directory

Then you go to the local project in which you want to use the package and add this line to `package.json`:

`
"@threshold-network/components": "file:./<path_to_this_project>/<name_of_the_file>.tgz",
`

After that you just run:

`yarn`

in the second project and that's it! You can now use the threshold network components by simply importing them. For example:

`import { H1 } from "@threshold-network/components"`