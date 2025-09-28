function getFullYear() {
    return new Date().getFullYear();
  }

  function getFooterCopy(isIndex) {
    if (isIndex) {
      return "Holberton School";
    } else {
      return "Holberton School main dashboard";
    }
  }

  module.exports = {
    getFullYear,
    getFooterCopy,
  };
