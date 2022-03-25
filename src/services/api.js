import axios from 'axios'

let api = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com/users' })

export default api