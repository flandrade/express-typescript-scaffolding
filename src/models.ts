import * as path from "path";
import * as Sequelize from "sequelize";

import config, { Config } from "../config/database";
import { UserModel } from "./user/model";

const walkSync = require("walk-sync");

export interface Models {
  user: UserModel;
}

const MODEL_PATHS: string[] = walkSync(__dirname, {
  globs: ["**/*/model.js"]
});

const POOL: Sequelize.PoolOptions = {
  max: 2,
  min: 0,
  idle: 20000,
  acquire: 30000
};

function createSequelize(
  settings: Config,
  pool: Sequelize.PoolOptions
): Sequelize.Sequelize {
  const database: string = process.env[config.use_env_variable];
  const configuration = {
    pool,
    ...settings
  };
  return new Sequelize(database, configuration);
}

function loadModels(
  sequelize: Sequelize.Sequelize,
  paths: string[] = MODEL_PATHS
): Models {
  return paths
    .map((file: string) => {
      return sequelize.import(path.join(__dirname, file));
    })
    .reduce<Models>((models: Models, model: any) => ({
      ...models,
      [model.name]: model
    }), {} as Models);
}

const sequelize: Sequelize.Sequelize = createSequelize(config, POOL);

export const models = loadModels(sequelize);
