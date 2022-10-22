import { createSlice } from "@reduxjs/toolkit";

const userNameSlice = createSlice({
  name:'userName',
  initialState: "gotta catch'em all",
  reducers: {
      setUserNameGlobal: (state, action) => action.payload
  },
})

export const {setUserNameGlobal} = userNameSlice.actions
export default userNameSlice.reducer