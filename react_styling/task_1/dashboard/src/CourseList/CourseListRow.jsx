import React from "react";

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  if (isHeader) {
    return (
      <tr className="header">
        {textSecondCell === null ? (
          <th colSpan="2">{textFirstCell}</th>
        ) : (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        )}
      </tr>
    );
  }
  return (
    <tr className="row">
      <td>{textFirstCell}</td>
      <td>{textSecondCell}</td>
    </tr>
  );
};

export default CourseListRow;
