// Return current year
export const getFullYear = () => {
    return new Date().getFullYear();
  };

  // Return footer text depending on isIndex flag
  export const getFooterCopy = (isIndex) => {
    if (isIndex === true) {
      return "Holberton School";
    } else {
      return "Holberton School main dashboard";
    }
  };
