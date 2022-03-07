import React, { useState, useEffect } from 'react'
import { indexPosts } from '../../api/posts'
import RenderPosts from './RenderPosts'
import WritePost from './WritePost'

const Community = ({ user }) => {
// variables
  const [posts, setPosts] = useState([''])

  // need to make sure user is signed in

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await indexPosts()
        setPosts(res.data.posts)
        console.log(res)
        console.log('the userID logged from community is', user._id)
      } catch (error) {
        console.log('error')
      }
    }
    fetchData()
    console.log('the user from the community component returns', user)
  }, [])

  // const renderPosts = () => {
  //   return posts.map(post => (
  //     <li key={post._id}>
  //       <p>Title:{post.title}</p>
  //       <p>Text:{post.text}</p>
  //     </li>
  //   ))
  // }
  return (
    <>
      <div>{user ? <WritePost user={user} /> : 'Sign in to post about your experience!' }</div>
      {/* option to show delete and update buttons could be ternary with user id */}
      <div>
        <h1>Messages from the community</h1>
        <ul><RenderPosts user={user} posts={posts}/></ul>
        {/* maybe forEach post, if user id === post.owner then have buttons,
        approach: check res for each post and see owner id, check system behind id and owner id */}
      </div>

    </>
  )
}

export default Community
