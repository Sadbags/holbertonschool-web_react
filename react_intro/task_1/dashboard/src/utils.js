// Returns current year
function getCurrentYear() {
    return new Date().getFullYear();
  }

  // Returns footer text based on isIndex boolean
  function getFooterCopy(isIndex) {
    if (isIndex) {
      return "Holberton School";  // exact string
    } else {
      return "Holberton School main dashboard";  // exact string
    }
  }

  // Export functions for Node test runner and React
  module.exports = {
    getCurrentYear,
    getFooterCopy
  };
