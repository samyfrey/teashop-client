import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { indexPosts } from '../../api/posts'
import RenderPosts from './RenderPosts'

const Community = ({ user, msgAlert }) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await indexPosts()
        setPosts(res.data.posts)
      } catch (error) {
        msgAlert({
          heading: 'Failed to load posts',
          message: error.message,
          variant: 'danger'
        })
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <div>{user ? <Link to='/community/post' user={user}><button>Write a post</button></Link> : 'Sign in to post about your experience!' }</div>
      <div>
        <h1>Messages from the community</h1>
        <ul><RenderPosts user={user} posts={posts}/></ul>
      </div>

    </>
  )
}

export default Community
