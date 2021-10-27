
import React, { Component,useState } from 'react';
import Box from '@material-ui/core/Box';
import { Grid, Nav } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import MainView from './MainView';
import SideBar from './sideBar'
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        margin:"20px",
        ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
          margin: 'auto',
          marginTop:20
        }
    },

    mainscreen: {
      display: 'flex',
      ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
        margin: 'auto',
        marginTop:20,
        display: 'block',
        margin:'auto',
        justifyContent: 'center',
        alignItems:'center'
      }
    },
    sidebar:{
      width:'25%',
      margin:10,
      ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
        margin: 'auto',
        marginTop:20,
        width:'100%'
      }
    },
    mainbar:{
      width:'75%',
      minHeight:'100vh', 
      margin:10,
      ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
        margin: 'auto',
        marginTop:20,
        width:'100%'
      }
    }
}));
 export default function Homepage(){

   const classes = useStyles();
   const [state, setState] = React.useState({
     id:0
   });

  const handleOptionSelect=(value)=>{
    console.log("found Value "+value)
    setState({
      id : value
    })
  }
    return (

      <Grid>
        <div className={classes.mainscreen}>
              <Grid item className={classes.sidebar} m={3} height="100vh">
                  <SideBar onSelectOption={handleOptionSelect}/>
              </Grid>
              <Grid className={classes.mainbar} m={9} style={{backgroundColor:"#cce6ff", height:'auto'}} >
                  <MainView index={state.id}/>
              </Grid>
          </div>
      </Grid>

    );

}
