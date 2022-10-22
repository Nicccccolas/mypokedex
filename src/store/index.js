import { configureStore } from "@reduxjs/toolkit";
import userName from './slices/userName.slice'

//Store. Usamos configureStore. 
export default configureStore({
  reducer:{
    userName
  },
})