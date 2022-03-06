import React from 'react'

const PostForm = ({ handleSubmit, title, text, setTitle, setText }) => {
  return (
    <>
      {/* <p> Hello from the post form component</p> */}
      <form onSubmit={handleSubmit}>
        {/* <p>Inside the form</p> */}
        <input
          placeholder="Title of your post"
          name="title"
          type="text"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <input
          placeholder="Text of your post"
          name="text"
          type="text"
          value={text}
          onChange={event => setText(event.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </>
  )
}

export default PostForm
