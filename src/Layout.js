import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = props => (
  <Fragment>
    <Navbar />
    <Route {...props} />
  </Fragment>
)

export default Layout
