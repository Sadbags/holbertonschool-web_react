import React from "react";
import BodySection from "../BodySection/BodySection";

function BodySectionWithMarginBottom(props) {
  return (
    <div className="mb-8">
      <BodySection {...props} />
    </div>
  );
}

export default BodySectionWithMarginBottom;
