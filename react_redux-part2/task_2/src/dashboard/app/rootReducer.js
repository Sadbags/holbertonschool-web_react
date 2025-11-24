import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../components/features/auth/authSlice';
import notificationsReducer from '../components/features/notifications/notificationsSlice';
import coursesReducer from '../components/features/courses/coursesSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  notifications: notificationsReducer,
  courses: coursesReducer,
});

export default rootReducer;
