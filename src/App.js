import React, { Component } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Layout from './Layout'

const Home = () => <h1>Home</h1>
const About = props => (
  <div>
    <h1>About</h1>
    <p>{props.text}</p>
  </div>
)
const User = () => <h1>User</h1>
const NoMatch = () => <h1>404 Not Found</h1>

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Layout exact path="/" component={Home}/>
          <Layout path="/about" component={About} text="This is the About page" />
          <Layout path="/user/:user" component={User} />
          <Layout component={NoMatch}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
