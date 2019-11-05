import React from 'react';
import './App.css';
import { Link, Route, withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

import Login from './Login';
import Friends from './Friends';
import ProtectedRoutes from '../components/ProtectedRoutes';

const useStyles = makeStyles({
  topnav: {
    width: '450px',
    padding: '15px 50px',
    border: '2px solid gray',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'space-around',
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
  const signedIn = localStorage.getItem("token")

  return (
    <div className="App">
      <h2>Check out your friends!</h2>
      <nav className={classes.topnav}>
        <Link className={classes.links} to="/">Home</Link>
        {!signedIn && <Link className={classes.links} to="/login">Log In</Link>}
        {signedIn && <Link className={classes.links} to="/friends">Friends</Link>}
      </nav>

      <Route exact path="/login" component={Login} />
      <ProtectedRoutes exact path="/friends" component={Friends} />
    </div>
  );
}

export default withRouter(App);
