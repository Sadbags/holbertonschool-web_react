import PropTypes from "prop-types";
import "./CourseList.css";
import CourseListRow from "./CourseListRow.jsx";

function CourseList({ courses = [] }) {
  return (
    <table id="CourseList" className="CourseList">
      <thead>
        <tr>
          <CourseListRow isHeader={true} textFirstCell="Available courses" />
        </tr>
        <tr>
          <CourseListRow
            isHeader={true}
            textFirstCell="Course name"
            textSecondCell="Credit"
          />
        </tr>
      </thead>
      <tbody>
        {courses.length === 0 ? (
          <tr>
            <td colSpan={2}>No course available yet</td>
          </tr>
        ) : (
          courses.map((course) => (
            <CourseListRow
              key={course.id}
              isHeader={false}
              textFirstCell={course.name}
              textSecondCell={course.credit}
            />
          ))
        )}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      credit: PropTypes.number.isRequired,
    })
  ),
};

export default CourseList;
