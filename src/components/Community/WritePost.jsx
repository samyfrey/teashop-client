import React, { useState } from 'react'
import { writePost } from '../../api/posts'
import PostForm from './PostForm'

const WritePost = ({ user }) => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [createdId, setCreatedId] = useState(null)

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
  //   const writePost = (
  //     <>
  //       <form>

  //       </form>
  //     </>
  //   )
  return (
    <>
      <p>Write a post </p>
      <PostForm title={title} text={text} setTitle={setTitle} setText={setText} handleSubmit={handleSubmit}/>
    </>
  )
}

export default WritePost
