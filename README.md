# An opinionated scaffolding: Express + TypeScript + Sequelize

[![CircleCI](https://circleci.com/gh/flandrade/express-typescript-scaffolding.svg?style=svg)](https://circleci.com/gh/flandrade/express-typescript-scaffolding)

An opinionated scaffolding to build an application with Express, TypeScript and Sequelize.

- **[TypeScript](https://www.typescriptlang.org/)** is a superset of JavaScript
that compiles to plain JavaScript.
- TypeScript development's support with **[TSLint](https://palantir.github.io/tslint/)**
and **[ts-node](https://github.com/TypeStrong/ts-node)**.
- The **[Sequelize](http://docs.sequelizejs.com/)** library provides easy access to
databases by mapping database entries to objects and vice versa.
- **[Mocha](https://mochajs.org/)** and **[Chai](https://www.chaijs.com/)** for unit
testing. In addition, **[factory-girl](https://github.com/aexmachina/factory-girl)**
is the factory library to generate fake data for tests.
- Other libraries:
  - [ramda](https://ramdajs.com/): a functional programming library.
  - [bluebird](http://bluebirdjs.com/docs/getting-started.html): a third party
promise library.
  - [dotenv-safe](https://github.com/rolodato/dotenv-safe): load environment
  variables from .env and ensure they are all presen.t

## Getting started

### Clone the repository

```
git clone git@github.com:flandrade/express-typescript-scaffolding.git
cd express-typescript-scaffolding
```

### Install NVM and select the Node version

Install [nvm](https://github.com/creationix/nvm) to manage several Node versions.
After install, run the following commands in the project directory:

```
nvm install
nvm use
```

### Install your database

This scaffolding uses Postgres. In Linux, you can download the installer from
[Postgres](https://www.postgresql.org/download/). On Mac, you can use
[Postres App](https://postgresapp.com/).


### Setup the application

In order to setup the application, some environment variables are needed. For this,
copy the `.env.example` to `.env` and define the variable

```
$ cp .env.example .env
```

This scaffolding requires the database `scaffolding_development` URI for
developemnt. Here an example:

```
DATABASE_URI=postgresql://<user>:<password>@localhost/scaffolding_development
```

For the testing environment, the database is `scaffolding_test`:

```
DATABASE_URI=postgresql://<user>:<password>@localhost/scaffolding_test
```

### Run the setup script

Run the following script to install the dependencies, create the databases and
run the migrations for both development and testing.

```
./bin/setup.sh
```

### Run the application

Start the application by running:

```
npm start
```

When started, the application will be available at [http://localhost:3000/users](http://localhost:3000/users)

## Tests

To run tests:

```
$ npm test
```

## License
MIT
