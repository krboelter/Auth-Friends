import React from 'react'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        width: '26%',
        height: '150px',
        textAlign: 'left',
        padding: '15px',
        border: '2px solid white',
        borderRadius: '10px',
        margin: '15px',
        backgroundColor: 'lightgray'
    }
})

export default function FriendCard(props) {
    const classes = useStyles();

    return (
        <div className={classes.card}>
            <h2>Name: {props.friend.name}</h2>
            <p>Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
        </div>
    )

}