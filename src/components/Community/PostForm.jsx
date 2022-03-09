import React from 'react'

const PostForm = ({ handleSubmit, title, text, setTitle, setText }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title of your post"
          name="title"
          type="text"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <textarea
          placeholder="Text of your post"
          name="text"
          type="text"
          value={text}
          onChange={event => setText(event.target.value)}
        />
        <button type="submit">Post</button>
      </form>
    </>
  )
}

export default PostForm
