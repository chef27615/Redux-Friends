import React from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Login from './component/Login';
import FriendsList from './component/FriendsList';
import PrivateRoute from  './component/PrivateRoute';



function App() {
  return (
    <Router>
      <div className="App">
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
        <ul>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/protected" component={FriendsList} />
        </ul>
      </ul>
      </div>
    </Router>
  )
}

export default App

