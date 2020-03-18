# Integral UI
## About

## Get Started

1. ``yarn``
2. ``yarn run build``

## Run a component dev server

``lerna run start --scope @integral-ui/int-<component-name>``

## Create a component

1. ``cd packages``
1. ``npm init stencil component int-<component-name>``
1. ``cd packages/<component-name>``
1. ``npx stencil generate``
1. Name your component after your project, eg: `<component-name>`
1. run `yarn run bootstrap`
1. run `yarn run build`
1. run `lerna run start --scope @integral-ui/int-<component-name>`


## If your component has a dependency on another component

1. Add the dependency to your component's package.json `dependency` list
