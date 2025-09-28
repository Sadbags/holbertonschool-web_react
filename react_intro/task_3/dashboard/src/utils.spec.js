// utils-test.js
const { getFullYear, getFooterCopy, getLatestNotification } = require("./utils");

describe("utils_tests", function () {
  describe("getFullYear", function () {
    it("should return current year", function () {
      const year = getFullYear();
      expect(year).toEqual(new Date().getFullYear());
    });
  });

  describe("getFooterCopy", function () {
    it("should return true message", function () {
      expect(getFooterCopy(true)).toEqual("Holberton School");
    });
    it("should return false message", function () {
      expect(getFooterCopy(false)).toEqual("Holberton School main dashboard");
    });
  });

  describe("getLatestNotification", function () {
    it("should return correct string element", function () {
      expect(getLatestNotification()).toEqual(
        "<strong>Urgent requirement</strong> - complete by EOD"
      );
    });
  });
});
