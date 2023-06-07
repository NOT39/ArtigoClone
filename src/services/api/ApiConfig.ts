import axios from 'axios'

export const Api = () => {
  console.log(import.meta.env.VITE_API_URL)
  return axios.create({ baseURL: import.meta.env.VITE_API_URL })
}
