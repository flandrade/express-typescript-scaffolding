#!/usr/bin/env bash

# Install packages
npm install

# Development database
createdb scaffolding_development

# Test database
createdb scaffolding_test

# Run migrations for development
npm run sequelize -- db:migrate

# Run migrations for tests
NODE_ENV=test npm run sequelize -- db:migrate
