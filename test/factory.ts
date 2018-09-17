import { models } from "../src/models";

const factoryGirl = require("factory-girl");
const factory = factoryGirl.factory;

factory.setAdapter(new factoryGirl.SequelizeAdapter());

factory.define("user", models.user, {
  firstName: factory.sequence(n => `first-name-${n}`),
  lastName: factory.sequence(n => `last-name-${n}`)
});

export default factory;
