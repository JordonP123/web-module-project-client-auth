import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const initalLogin = {
    username: '',
    password: ''
}

function Login() {

    const [login, setLogin] = useState(initalLogin)
    const [error, setError] = useState(null)

    const Navigate = useNavigate()

    const onChange = (evt) => {
        const { name, value } = evt.target
        setLogin({ ...login, [name]: value })
    }

    const onSubmit = (evt) => {
        evt.preventDefault()
        axios.post(`http://localhost:9000/api/login`, login)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                Navigate('/friends')
            })
            .catch(err => setError(err.response.data.error))
    }

    return (
        <div className='loginContainer'>
            <h1 className='loginHeader'>LOGIN</h1>
            <form onSubmit={onSubmit} className='formContainer'>
                <label className='labels'>USERNAME</label><br />
                <input className='inputs' onChange={onChange} type='username' name='username' value={login.username} /><br />
                <label className='labels'>PASSWORD</label><br />
                <input className='inputs' onChange={onChange} type='password' name='password' value={login.password} /><br />
                <input className='inputs submit' type='submit' value='SUBMIT' />
            </form>
            <div className='error'>{error}</div>
        </div>
    )
}

export default Login