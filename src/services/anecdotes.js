import axios from 'axios'

const baseUrl = 'http://localhost:3000/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => { 
    const response = await axios.post(baseUrl, content)
    return response.data
}

const updateOne = async (content, id) => { 
  const response = await axios.put(`${baseUrl}/${id}`, content)
  return response.data
}

export default { getAll, createNew, updateOne }