import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

import Login from './Login';
import Friends from './Friends';
import ProtectedRoutes from '../components/ProtectedRoutes';

const useStyles = makeStyles({
  topnav: {
    width: '600px',
    padding: '15px 50px',
    border: '2px solid gray',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '30px auto',
    backgroundColor: 'lightgray'
  },
  links: {
    color: 'blue',
    fontSize: '18px',
    textDecoration: 'none'
  }
})

function App() {
  const classes = useStyles()

  return (
    <div className="App">
      <h2>Check out your friends!</h2>
      <nav className={classes.topnav}>
        <Link className={classes.links} to="/">Home</Link>
        <Link className={classes.links} to="/login">Log In</Link>
        <Link className={classes.links} to="/friends">Friends</Link>
      </nav>

      <Route exact path="/login" component={Login} />
      <ProtectedRoutes exact path="/friends" component={Friends} />
    </div>
  );
}

export default App;
