
import { useDispatch, useSelector } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
    const dispatch = useDispatch()

    const anecdotes = useSelector(state => {
        return state.anecdotes.filter(anecdote => anecdote.content.includes(state.filter))
    })

    console.log("anecdotes", anecdotes)

return(
    // In JS, an empty array is truthy, so we can't just say anecdotes ? ... : ...
    anecdotes.length > 0 ? 
    anecdotes.map(anecdote =>
    <div key={anecdote.id} style={{marginTop: 10, marginBottom: 10}}>
      <div>
        <b>{anecdote.content}</b>
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={() => dispatch(addVote(anecdote.id))}>vote</button>
      </div>
    </div>) : <p>No anecdotes matching your filter 😢</p>
  
)

}

export default AnecdoteList