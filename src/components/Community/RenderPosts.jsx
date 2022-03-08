import React from 'react'
import { Link } from 'react-router-dom'
import { deletePost } from '../../api/posts'

const RenderPosts = ({ user, posts }) => {
  console.log('the user prop from the render post returns', user)

  const handleDelete = async (post) => {
    try {
      const postId = post._id
      const res = await deletePost(user, postId)
      console.log(res)
      // console.log('post created')
    } catch (error) {
      console.log(error)
    }
  }

  // const handleEdit = async (post) => {
  //   try {
  //     const postId = post._id
  //     const res = await showPost(user, postId)
  //     console.log(res)
  //     return (
  //       <>
  //         <p>{res.post.title}</p>
  //       </>
  //     )
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

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
      <h4>{post.title}</h4>
      <p>{post.text}</p>
      <div>{post.owner === user?._id && editButtons(post)}</div>
      {/* <div>{post.owner === user._id ? editButtons() : null }</div> */}
    </ul>
  ))
}

export default RenderPosts

//
// (user._id === post.owner)

//   return (
//     <>
//       <div>{user ? <WritePost user={user} /> : 'Sign in to post about your experience!' }</div>
//       {/* option to show delete and update buttons could be ternary with user id */}
//       <div>
//         <h1>Messages from the community</h1>
//         <ul>{renderPosts(user)}</ul>
//         {/* maybe forEach post, if user id === post.owner then have buttons,
//         approach: check res for each post and see owner id, check system behind id and owner id */}
//       </div>

//     </>
