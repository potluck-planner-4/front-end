import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './Components/Login'
import AccountCreation from './Components/AccountCreation'
import Nav from './Components/Nav'
import EventDisplay from './Components/EventDisplay'

function App() {

  const [users, setUsers] = useState([])

  return (
    <BrowserRouter>
      <Switch>
        <Route id = 'login' path="/login">
          <Nav />
          <Login />
        </Route>
        <Route id = 'create-account' path="/create-account">
          <Nav />
          <AccountCreation />
        </Route>
        <Route id = 'event-display' path="/event-display">
          <Nav />
          <EventDisplay />
        </Route>
        <Route id = 'home' path="/">
          <Nav />
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
