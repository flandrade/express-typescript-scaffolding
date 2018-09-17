import toListUser from "../../../src/user/presenter/list-users";
import { expect } from "../../expect";

describe("User.Decorator.toListUser", function() {
  context("when there is no user", function() {
    it("returns an empty list", function() {
      const users = toListUser([]);
      expect(users).to.have.lengthOf(0);
    });
  });

  context("when there is a user", function() {
    it("returns the correct list", function() {
      const users = toListUser([{
        firstName: "Jane",
        lastName: "Austen"
      }]);
      expect(users).to.have.lengthOf(1);
      expect(users[0]).to.have.property("name", "Jane Austen");
    });
  });

  context("when there are several users", function() {
    it("returns the correct list", function() {
      const users = toListUser([{
        firstName: "Jane",
        lastName: "Austen"
      }, {
        firstName: "Charles",
        lastName: "Dickens"
      }]);
      expect(users).to.have.lengthOf(2);
      expect(users[0]).to.have.property("name", "Jane Austen");
      expect(users[1]).to.have.property("name", "Charles Dickens");
    });
  });
});
