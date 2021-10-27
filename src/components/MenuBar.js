import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
                        <MenuBar/>
                  </Typography>
                </Toolbar>
            </AppBar>
            <div className="main-screen">
                <Grid item className="side-bar" height="100vh">
                    <SideBar onSelectOption={this.handleOptionSelect}/>
                </Grid>
                <Grid className="main-bar" style={{backgroundColor:"#cce6ff", height:"100%"}} >
                    <MainView index={this.state.id}/>
                </Grid>
            </div>
        </Grid>
    );
  }

}
