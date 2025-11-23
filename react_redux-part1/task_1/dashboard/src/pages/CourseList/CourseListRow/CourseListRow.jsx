import React from "react";

function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) { // defaultProps reemplazado
  if (isHeader) {
    return textSecondCell ? (
      <tr>
        <th>{textFirstCell}</th>
        <th>{textSecondCell}</th>
      </tr>
    ) : (
      <tr>
        <th colSpan="2">{textFirstCell}</th>
      </tr>
    );
  } else {
    return (
      <tr>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }
}

export default CourseListRow;
