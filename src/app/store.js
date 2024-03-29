import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/counter/authSlice';
import appReducer from '../features/counter/appSlice';
import addContactReducer from '../features/counter/addContactSlice';
import errorReducer from '../features/counter/errorSlice';
import adminReducer from '../features/counter/adminSlice';





export const store = configureStore({
  reducer: {
    auth: authReducer,
    app: appReducer,
    addContact: addContactReducer,
    error: errorReducer,
    admin: adminReducer,

    
  },
});
