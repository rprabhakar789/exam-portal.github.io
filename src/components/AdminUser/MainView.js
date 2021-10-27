import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddQuiz from './AddQuiz';
import AttemptedQuiz from './AttemptedQuiz';
import AllQuiz from './AllQuiz';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        margin:"20px",
        ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
          margin: 'auto',
          marginTop:20
        }
    }
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
        content = <AddQuiz/>
      }
      return (
        <Grid className={classes.root} container>
          {content}
        </Grid>
      );

}
