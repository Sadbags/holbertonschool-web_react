// Returns current year
function getCurrentYear() {
    return new Date().getFullYear();
  }

  // Returns footer text based on isIndex boolean
  function getFooterCopy(isIndex) {
    if (isIndex) {
      return "Holberton School";  // exactly this string
    } else {
      return "Holberton School main dashboard";  // exactly this string
    }
  }

  // Export functions for Node and React
  module.exports = {
    getCurrentYear,
    getFooterCopy
  };
