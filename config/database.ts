export interface Config {
  logging: boolean,
  use_env_variable: string;
}

const env = process.env.APP_ENV || "development";
const config: Config = {
  ...require("../config/database.json")[env],
};

export default config;
