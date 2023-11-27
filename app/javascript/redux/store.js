const { configureStore } = require('@reduxjs/toolkit');
import messageReducer from './slices/messageSlice';

export default store = configureStore({
  reducer: { message: messageReducer },
});
