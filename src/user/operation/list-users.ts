import * as Promise from "bluebird";

import { models } from "../../models";
import { ListUserParams, User } from "../model";

export default function getUserList(
  { limit }: ListUserParams
): Promise<User[]> {
  return models.user.findAll({
    limit
  });
}
