import axios from 'axios'

const apiClient = axios.create({
  baseURL: ` http://my-json-server.typicode.com/Code-Pop/real-world-nuxt/`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getLineups() {
    return apiClient.get('/lineups')
  },
  getLineup(id) {
    return apiClient.get('/lineups/' + id)
  },
}
