import React, { useState } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

const newFriendData = {
    name: '',
    email: ''
}

function AddFriends(){

    if(!localStorage.getItem('token')){
        return <Navigate to ='/' />
    }

    const [friends, setFriends] = useState(newFriendData)

    const onChange = evt => {
        const { name, value } = evt.target
        setFriends({...friends, [name]: value})
       }

       const onSubmit = evt => {
        evt.preventDefault()
        axios({
            url: 'http://localhost:9000/api/friends' ,
            method: 'post',
            data: friends,
            headers: {
                Authorization: localStorage.getItem('token')
            },
        })
        .then({})
        .catch(err => console.log({err}))
       }

    return(
        <div className='loginContainer'>
        <h1 className='loginHeader'>ADD FRIEND</h1>
        <form onSubmit={onSubmit} className='formContainer'>
           <label className='labels addFriendsLabels'>FRIEND NAME</label><br/>
           <input className='inputs addFriendsInputs' onChange={onChange} value={friends.name} type='text' name='name'/><br/>
           <label className='labels addFriendsLabels'>FRIEND EMAIL</label><br/>
           <input className='inputs addFriendsInputs' onChange={onChange} value={friends.email} type='text' name='email'/><br/>
           <input className='inputs submit addFriendsSubmit' type='submit' value='SUBMIT'/>
        </form>
       </div>
    )
}

export default AddFriends