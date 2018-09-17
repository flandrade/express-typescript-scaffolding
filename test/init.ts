import * as dotenvSafe from "dotenv-safe";

dotenvSafe.load({
  path: ".env.test",
  sample: ".env.test.example"
});
