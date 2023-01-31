# PLANTS

A repository to keep track of different kinds of plants and their care requirements

## Installation

1. Clone the repository and install Docker, Node 18.x, and Yarn

2. Run `yarn install` to install javascript dependencies

3. Run `yarn dev` to start the development server

## Production

1. Run `make pull` to pull the latest production image from the container registry, or `make build` to build the production docker image from scratch

2. Run `make run` to run the production version of the application

Run `make clean` to terminate rogue containers when stopping the application, and `make push` to push a local image to the registry (this is preferred to be handled by the automatic actions)
