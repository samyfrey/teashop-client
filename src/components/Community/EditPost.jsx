import React, { useEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'

import { showPost, editPost } from '../../api/posts'
import PostForm from './PostForm'

const EditPost = ({ user, msgAlert }) => {
  const { postId } = useParams()
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [updated, setUpdated] = useState(false)

  if (!user) {
    return <Navigate to='/' />
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await showPost(user, postId)
        setTitle(res.data.post.title)
        setText(res.data.post.text)
      } catch (error) {
        msgAlert({
          heading: 'Failed to load',
          message: error.message,
          variant: 'danger'
        })
      }
    }
    fetchData()
  }, [])

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      await editPost(user, postId, title, text)
      setUpdated(true)
    } catch (error) {
      msgAlert({
        heading: 'Failed to load',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  if (updated) {
    return <Navigate to='/community'/>
  }

  return (
    <div>
      <PostForm handleSubmit={handleSubmit} title={title} text={text} setTitle={setTitle} setText={setText}/>
    </div>
  )
}

export default EditPost
