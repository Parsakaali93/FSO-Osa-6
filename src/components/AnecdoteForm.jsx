
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNotificiation } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const getId = () => (100000 * Math.random()).toFixed(0)
  
    const newAnecdote = (event) => {
      event.preventDefault()
  
      const anecdoteObject = {
        content: event.target.anecdote.value,
        votes: 0,
        id: getId()
      }
  
      const content = event.target.anecdote.value
      event.target.anecdote.value = ''
      dispatch(addAnecdote(anecdoteObject))
      dispatch(setNotificiation(`Added anecdote "${content}"`))
    }

    return(
        <form onSubmit={newAnecdote}>
        <div><input name="anecdote"/></div>
        <button type="submit">create</button>
        </form>
    )
}

export default AnecdoteForm