import React, { useState, useEffect } from 'react'
import { indexPosts } from '../../api/posts'
import WritePost from './WritePost'
import { Navigate } from 'react-router-dom'

const Community = ({ user }) => {
// variables
  const [posts, setPosts] = useState([''])

  // need to make sure user is signed in

  if (!user) {
    return <Navigate to='/' />
  }

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
      <WritePost user={user} />
      <div>
        <h1>Messages from the community</h1>
        <ul>{postsList}</ul>
      </div>

    </>
  )
}

// create section (for signed in user)-- "Sign to write a post"

// see all posts section

export default Community
