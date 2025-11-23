export const APP_ACTIONS = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
    SHOW_DRAWER: "SHOW_DRAWER",
    HIDE_DRAWER: "HIDE_DRAWER",
    SET_NOTIFICATIONS: "SET_NOTIFICATIONS",
    MARK_NOTIFICATION_READ: "MARK_NOTIFICATION_READ",
    SET_COURSES: "SET_COURSES",
  };

  export const initialState = {
    user: { email: "", isLoggedIn: false },
    displayDrawer: false,
    notifications: [],
    courses: [],
  };

  export function appReducer(state, action) {
    switch (action.type) {
      case APP_ACTIONS.LOGIN:
        return { ...state, user: { email: action.payload.email, isLoggedIn: true } };
      case APP_ACTIONS.LOGOUT:
        return { ...state, user: { email: "", isLoggedIn: false } };
      case APP_ACTIONS.SHOW_DRAWER:
        return { ...state, displayDrawer: true };
      case APP_ACTIONS.HIDE_DRAWER:
        return { ...state, displayDrawer: false };
      case APP_ACTIONS.SET_NOTIFICATIONS:
        return { ...state, notifications: action.payload };
      case APP_ACTIONS.MARK_NOTIFICATION_READ:
        return {
          ...state,
          notifications: state.notifications.filter(n => n.id !== action.payload),
        };
      case APP_ACTIONS.SET_COURSES:
        return { ...state, courses: action.payload };
      default:
        return state;
    }
  }
