import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

function FriendsList() {

    if(!localStorage.getItem('token')){
        return <Navigate to ='/' />
    }

    const [friends, setFriends] = useState([])

    useEffect(() => {
        axios({
            url: 'http://localhost:9000/api/friends',
            method: 'get',
            headers: {
                Authorization: localStorage.getItem('token')
            },
        })
            .then(res => setFriends(res.data))
            .catch(err => console.log({err}))
    }, [])

    return (
        <div className='friendsListContainer'>
            <h1 className='friendsListH1'>FRIENDS LIST</h1>
            <ul className='friendsListUl'>
                {
                friends.map(friend => {
                    return(
                        <li key={friend.id} className='friendsListLi'>
                            {friend.name} - {friend.email}
                        </li>
                    )
                })
                }
            </ul>
        </div>
    )
}

export default FriendsList