import React from 'react'
import ChangePassword from '../auth/ChangePassword'

const MyAccount = ({ user, msgAlert }) => {
  return (
    <>
      <ChangePassword msgAlert={msgAlert} user={user} />
      {/* {user.username &&
      <h1>Username: {user.username}</h1>} */}
    </>
  )
}

export default MyAccount
