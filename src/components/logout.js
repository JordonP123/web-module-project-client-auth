import React from 'react'
import { useNavigate, Navigate } from 'react-router-dom'

function Logout(){

    if(!localStorage.getItem('token')){
        return <Navigate to ='/' />
    }

    const navigate = useNavigate()

    const onClick = () => {
        localStorage.removeItem('token')
        navigate('/')
    }

    const onClickNo = () => {
        navigate('/friends')
    }

    return(
        <div className='logout'>
            <div className='logoutDiv'>ARE YOU SURE YOU WANT TO LOGOUT?</div>
            <button className='logoutBtn' onClick={onClick}>YES</button>
            <button className='logoutBtn' onClick={onClickNo}>NO</button>
        </div>
    )
}

export default Logout