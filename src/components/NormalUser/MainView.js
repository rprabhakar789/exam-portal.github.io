import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AllQuiz from './AllQuiz';
import AttemptedQuiz from './AttemptedQuiz';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '98%',
        margin:"10px",
        ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
          margin: 'auto',
          marginTop:5,
        }
    },

}));
export default function MainView(props){
      const classes = useStyles();
      console.log("Prop.index is "+props.index)
      let content;
      if(props.index===2)
      {
        console.log("getting attempted quizes...")
        content = <AttemptedQuiz/>
      }
      else
      {
        console.log("getting all quizes...")
        content = <AllQuiz/>
      }
      return (
        <Grid className={classes.root} container>
          {content}
        </Grid>
      );

}
