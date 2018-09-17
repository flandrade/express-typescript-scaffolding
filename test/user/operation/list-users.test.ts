import { models } from "../../../src/models";

import getUserList from "../../../src/user/operation/list-users";
import { expect } from "../../expect";
import factory from "../../factory";

describe("User.Operation.ListUsers", function() {
  beforeEach(function() {
    return models.user.truncate({ cascade: true });
  });

  context("when the limit is bigger than the number of users", function() {
    context("and there is no user", function() {
      it("returns an empty list", function() {
        return expect(
          getUserList({ limit: 100 })
        ).to.eventually.have.lengthOf(0);
      });
    });

    context("and there are users", function() {
      it("returns the correct list", function() {
        return expect(
          factory.createMany("user", 2)
            .then(() => getUserList({ limit: 100 }))
        ).to.eventually.have.lengthOf(2);
      });
    });
  });

  context("when the limit is bigger than the number of users", function() {
    context("and there is no user", function() {
      it("returns an empty list", function() {
        return expect(
          getUserList({ limit: 0 })
        ).to.eventually.have.lengthOf(0);
      });
    });

    context("and there are users", function() {
      it("returns the correct list", function() {
        return expect(
          factory.createMany("user", 5)
            .then(() => getUserList({ limit: 2 }))
        ).to.eventually.have.lengthOf(2);
      });
    });
  });
});
