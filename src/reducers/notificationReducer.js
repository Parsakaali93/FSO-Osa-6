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

export const showNotification = (text, time) => {
  return async dispatch => {
     dispatch(setNotificiation(text))
     
     setTimeout(() => {
      dispatch(clearNotification())
    }, time * 1000)
 }
}

  export const { setNotificiation, clearNotification } = notificationSlice.actions
  export default notificationSlice.reducer