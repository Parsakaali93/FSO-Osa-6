import { configureStore } from '@reduxjs/toolkit'

import anecdoteReducer, {setAnecdotes, initializeAnecdotes} from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'

export const store = configureStore({
    reducer: {
        anecdotes: anecdoteReducer,
        filter: filterReducer,
        notification: notificationReducer
    }
})