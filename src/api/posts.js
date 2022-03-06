import apiUrl from '../apiConfig'
import axios from 'axios'

export const indexPosts = () => {
  return axios.get(apiUrl + '/community/')
}

export const writePost = (user, title, text) => {
  console.log('the token is', user.token)
  return axios.post(apiUrl + '/community/',
    {
      post: { title, text }
    },
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
}
