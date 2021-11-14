import React, {useEffect} from 'react';
import { useLocation } from "react-router-dom";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Grid, Container } from '@material-ui/core';
import SkipPreviousRoundedIcon from '@material-ui/icons/SkipPreviousRounded';
import SkipNextRoundedIcon from '@material-ui/icons/SkipNextRounded';
import { makeStyles } from '@material-ui/core/styles';
import './loader.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const baseUrl = "https://myexamportal-backend.herokuapp.com/"
const questions1 = [
  {
    id: 1,
    questionText: "What is your name?",
    option1: "Rahul",
    option2: "Shivesh",
    option3: "Ashish",
    option4: "Raju",
    answer: "Rahul"
  },
  {
    id: 2,
    questionText: "What is your age?",
    option1: "300",
    option2: "12",
    option3: "23",
    option4: "-19",
    answer: "23"
  },
  {
    id: 3,
    questionText: "Where do you live?",
    option1: "Usa",
    option2: "Hyd",
    option3: "Patna",
    option4: "England",
    answer: "Patna"
  }
]
const useStyles = makeStyles({
  root: {
      width: '98%',
      height:'100vh',
      margin:'10px',
      borderRadius: 5,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"#E0C9A6",
      ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
        margin:5
      }
  },

  box: {
    margin:'auto',
    width:'500px',
    borderRadius:'15px',
    boxShadow: "1.8px 3.5px 3.5px hsl(0deg 0% 0% / 0.45)",
    padding:20,
    justifyContent: "center",
    ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
      width:'80%',
      margin:10
    }
  },

  window:{
     display:"flex",
     justifyContent:"center",
     alignItems:"center",
     paddingTop:"20px"
  }
  ,
  SubmitButton:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    marginTop:"20px",
  }
});



export default function TakeQuiz(){

  const classes = useStyles();
  const location = useLocation();
  const [index, setIndex] = React.useState(0);
  const [answers,setAnswer] = React.useState([]);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [questions, setQuestions] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [state, setState] = React.useState({
    questions:[],
    isLoaded:false
  });
  useEffect(() => {

      console.log(location)
      debugger;
      let mounted = true;
      fetch(`${baseUrl}/api/questionsOfQuiz/${location.state.quizId}`)
        .then(res => res.json())
        .then(
          (result) => {
            //console.log("found result.size "+result.size());
            if(result.length===0)
            {
              setError(true)
            }
            else{
              setState({
                questions: result || [],
                isLoaded: true
              })
              setQuestions(result||[]);
            }
            //debugger;
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            console.log("error loading quiz")
            setQuestions(questions1)
            setError(true);
          }
        )
        return () => mounted = false;
    }, [])
  const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
  };
  const handleNext = (e,index,qId)=>{
    console.log(index+" "+questions.length);
    const ind = index
    if(index<questions.length)
    setIndex(ind+1);
  }
  const handlePrevious = (e,index,qId)=>{
    console.log(index+" "+questions.length);
    const ind = index
    if(index<questions.length)
    setIndex(ind-1);
  }
  const handleSubmit = (e,index,qId)=>{
    console.log(index+" "+questions.length);
    setSubmitted(true);
  }

  const onChangeValue = (e,index)=>{
      console.log(questions)
      console.log(questions[index])
      console.log(questions[index].questionText)
      var ques = questions;
      ques[index] = {...ques[index],answer:e.target.value};
      console.log(ques[index]);
      setQuestions(ques)
      console.log(questions)
      //setQuestions:{...questions[index],answer:e.target.value};
      console.log(questions[index])
      console.log(e.target.value, index);

  }


  var showQuestion=()=>{
    console.log("size "+questions.size())

  }
  if(error===true)
  {
    return(
      <Grid className={classes.root} container item xs={12} alignItems="center" justifyContent="center" style={{marginTop:"50px"}}>
      <Grid container item xs={12} alignItems="center" justifyContent="center">There was some problem loading questions of this quiz.</Grid>
      <Grid><Link to="/"> Go Home</Link></Grid>
      </Grid>
    )
  }
  if(submitted===true)
  {
    return(
      <Grid className={classes.root} container item xs={12}>Thanks for taking the quiz. We will get back to you with the result.
      <br/>
      (Umm, actually we won't. But come back again once we finish our result page.)
      </Grid>
    )
  }
  return (
    <>
    {

      questions.length===0?
          <Container className={classes.root} className="loader"></Container>
          :
          <Grid className={classes.root}>

            <Grid container className = {classes.window}>
            <Grid item md={3}>
            {
              index>0?  <SkipPreviousRoundedIcon onClick={(event) => handlePrevious(event, index, questions[index].id)} fontSize="large" style={{float:"right"}}/>
              :""
            }
            </Grid>
            <Grid item md={6}>
            <Card className={classes.box}>
            <FormControl>
              <FormLabel component="legend">{index+1}. {questions[index].questionText}</FormLabel>
              <RadioGroup aria-label="gender" name="radio-buttons-group" onChange={(e)=>onChangeValue(e,index)}>
                <FormControlLabel value={questions[index].option1} control={<Radio />} label={questions[index].option1} />
                <FormControlLabel value={questions[index].option2} control={<Radio />} label={questions[index].option2} />
                {questions[index].option3===null||questions[index].option3===""?
                "":
                <FormControlLabel value={questions[index].option3} control={<Radio />} label={questions[index].option3} />
                }
                {
                  questions[index].option4===null||questions[index].option4===""?
                  "":
                  <FormControlLabel value={questions[index].option4} control={<Radio />} label={questions[index].option4} />
                }

              </RadioGroup>
              <br/>
            </FormControl>
            </Card>
            </Grid>
            <Grid item md={3}>
            {
              index<questions.length-1?<SkipNextRoundedIcon onClick={(event) => handleNext(event, index, questions[index].id)} fontSize="large"  style={{float:"left"}}/>
              :""
            }
            </Grid>
            </Grid>
            <Grid container item xs={12} justify="center">
            <Button
            variant="contained"
            color="primary"
            className={classes.SubmitButton}
            onClick={(event) => handleSubmit(event, index, questions[index].id)}>Submit
            </Button>
            </Grid>
          </Grid>

    }
    </>
  )
}
//
//
// {

// }
