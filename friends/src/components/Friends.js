import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import FriendCard from './FriendCard';

export default function Friends(props) {
    const [friends, setFriends] = useState([])
    const [newFriend, setNewFriend] = useState({
        id: Date.now(),
        name: "",
        age: 0,
        email: ""
    })

    useEffect(() => {
        api().get("/api/friends")
            .then(res => {
                setFriends(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleChange = event => {
        setNewFriend({
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
    }

    return (
        <div>
            Enter a new friend:
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="name"
                    value={newFriend.name}
                    placeholder="Name"
                    onChange={handleChange}
                />
                <input 
                    type="number"
                    name="age"
                    value={newFriend.age}
                    placeholder="Age"
                    onChange={handleChange}
                />
                <input 
                    type="email"
                    name="email"
                    value={newFriend.email}
                    placeholder="Email"
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>

            <h2>Your Friends:</h2>
            {friends.map(friend => (
                <FriendCard key={friend.id} friend={friend} />
            ))}
        </div>
    )
}