
import { useDispatch } from 'react-redux'
import { addAnecdote, createAnecdote } from '../reducers/anecdoteReducer'
import { setNotificiation, showNotification } from '../reducers/notificationReducer'
import anecdotesService from '../services/anecdotes'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const getId = () => (100000 * Math.random()).toFixed(0)
  
    const newAnecdote = async (event) => {
      event.preventDefault()
  
      const anecdoteObject = {
        content: event.target.anecdote.value,
        votes: 0,
        id: getId()
      }

      dispatch(showNotification(`Added anecdote "${anecdoteObject.content}"`, 5))

      event.target.anecdote.value = ''

      const added = dispatch(createAnecdote(anecdoteObject))

    }

    return(
        <form onSubmit={newAnecdote}>
        <div><input name="anecdote"/></div>
        <button type="submit">create</button>
        </form>
    )
}

export default AnecdoteForm