/* eslint-disable no-tabs */
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import Community from './components/Community/Community'
import EditPost from './components/Community/EditPost'
import WritePost from './components/Community/WritePost'
import Explore from './components/Explore/Explore'
import MyAccount from './components/Account/MyAccout'
import About from './components/About/About'

const App = () => {
  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])

  const clearUser = () => setUser(null)

  const msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    setMsgAlerts(msgAlerts => ([...msgAlerts, { heading, message, variant, id }]))
  }

  return (
    <>
      <Header user={user} />
      {msgAlerts.map((msgAlert) => (
        <AutoDismissAlert
          key={msgAlert.id}
          heading={msgAlert.heading}
          variant={msgAlert.variant}
          message={msgAlert.message}
          id={msgAlert.id}
        />
      ))}
      <main className='container'>
        <Routes>
          <Route
            path='/sign-up'
            element={<SignUp msgAlert={msgAlert} setUser={setUser} />}
          />
          <Route
            path='/sign-in'
            element={<SignIn msgAlert={msgAlert} setUser={setUser} />}
          />
          <Route
            path='/sign-out'
            element={
              <SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
            }
          />
          <Route
            path='/myaccount'
            element={<MyAccount msgAlert={msgAlert} user={user} />}
          />
          <Route
            path='/change-password'
            element={<ChangePassword msgAlert={msgAlert} user={user} />}
          />
          <Route
            path='/'
            element={<Explore msgAlert={msgAlert} />}
          />
          <Route
            path='/community'
            element={<Community msgAlert={msgAlert} user={user} />}
          />
          <Route
            path='/community/:postId'
            element={<EditPost msgAlert={msgAlert} user={user} />}
          />
          <Route
            path='/community/post'
            element={<WritePost msgAlert={msgAlert} user={user} />}
          />
          <Route
            path='/about'
            element={<About />}
          />

        </Routes>
      </main>
    </>
  )
}

export default App
