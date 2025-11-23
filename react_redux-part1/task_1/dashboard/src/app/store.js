import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';


const store = configureStore({
  reducer: rootReducer,
  // Redux Toolkit includes good defaults for middleware
  // including redux-thunk and development checks
});

export default store;
