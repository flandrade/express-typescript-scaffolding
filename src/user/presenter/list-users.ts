import { UserAttrs } from "../model";

export interface ListUserPresenter {
  name: string;
}

export default function toListUsers(
  users: UserAttrs[]
): ListUserPresenter[] {
  return users.map(user => {
    const { firstName, lastName }: UserAttrs = user;
    return {
      name: `${firstName} ${lastName}`
    };
  });
}
