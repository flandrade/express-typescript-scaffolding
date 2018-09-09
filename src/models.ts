import * as path from "path";
import * as Sequelize from "sequelize";

import config, { Config } from "../config/database";
import { UserModel } from "./user/model";

const walkSync = require("walk-sync");

export interface Models {
  User: UserModel;
}

const poolSequelize: Sequelize.PoolOptions = {
  max: 2,
  min: 0,
  idle: 20000,
  acquire: 30000
};

function createSequelize(
  config: Config,
  pool: Sequelize.PoolOptions
): Sequelize.Sequelize {
  const configuration: Sequelize.Options = {
    pool,
  };
  return new Sequelize(
    process.env[config.use_env_variable] as any,
    configuration
  );
}

export const sequelize = createSequelize(config, poolSequelize);

function loadModels(sequelize: Sequelize.Sequelize): Models {
  return walkSync(__dirname, { globs: ["**/*/model.js"] })
    .map((filename: string) => {
      return sequelize.import(path.join(__dirname, filename));
    })
    .reduce((models: Models, model: any) => ({
      ...models,
      [model.name]: model
    }), {});
}

export const models = loadModels(sequelize);
