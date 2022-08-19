// Adds support for importing resource files [.png, .svg, .jpeg. jpg]. Without
// that there is an error when trying to import the images
// More info: https://stackoverflow.com/questions/52759220/importing-images-in-typescript-react-cannot-find-module
declare module "*.png"
declare module "*.svg"
declare module "*.jpeg"
declare module "*.jpg"
