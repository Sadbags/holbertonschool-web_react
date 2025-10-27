import React from "react";
import PropTypes from "prop-types";

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const style = isHeader
    ? {
        backgroundColor: "var(--color-table-header)",
        opacity: 0.66,
      }
    : {
        backgroundColor: "var(--color-table-rows)",
        opacity: 0.45,
      };

  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr style={style}>
          <th colSpan={2} className="border border-gray-400 pl-2 text-left">
            {textFirstCell}
          </th>
        </tr>
      );
    } else {
      return (
        <tr style={style}>
          <th className="border border-gray-400 pl-2 text-left">{textFirstCell}</th>
          <th className="border border-gray-400 pl-2 text-left">{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr style={style}>
        <td className="border border-gray-400 pl-2">{textFirstCell}</td>
        <td className="border border-gray-400 pl-2">{textSecondCell}</td>
      </tr>
    );
  }
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
