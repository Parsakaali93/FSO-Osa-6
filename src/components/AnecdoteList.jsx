
import { useDispatch, useSelector } from 'react-redux'
import { addVote, voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotificiation, showNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const dispatch = useDispatch()

    const anecdotes = useSelector(state => {
        return state.anecdotes.filter(anecdote => anecdote.content.includes(state.filter))
    })

const vote = (anecdote) => {
  dispatch(voteAnecdote(anecdote, anecdote.id))
  dispatch(showNotification('Voted!', 3))
}

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
        <button onClick={() => vote(anecdote)}>vote</button>
      </div>
    </div>) : <p>No anecdotes matching your filter 😢</p>
  
)

}

export default AnecdoteList