import { useSelector, useDispatch } from 'react-redux'
import { addAnecdote, addVote } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
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
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id} style={{marginTop: 10, marginBottom: 10}}>
          <div>
            <b>{anecdote.content}</b>
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => dispatch(addVote(anecdote.id))}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={newAnecdote}>
        <div><input name="anecdote"/></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default App