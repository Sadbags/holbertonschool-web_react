import React from "react";
import CourseListRow from "./CourseListRow";
import PropTypes from "prop-types";

function CourseList({ listCourses }) {
  return (
    <div className="w-[80%] max-w-5xl mx-auto my-8">
      <table className="w-full border-collapse">
        <thead>
          <CourseListRow isHeader={true} textFirstCell="Available courses" />
          <CourseListRow
            isHeader={true}
            textFirstCell="Course name"
            textSecondCell="Credit"
          />
        </thead>
        <tbody>
          {listCourses.length === 0 ? (
            <CourseListRow textFirstCell="No course available yet" />
          ) : (
            listCourses.map((course) => (
              <CourseListRow
                key={course.id}
                textFirstCell={course.name}
                textSecondCell={course.credit.toString()}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      credit: PropTypes.number,
    })
  ),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
