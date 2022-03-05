import React, { useState, useEffect } from 'react'
import { indexPosts } from '../../api/posts'

const Community = () => {
// variables
  const [posts, setPosts] = useState([''])

  // need to make sure user is signed in

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await indexPosts()
        setPosts(res.data.posts)
      } catch (error) {
        console.log('error')
      }
    }
    fetchData()
  }, [])

  const postsList = posts.map(post => (
    <li key={post._id}>
      <p>{post.title}</p>
    </li>
  ))
  return (
    <div>
      <ul>{postsList}</ul>
    </div>
  )
}

// create section (for signed in user)-- "Sign to write a post"

// see all posts section

export default Community
