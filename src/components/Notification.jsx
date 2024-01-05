import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { clearNotification } from '../reducers/notificationReducer';

const Notification = () => {
    const notification = useSelector(state => state.notification)
    const dispatch = useDispatch();

    useEffect(() => {
        let timer;
    
        if (notification) {
          // Set the notification and start a timer to clear it after 5 seconds
          timer = setTimeout(() => {
            dispatch(clearNotification())
          }, 5000);
        }
    
        // Clear the timer if the component unmounts or the notification changes
        return () => clearTimeout(timer);
      }, [notification]);

    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1,
      marginBottom: 30,
      marginTop: 30
    }
    return (
        <div>
            {notification && <div style={style}>{notification}</div>}
        </div>
    )
  }
  
  export default Notification