import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';
import { Grid, Nav, List, ListItem, Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Homepage from './components/NormalUser/homepage';
import AdminHomepage from './components/AdminUser/homepage';
import Signup from './components/SignUp.js';
import Login from './components/signin.js';
import TakeQuiz from './components/NormalUser/TakeQuiz.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

 export default class App extends React.Component {

  state = {
      id:'0',
      admin:false
  }
  handleOptionSelect=(value)=>{
    console.log("found Value "+value)
    this.setState({
      id : value
    })
  }
  changeProfile=(e)=>{
    this.setState({
      admin: !this.state.admin
    })
  }
  render(){
    return (
      <Router>
        <Grid m={2}>
            <AppBar position="static" style={{backgroundColor:"#5C4033"}}>
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Exam Portal
                  </Typography>
              <List style={{display:"flex",float:"right",color:"white",height:"50px"}}>
                {
                this.state.admin?
                <ListItem>
                  <Link to="/admin">Home</Link>
                </ListItem>:
                <ListItem>
                  <Link to="/">Home</Link>
                </ListItem>}
                <ListItem>
                  <Link to="/login">Login</Link>
                </ListItem>
                <ListItem>
                  <Link to="/signup">Signup</Link>
                </ListItem>
                {
                  this.state.admin===true?
                  <ListItem>
                    <Link to="/"  onClick={this.changeProfile}>User Login</Link>
                  </ListItem>:  <ListItem>
                      <Link to="/admin" onClick={this.changeProfile}>Admin Login</Link>
                    </ListItem>
                }
              </List>
                </Toolbar>
            </AppBar>
        </Grid>

        <Switch>
         <Route path="/signup">
           <Signup />
         </Route>
         <Route path="/login">
           <Login />
         </Route>
         <Route path="/admin">
           <AdminHomepage />
         </Route>
         <Route path="/quiz">
           <TakeQuiz />
         </Route>
         <Route path="/">
           <Homepage />
         </Route>
       </Switch>
      </Router>
    );
  }

}
