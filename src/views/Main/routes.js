import React from 'react'
import {Route, IndexRedirect} from 'react-router'
import AuthService from 'utils/AuthService'
import Container from './Container'
import Home from './Home/Home'
import Login from './Login/Login'
import Profile from './Profile/Profile'
import Instructor from './Instructor/Instructor'
import NewInstructor from './NewInstructor/NewInstructor'

const auth = new AuthService()

export const makeMainRoutes = () => {
  // apply the requireAuth and requireAdmin checks to the last
  // three routes
  return (
    <Route path="/" component={Container} auth={auth}>
      <IndexRedirect to="/home" />
      <Route path="home" component={Home} />
      <Route path="login" component={Login} />
      <Route path="profile" component={Profile} />
      <Route path="instructor" component={Instructor} />
      <Route path="instructor/new" component={NewInstructor} />
    </Route>
  )
}

export default makeMainRoutes
