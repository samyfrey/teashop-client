import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
// import { Navigate } from 'react-router-dom'
import { writePost } from '../../api/posts'
import PostForm from './PostForm'

const WritePost = ({ user, setRenderPage, msgAlert }) => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [createdId, setCreatedId] = useState(null)

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const res = await writePost(user, title, text)
      setCreatedId(res.data.post._id)
    } catch (error) {
      msgAlert({
        heading: 'Failed to load',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  if (createdId) {
    return <Navigate to={'/community'}/>
  }

  return (
    <>
      <p>Write a post </p>
      <PostForm title={title} text={text} setTitle={setTitle} setText={setText} handleSubmit={handleSubmit} setRenderPage={setRenderPage}/>
    </>
  )
}

export default WritePost
