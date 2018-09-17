import toListParams from "../../../src/user/decorator/list-users";
import { expect } from "../../expect";

describe("User.Decorator.toListParams", function() {
  describe("#limit", function() {
    context("when the value is not present", function() {
      it("returns 0", function() {
        expect(toListParams({
          limit: null
        })).to.have.property("limit", 0);
      });
    });

    context("when the value is present", function() {
      context("and is invalid", function() {
        it("returns 0", function() {
          expect(toListParams({
            limit: "invalid6"
          })).to.have.property("limit", 0);
        });
      });

      context("and is valid", function() {
        it("returns the correct value", function() {
          expect(toListParams({
            limit: "100"
          })).to.have.property("limit", 100);
        });
      });
    });
  });
});
