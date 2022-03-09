import React from 'react'
import { Link } from 'react-router-dom'
import { deletePost } from '../../api/posts'
import { StyledCard } from '../../Styles/Card.styled'

const RenderPosts = ({ user, posts, msgAlert }) => {
  const handleDelete = async (post) => {
    try {
      const postId = post._id
      await deletePost(user, postId)
    } catch (error) {
      msgAlert({
        heading: 'Failed to load',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  const editButtons = (post) => {
    return (
      <>
        <Link to={`/community/${post._id}`}>
          <button>Edit</button>
        </Link>
        <button onClick={() => handleDelete(post)}>Delete</button>

      </>

    )
  }

  return posts.map((post) => (

    <ul key={post._id}>
      <StyledCard>
        <div>
          <h4>{post.title}</h4>
          <p>{post.text}</p>
          <div>{post.owner === user?._id && editButtons(post)}</div>
        </div>
      </StyledCard>
    </ul>

  ))
}

export default RenderPosts
