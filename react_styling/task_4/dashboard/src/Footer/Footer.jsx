import React from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";

function Footer() {
  return (
    <footer className="border-t-4 border-[var(--main-color)] text-center py-4 mt-8 text-gray-600 text-sm sm:text-base">
      <p>
        {getFooterCopy(true)} - {getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
