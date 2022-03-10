import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { indexPosts } from '../../api/posts'
import { StyledButton } from '../../Styles/Button.styled'
import { StyleCommunity } from '../../Styles/Community.styled'
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
      <StyleCommunity>
        <div className="community__header">
          <h1>Messages from the community</h1>
          <div>{user ? <Link to='/community/post' user={user}><StyledButton>Write a post</StyledButton></Link> : 'Sign in or sign up to post about your experience!' }</div>
        </div>

      </StyleCommunity>
      <div>
        <RenderPosts user={user} posts={posts}/>
      </div>

    </>
  )
}

export default Community
