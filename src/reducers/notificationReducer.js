import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
  name: 'notification',
  initialState: 'Initial Notification',
     reducers:{
      setNotificiation(state, action){
        return action.payload
      },

      clearNotification(state, action){
        return ''
      }
    }
})

  export const { setNotificiation, clearNotification } = notificationSlice.actions
  export default notificationSlice.reducer