import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("<Notifications /> rendering behavior", () => {
  it("does not re-render when the listNotifications length is the same", () => {
    const initialList = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
    ];

    const wrapper = shallow(<Notifications listNotifications={initialList} />);

    const shouldUpdate = wrapper.instance().shouldComponentUpdate({
      listNotifications: [
        { id: 3, type: "urgent", value: "Different content but same length" },
        { id: 4, type: "default", value: "Another one" },
      ],
    });

    expect(shouldUpdate).toBe(false);
  });

  it("re-renders when the listNotifications length changes", () => {
    const initialList = [
      { id: 1, type: "default", value: "New course available" },
    ];

    const wrapper = shallow(<Notifications listNotifications={initialList} />);

    const shouldUpdate = wrapper.instance().shouldComponentUpdate({
      listNotifications: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "Another notification" },
      ],
    });

    expect(shouldUpdate).toBe(true);
  });
});
