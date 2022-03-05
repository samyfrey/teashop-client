import apiUrl from '../apiConfig'
import axios from 'axios'

export const indexPosts = () => {
  return axios.get(apiUrl + '/community/')
}
