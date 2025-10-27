import React from "react";
import { getCurrentYear, getFooterCopy } from "../utils/utils";

function Footer() {
  return (
    <footer
      className="border-t-4"
      style={{ borderColor: "var(--main-color)" }}
    >
      <p className="text-center text-gray-700 text-sm py-4">
        Copyright {getCurrentYear()} - {getFooterCopy(true)}
      </p>
    </footer>
  );
}

export default Footer;
