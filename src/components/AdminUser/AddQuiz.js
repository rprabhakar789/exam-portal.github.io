
import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import { Grid, Nav } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import QuizInfo from './QuizInfo'
import AddQues from './AddQues'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

 export default class AddQuiz extends React.Component {

  state = {
      id:0,
      page:0,
      category:"",
      topic:""
  }

  handleCategoryChange=(event)=>{
    console.log("changing category "+event.target.value)
    this.setState({
      category : event.target.value
    })
  }
  handleTopicChange = (event)=>{
    console.log("setting topic to "+event.target.value);
    this.setState({
        topic: event.target.value
    })
  }
  handleNext=(category, topic)=>{
    console.log("found category and topic "+category+" "+topic);
    this.setState({
      category:category,
      topic:topic,
      id:1
    },()=>{
      console.log(`id${this.state.id}`)
    })
  }
  render(){
    return (
        <Grid style={{ width:'100%',maxWidth:'600px' }} width='100%'>
          <div className="main-screen">
                {
                  this.state.id===0?
                  <QuizInfo handleNext={this.handleNext}  category={this.state.category} topic={this.state.topic}/>:
                  <AddQues category={this.state.category} topic={this.state.topic}/>
                }
            </div>
        </Grid>
    );
  }

}
