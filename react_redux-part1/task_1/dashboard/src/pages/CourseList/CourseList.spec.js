import React from "react";
import { render, screen, within } from "@testing-library/react";
import CourseList from "./CourseList";

describe("CourseList", () => {
  it("renders 1 row in tbody when given an empty array", () => {
    render(<CourseList courses={[]} />);

    const table = screen.getByRole("table");
    const rowgroups = within(table).getAllByRole("rowgroup");
    const tbody = rowgroups[1]; // tbody is second rowgroup
    const rows = within(tbody).getAllByRole("row");

    expect(rows).toHaveLength(1);
    expect(screen.getByText(/no course available yet/i)).toBeInTheDocument();
  });

  it("renders courses when given a non-empty array", () => {
    const courses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];

    render(<CourseList courses={courses} />);

    const table = screen.getByRole("table");
    const rowgroups = within(table).getAllByRole("rowgroup");
    const tbody = rowgroups[1];
    const rows = within(tbody).getAllByRole("row");

    expect(rows).toHaveLength(3);
    courses.forEach((course) => {
      expect(screen.getByText(course.name)).toBeInTheDocument();
      expect(screen.getByText(course.credit.toString())).toBeInTheDocument();
    });
  });
});
