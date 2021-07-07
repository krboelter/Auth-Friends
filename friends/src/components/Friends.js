import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import FriendCard from './FriendCard';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        margin: '0 auto'
    },
    input: {
        width: '100%',
        margin: '10px auto',
        backgroundColor: '#66ff33',
        color: 'black',
        height: '35px',
        padding: '5px',
        border: '2px solid #446600',
        borderRadius: '8px'
    },
    button: {
        width: '60%',
        height: '50px',
        margin: '10px auto',
        backgroundColor: '#446600',
        color: 'white',
        border: '2px solid #66ff33',
        borderRadius: '5px'
    },
    cardList: {
        width: '60%',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap'
    }
})

export default function Friends(props) {
    const classes = useStyles();

    const [friends, setFriends] = useState([])
    const [newFriend, setNewFriend] = useState({
        name: "",
        age: 0,
        email: ""
    })
    const [friendAdded, setFriendAdded] = useState(false);

    useEffect(() => {
        api().get("/api/friends")
            .then(res => {
                setFriends(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [friendAdded])

    const handleChange = event => {
        setNewFriend({
            ...newFriend,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()

        api().post('/api/friends', newFriend)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        
        setNewFriend({
            name: "",
            age: 0,
            email: ""
        })

        setFriendAdded(!friendAdded)
    }

    // useEffect(() => {
    //     setNewFriend({ name: "", age: 0, email: "" })
    // }, [handleSubmit])
            
    return (
        <div>
            Enter a new friend:
            <form className={classes.form} onSubmit={handleSubmit}>
                <input 
                    className={classes.input}
                    type="text"
                    name="name"
                    value={newFriend.name}
                    placeholder="Name"
                    onChange={handleChange}
                />
                <input 
                    className={classes.input}
                    type="number"
                    name="age"
                    value={newFriend.age}
                    placeholder="Age"
                    onChange={handleChange}
                />
                <input 
                    className={classes.input}
                    type="email"
                    name="email"
                    value={newFriend.email}
                    placeholder="Email"
                    onChange={handleChange}
                />
                <button className={classes.button}>Submit</button>
            </form>

            <h2>Your Friends:</h2>
            <div className={classes.cardList}>
                {friends.map(friend => (
                    <FriendCard key={friend.id} friend={friend} />
                ))}
            </div>
        </div>
    )
}