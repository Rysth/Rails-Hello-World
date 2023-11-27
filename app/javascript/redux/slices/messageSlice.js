const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

// GET message#index
export const fetchRandomMessage = createAsyncThunk(async () => {
  try {
    const response = await fetch('http://127.0.0.1:4000/api/v1/messages');

    if (response.status !== 200) {
      throw new Error('Error fetching the message');
    }

    const { message } = await response.json();
    return message;
  } catch (error) {
    throw new Error(`Error fetching the message: ${error.message}`);
  }
});

const initialState = {
  message: {},
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {},
});

export const messageActions = messageSlice.actions;

export default messageSlice.reducer;
