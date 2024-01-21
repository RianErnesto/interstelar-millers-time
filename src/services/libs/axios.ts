import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://localhost:3001/v1/example',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default instance
