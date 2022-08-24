import React from 'react';
import './App.css';
import {Route, Link, Routes} from 'react-router-dom';
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
      <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/friends' element={<FriendsList/>}/>
      <Route path='/friends/add' element={<AddFriends/>}/>
      <Route path='/logout' element={<Logout/>}/>
      </Routes>
    </div>
  );
}

export default App;
