import React, { useState } from 'react';
import api from '../utils/api';
import axios from 'axios';

export default function Login(props) {
    const [error, setError] = useState()
    const [data, setData] = useState({
        username: "",
        password: ""
    })

    const handleChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        
        api()
            .post('/api/login', data)
            // .post('/api/login', data)
            // .get('/api/login')
            .then(res => {
                console.log(res)
                localStorage.setItem("token", res.data.payload)
            })
            .catch(err => {
                setError(err.response.data.message)
            })
            
        setData({ username: "", password: "" })
    }


    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                className="input"
                name="username"
                value={data.username}
                placeholder="Username"
                onChange={handleChange}
            />
            <input 
                type="password"
                className="input"
                name="password"
                value={data.password}
                placeholder="Password"
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    )
}