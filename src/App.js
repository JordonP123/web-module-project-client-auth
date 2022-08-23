import React from 'react';
import './App.css';
import { Route, Link, Switch} from 'react-router-dom';
import Login from './components/login'
import FriendsList from './components/friendsList'
import AddFriends from './components/addFriends'
import Logout from './components/logout'


function App() {
  return (
    <div className = "App">
      <nav className = 'navBar'>
          <div className='headerMessage'>FRIENDS DATABASE</div>
        <Link className='links' to = '/login'>LOGIN</Link>
        <Link className='links' to = '/friends'>FRIENDSLIST</Link>
        <Link className='links' to = '/friends/add'>ADDFRIEND</Link>
        <Link className='links' to = '/logout'>LOGOUT</Link>
      </nav>
      <Route exact path='/' component={Login}></Route>
      <Route path='/login' component={Login}></Route>
      <Route path='/friends' component={FriendsList}></Route>
      <Route path='/friends/add' component={AddFriends}></Route>
      <Route path='/logout' component={Logout}></Route>
    </div>
  );
}

export default App;
