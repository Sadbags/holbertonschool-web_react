import React from "react";
import CourseListRow from "./CourseListRow";

const CourseList = ({ listCourses = [] }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <CourseListRow isHeader={true} textFirstCell="Available courses" textSecondCell={null} />
          <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
        </thead>
        <tbody>
          {listCourses.length === 0 ? (
            <CourseListRow textFirstCell="No course available yet" textSecondCell="" />
          ) : (
            listCourses.map(({ id, name, credit }) => (
              <CourseListRow key={id} textFirstCell={name} textSecondCell={credit} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CourseList;
