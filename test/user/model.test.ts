import { models } from "../../src/models";
import { expect } from "../expect";

describe("User.Model", function() {
  describe("#firstName", function() {
    context("when is not present", function() {
      it("returns the correct error", function() {
        return expect(
          models.user.build({
            firstName: ""
          }).validate()
        ).to.be.rejectedWith("First name cannot be empty");
      });
    });

    context("when is present", function() {
      it("returns the correct value", function() {
        return expect(
          models.user.build({
            firstName: "Jane"
          }).validate()
        ).to.not.be.rejectedWith("First name cannot be empty");
      });
    });
  });

  describe("#lastName", function() {
    context("when is not present", function() {
      it("returns the correct error", function() {
        return expect(
          models.user.build({
            lastName: ""
          }).validate()
        ).to.be.rejectedWith("Last name cannot be empty");
      });
    });

    context("when is present", function() {
      it("returns the correct value", function() {
        return expect(
          models.user.build({
            lastName: "Austen"
          }).validate()
        ).to.not.be.rejectedWith("Last name cannot be empty");
      });
    });
  });
});
