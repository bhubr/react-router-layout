import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import Navbar from './Navbar'

// Higher Order Component  ou  HOC
// https://reactjs.org/docs/higher-order-components.html
const Layout = ({ exact, path, component: Component, ...rest }) => {
  console.log(rest)
  return (
    <Fragment>
      <Navbar />
      <Route exact={exact} path={path} render={() => <Component {...rest} />} />
    </Fragment>
  )
}

export default Layout
