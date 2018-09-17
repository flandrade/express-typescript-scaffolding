import { expect } from "../expect";

import { parseNumber } from "../../src/normalizers/parsers";

describe("Normalizers.Parsers", function() {
  describe("parseNumber", function() {
    context("when the value is null", function() {
      it("returns 0", function() {
        expect(parseNumber(null)).to.be.eq(0);
      });

      context("when the value is undefined", function() {
        it("returns 0", function() {
          expect(parseNumber(undefined)).to.be.eq(0);
        });
      });
    });

    context("when the value is a string", function() {
      context("and is invalid", function() {
        it("returns 0", function() {
          expect(parseNumber("inva6lid")).to.be.eq(0);
        });
      });

      context("and is valid", function() {
        it("returns the correct value", function() {
          expect(parseNumber("100")).to.be.eq(100);
        });
      });
    });
  });
});
