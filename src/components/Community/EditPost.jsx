import React, { useEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'

import { showPost, editPost } from '../../api/posts'
import PostForm from './PostForm'

const EditPost = ({ user }) => {
  const { postId } = useParams()
  //   const [post, setPost] = useState([''])
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [updated, setUpdated] = useState(false)

  if (!user) {
    return <Navigate to='/' />
  }

  useEffect(() => {
    const fetchData = async () => {
      console.log('the postId thru useParam is:', postId)
      try {
        const res = await showPost(user, postId)
        setTitle(res.data.post.title)
        setText(res.data.post.text)
        console.log('the individual post data is:', res)
      } catch (error) {
        console.log('error is', error)
      }
    }
    fetchData()
  }, [])

  //   const handleSubmit = async event => {
  const handleSubmit = async event => {
    event.preventDefault()
    try {
      await editPost(user, postId, title, text)
      console.log('edit request gone through')
      setUpdated(true)
    } catch (error) {
      console.log('error is', error)
    }
  }

  if (updated) {
    // Navigate to the 'show' page
    // console.log('updated object is:', updated)
    return <Navigate to='/community'/>
  }

  return (
    <div>
      <PostForm handleSubmit={handleSubmit} title={title} text={text} setTitle={setTitle} setText={setText}/>
    </div>
  )
}

export default EditPost