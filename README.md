# React JS Starter kit

## Dependencies and Component

- react v16
- redux and redux-observable
- webpack 4 and webpack-dev-server
- jest junit and enzyme
- storybook
- support css and scss
- support hot module replacement
- support build configuration (entrypoint.sh)
- support manifest.json
- includes eslint, Dockerfile and docker-compose
- **only client side rendering**

## Set up

1. Clone this project

```
$ git clone git@bitbucket.org:dotography-code/dashboard-starterkit.git
```

2. Goto project directory

```
$ cd chart-starter-kit
```

3. Install project's dependencies

```
$ npm install
or
$ yarn install
```


## Start development in web browser

```
$ npm start
```

Then, go to [http://localhost:3010](http://localhost:3010)


## Run storybook

```
$ npm run storybook
```

Then, go to [http://localhost:6010](http://localhost:6010)

*note: you can add more story in directory **stories***

## Run Test

```
$ npm run test
or
$ npm run test:watch
```


## Deploy with docker

These are environment of this docker images for using in run time. (more information plase read Dockerfile or check example in docker-compose.yml)

| environment  | description                                      | default value                 |
|--------------|--------------------------------------------------|-------------------------------|
| METRICS_HOST | endpoint of API                                  | http://api.dev.dotography.net |
| PRD_VERS     | production versions (alpha, qa, pre, production) | alpha                         |

***note: you must build public file before deploy to docker by running***

```
$ npm run deploy
```

## Run docker example

1.Build docker image

```
$ docker build -t image-name .
```

2.Run docker container

```
$ docker run --name container-name -p 4000:4000 -e METRICS_HOST="SOME_HOST" -d image-name
```

3.If you want to stop docker container

```
$ docker stop container-name && docker rm -f container-name
```

Or, you can use docker-compose for run docker-compose.yml

1.build
```
$ docker-compose build
```

2.start

```
$ docker-compose up -d
```

3.stop

```
$ docker-compose down
```

## Maintainer

sutee.s@scale360solutions.com