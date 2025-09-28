function getCurrentYear() {
    return new Date().getFullYear();
  }

  function getFooterCopy(isIndex) {
    if (isIndex) {
      return "Holberton School"; // exact string
    } else {
      return "Holberton School main dashboard"; // exact string
    }
  }

  module.exports = {
    getCurrentYear,
    getFooterCopy
  };
