import React, { useState, useEffect } from 'react'
import { indexPosts } from '../../api/posts'
import WritePost from './WritePost'

const Community = ({ user }) => {
// variables
  const [posts, setPosts] = useState([''])

  // need to make sure user is signed in

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await indexPosts()
        setPosts(res.data.posts)
        // console.log(res)
      } catch (error) {
        console.log('error')
      }
    }
    fetchData()
  }, [])

  const postsList = posts.map(post => (
    <li key={post._id}>
      <p>Title:{post.title}</p>
      <p>Text:{post.text}</p>
    </li>
  ))

  return (
    <>
      <div>{user ? <WritePost user={user} /> : null }</div>
      <div>
        <h1>Messages from the community</h1>
        <ul>{postsList}</ul>
      </div>

    </>
  )
}

export default Community
