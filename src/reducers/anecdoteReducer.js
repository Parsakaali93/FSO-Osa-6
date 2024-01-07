import { act } from "react-dom/test-utils"
import { __DO_NOT_USE__ActionTypes, createSlice } from '@reduxjs/toolkit'
import anecdotesService from '../services/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

// const initialState = anecdotesAtStart.map(asObject)

const anecdoteSlice = createSlice({
    name: 'anecdotes',
    initialState: [],
    reducers:{
        addVote(state, action){
          const correspondingAnecdote = state.find(anecdote => anecdote.id === action.payload.id)
          const voteAddedAnecdote = {...correspondingAnecdote, votes: correspondingAnecdote.votes + 1}
          
          return state.map(anecdote =>
            anecdote.id !== action.payload.id ? anecdote : voteAddedAnecdote
          ).sort((a, b) => a.votes < b.votes)
        },

        addAnecdote(state, action){
          return state.concat(action.payload)
        },

        setAnecdotes(state,action){
          return action.payload
        }
    }
})

/*const anecdoteReducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type)
  {
    case 'VOTE':
      const correspondingAnecdote = state.find(anecdote => anecdote.id === action.payload.id)
      const voteAddedAnecdote = {...correspondingAnecdote, votes: correspondingAnecdote.votes + 1}

      return state.map(anecdote =>
        anecdote.id !== action.payload.id ? anecdote : voteAddedAnecdote
      ).sort((a, b) => a.votes < b.votes)

    case 'NEW_ANECDOTE':
      return state.concat(action.payload)

    default:
      return state
  }

  return state
}

export const addVote = (id) => {
  return{
    type: 'VOTE',
    payload: { id }
  }
}

export const addAnecdote = (content) => {
  return{
    type: 'NEW_ANECDOTE',
    payload: content 
  }
}*/

/* Redux Thunkin ansiosta on mahdollista määritellä action creatoreja, jotka palauttavat objektin sijaan funktion.
 Tämän funktion parametreina ovat Redux-storen dispatch- ja getState-metodi. Tämän ansiosta on mahdollista
  toteuttaa asynkronisia action creatoreja, jotka ensin odottavat jonkin asynkronisen toimenpiteen valmistumista
   ja vasta sen jälkeen dispatchaavat varsinaisen actionin. */
export const initializeAnecdotes = () => {
  return async dispatch => {
    try{
      // Get all anecdotes from the server
     const result = await anecdotesService.getAll()
     // Update local state to show anecdotes 
     dispatch(setAnecdotes(result))
    }
    catch(error){
      console.error(error)
    }
 }
}

export const createAnecdote = anecdote => {
  return async dispatch => {
    // Servulle uus anekdootti
     const result = await anecdotesService.createNew(anecdote)

     // Palautettu anekdootti lokaaliin tilaan
     dispatch(addAnecdote(result))
     // VASTAA: dispatch({ type: 'anecdotes/addAnecdote', payload: result })
 }
}

export const voteAnecdote = (anecdote, id) => {
  return async dispatch => {
     const result = await anecdotesService.updateOne({...anecdote, votes: anecdote.votes + 1}, id)
     dispatch(addVote(result))
 }
}

export const { addVote, addAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer