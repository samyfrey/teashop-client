import React from 'react'
import { StyledCard } from '../../Styles/Card.styled'
import { StyledPostForm } from '../../Styles/PostForm.styled'

const PostForm = ({ handleSubmit, title, text, setTitle, setText }) => {
  return (
    <>
      <StyledPostForm>
        <StyledCard>

          <div className='container'>
            <form onSubmit={handleSubmit} >
              <input
                placeholder="Title of your post"
                name="title"
                type="text"
                value={title}
                onChange={event => setTitle(event.target.value)}
              />
              <textarea
                placeholder="Text of your post..."
                name="text"
                type="text"
                value={text}
                onChange={event => setText(event.target.value)}
              />
              <button type="submit">Post</button>
            </form>
          </div>
        </StyledCard>
      </StyledPostForm>
    </>
  )
}

export default PostForm
