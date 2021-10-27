
import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import { Grid, Nav, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MainView from './MainView';
import SideBar from './sideBar';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CssBaseline from '@material-ui/core/CssBaseline';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const categories = [
  { title: 'Computer Science', value:"cse" },
  { title: 'Science', value: "science" },
  { title: 'Maths', value:"maths" },
  { title: 'General Knowledge', value: "gk" },
  { title: 'Other', value: "other" }
]
const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'left',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  buttonAdd: {
    margin: theme.spacing(3, 0, 2),
    position: 'relative',
    display:'flex',
    float:'right',
    width:100,
    ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key

    }
  },
  card:{
    marginTop:10,
    width: '100%',
    ['@media (max-width:900px)']: { // eslint-disable-line no-useless-computed-key
      width:'100%'
    }
  },
  header:{
    borderBottom: '2px grey solid',
  }
}));
export default function AddQues(props) {

   const classes = useStyles();
   const [state, setState] = React.useState({
     category: props.category,
     topic: props.topic,
     ques:[],
   });
   const [count, setCount] = React.useState(0)
   const [currQues, setCurrQues] = React.useState({
       questionText:"",
       option1:"",
       option2:"",
       answer:"",
       id:''
   })
   const [alert, setAlert] = React.useState(false)
   const [answerNotMatchingAlert, setAnswerNotMatchingAlert] =  React.useState(false)
   let  question={
      questionText:"",
      option1:"",
      option2:"",
      answer:"",
      id:'',
      marks:0
    }

  const handleOptionSelect=(value)=>{
    console.log("found Value "+value)
    this.setState({
      id : value
    })
  }
  const handleCategoryChange=(event,value)=>{
    console.log(value)

    setState({
      ques:[],
      totalMarks:0,
      activeId:'',
      isAdding:false
    },()=>{
      console.log("category is "+state.category)
    })
  }
  const handleTopicChange = (event)=>{
    console.log("setting topic to "+event.target.value);
    setState({
        category: state.category,
        topic: event.target.value
    })
  }

  const handleQuestionChange=(e)=>{
    console.log(e.target.value)
    question.questionText = e.target.value;
    console.log(state.ques.length+1)

    setCurrQues({
      questionText:e.target.value,
      option1:currQues.option1,
      option2:currQues.option2,
      answer:currQues.answer,
      id:state.ques.length+1
    })
  }
  const handleOption1Change=(e)=>{
    question.option1 = e.target.value;
    console.log(question.option1)
    setCurrQues({
      questionText:currQues.questionText,
      option1:e.target.value,
      option2:currQues.option2,
      answer:currQues.answer,
      id:state.ques.length+1
    })
  }
  const handleOption2Change=(e)=>{
    question.option2 = e.target.value;
    console.log(question.option2)
    setCurrQues({
      questionText:currQues.questionText,
      option1:currQues.option1,
      option2:e.target.value,
      answer:currQues.answer,
      id:state.ques.length+1
    })
  }
  const handleAnswerChange=(e)=>{
    question.answer = e.target.value;
    console.log(question.answer)
    setCurrQues({
      questionText:currQues.questionText,
      option1:currQues.option1,
      option2:currQues.option2,
      answer:e.target.value,
      id:state.ques.length+1
    })
  }

  const isValid=(ques)=>
  {

    if(ques.questionText===""||
        ques.option1===""||
        ques.option2===""||
        ques.answer==="")
        {
          console.log(ques.questionText+" "+
          ques.option1+ " "+
          ques.option2+ " "+
          ques.answer
          )
          setAnswerNotMatchingAlert(false);
          setAlert(true);
          return false;
        }
    if(ques.answer!=ques.option1&&
        ques.answer!=ques.option2)
        {
          console.log(ques.questionText+" "+
          ques.option1+ " "+
          ques.option2+ " "+
          ques.answer
          )
          setAnswerNotMatchingAlert(true);
          setAlert(false);
          return false;
        }
    setAnswerNotMatchingAlert(false);
    setAlert(false);
    return true;
  }

  const handleAdd = (event)=>{
    if(!isValid(currQues))
    {
      console.log(alert+" "+answerNotMatchingAlert);
      return;
    }
    else {
      setAlert(false)
      setAnswerNotMatchingAlert(false);

      console.log(currQues)
      question.id = state.ques.length+1;
       setState({
         ques:[...state.ques, currQues]
       },()=>{
          console.log(state.ques)
       })
       question={
         questionText:"",
         option1:"",
         option2:"",
         answer:"",
         id:'',
         marks:0
       }
       setCurrQues({
         questionText:"",
         option1:"",
         option2:"",
         answer:"",
       })

    }

  }
    return (
      <div>

    <Container component="main">

    <div className={classes.paper}>

    <div className={classes.header}>
      <h3>Category: {props.category}</h3>
      <h3>Topic: {props.topic}</h3>
    </div>
    {
      state.ques.map((q)=>{
        return(
          <Card style={{margin:"10px"}}>
           <CardContent>
          <h5>{q.id}. {q.questionText}</h5>
          a. {q.option1}
          <br/>b. {q.option2}
          <br/>ans: {q.answer}
          </CardContent>
          </Card>
        )
      })
    }
    <Card className={classes.card}>
     <CardContent>
      <FormControl onSubmit={handleAdd} style={{width:'100%'}}>
        {alert===true?<p style={{color:"red"}}>Some inputs are invalid.</p>:""}
        {answerNotMatchingAlert===true?<p style={{color:"red"}}>Answer is not matching to any of the options.</p>:""}

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="question"
          label="question"
          id="question"
          value = {currQues.questionText}
          onChange = {e => {handleQuestionChange(e)}}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="option1"
          label="option1"
          id="option1"
          value = {currQues.option1}
          onChange = {e => {handleOption1Change(e)}}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="option2"
          label="option2"
          id="option2"
          value = {currQues.option2}
          onChange = {e => {handleOption2Change(e)}}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="answer"
          label="answer"
          id="answer"
          value = {currQues.answer}
          onChange = {e => {handleAnswerChange(e)}}
        />

        <Button
          type="Add"
          variant="contained"
          color="primary"
          onClick={handleAdd}
          style={{width:"50px",margin:"auto"}}
        >
         +
        </Button>
      </FormControl>
      </CardContent>
     </Card>
      </div>
        </Container>
        </div>
    );
}
