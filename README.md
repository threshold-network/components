# Threshold Network React Components

This repo contains reusable React components for Threshold Network.

_For design documentation on these components, refer to the repo on Design
System documentation
[here](https://github.com/threshold-network/design-system-docs)._

_You can also duplicate the Figma file
[here](https://www.figma.com/file/zZi2fYDUjWEMPQJWAt8VWv/Threshold-DS?node-id=3436%3A24296)._

## Setup

---

### Install packages

`yarn`

### Run storybook

`yarn run storybook`

## Use package locally in different project

---

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

#### Note

After executing `yarn pack` yarn caches the package so any changes made will not be saved after re-doing `yarn pack`
until you clean the yarn cache (`yarn cache clean`) or just change the name of the packed file specified in `--filename`
argument.
