import React from 'react'

const RenderPosts = ({ user, posts }) => {
  console.log('the user prop from the render post returns', user)

  return posts.map((post) => (
    <li key={post._id}>
      <p>Title:{post.title}</p>
      <p>Text:{post.text}</p>
      <div>{post.owner === user._id ? <button>Test</button> : 'other user'}</div>
    </li>
  ))
}

export default RenderPosts

//
// (user._id === post.owner)

// const renderPosts = () => {
//     // const postButtons = (
//     //   <button>Test Button</button>
//     // )
//   }
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
