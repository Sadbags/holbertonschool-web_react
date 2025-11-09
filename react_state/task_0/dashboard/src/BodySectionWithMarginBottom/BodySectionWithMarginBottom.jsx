import React from "react";
import PropTypes from "prop-types";
import BodySection from "../BodySection/BodySection";

const BodySectionWithMarginBottom = ({ title, children }) => {
  return (
    <div className="bodySectionWithMargin">
      <BodySection title={title}>{children}</BodySection>
    </div>
  );
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default BodySectionWithMarginBottom;
