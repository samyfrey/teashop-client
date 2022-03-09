import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
// import { Navigate } from 'react-router-dom'
import { writePost } from '../../api/posts'
import PostForm from './PostForm'

const WritePost = ({ user, setRenderPage }) => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [createdId, setCreatedId] = useState(null)
  // only accessible to users logged in

  const handleSubmit = async event => {
    event.preventDefault()
    // console.log('the user is', user)
    try {
      const res = await writePost(user, title, text)
      console.log(res)
      setCreatedId(res.data.post._id)
      console.log('the id', createdId)
      // console.log('post created')
    } catch (error) {
      console.log(error)
    }
  }

  if (createdId) {
    // Navigate to the 'show' page
    // console.log('updated object is:', updated)
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
