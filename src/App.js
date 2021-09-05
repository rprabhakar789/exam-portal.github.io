import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import SideBar from './SideBar/sideBar.js'
import Box from '@material-ui/core/Box';
import { Grid, Nav } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import MainView from './MainView/MainView';

 export default class App extends React.Component {

  state = {
      id:'0'
  }
  handleOptionSelect=(value)=>{
    console.log("found Value "+value)
    this.setState({
      id : value
    })
  }
  render(){
    return (
        <Grid m={2}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Exam Portal
                  </Typography>
                </Toolbar>
            </AppBar>
            <Box display="flex" justifyContent="space-between" mt={1}>
                <Grid item m={2} xs={3} height="100vh">
                    <SideBar onSelectOption={this.handleOptionSelect}/>
                </Grid>
                <Grid item m={2} xs={9} style={{marginLeft:"10px"}} >
                    <MainView index={this.state.id}/>
                </Grid>
            </Box>
        </Grid>
    );
  }

}
