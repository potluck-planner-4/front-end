import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './Components/Login'

function App() {

  const [users, setUsers] = useState([])

  return (
    <BrowserRouter>
      <Switch>
        <Route id = 'login' path="/login">
          <Login />
        </Route>
        <Route id = 'home' path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
