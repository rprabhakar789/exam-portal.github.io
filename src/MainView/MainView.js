import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import AllQuiz from './AllQuiz';
import AttemptedQuiz from './AttemptedQuiz';
class MainView extends React.Component{

    constructor(props){
        super(props);
        console.log("setting "+this.props.index)
        this.state = {
            id:this.props.index
        }
    }

    render(){
      console.log(this.props.index)
      let content;
      if(this.props.index===0)
      {
        console.log("getting all quizes...")
        content = <AllQuiz/>
      }
      else if(this.props.index===2)
      {
        console.log("getting attempted quizes...")
        content = <AttemptedQuiz/>
      }
      return (
        <Grid container>
          {content}
        </Grid>
      );
    }

}
export default MainView;
