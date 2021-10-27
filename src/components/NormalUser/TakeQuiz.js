 import * as React from 'react';
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

import { makeStyles } from '@material-ui/core/styles';
const questions = [
  {
    id: 1,
    quesText: "What is your name?",
    option1: "Rahul",
    option2: "Shivesh",
    option3: "Ashish",
    option4: "Raju",
    answer: "Rahul"
  },
  {
    id: 2,
    quesText: "What is your age?",
    option1: "300",
    option2: "12",
    option3: "23",
    option4: "-19",
    answer: "23"
  },
  {
    id: 3,
    quesText: "Where do you live?",
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
      backgroundColor:"#E0C9A6",
      ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
        margin:5
      }
  },

  box: {
    margin:'auto',
    width:'500px',
    padding:20,
    backgroundColor: '#fafad2',
    flexDirection: "column",
    justifyContent: "center",
    ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
      width:'80%',
      margin:10
    }
  },
});



export default function TakeQuiz() {

  const classes = useStyles();
  const [index, setIndex] = React.useState(0);
  const [answers,setAnswer] = React.useState([]);
  const handleSubmit = (e,index,qId)=>{
    console.log(index);
    const ind = index
    if(index<questions.length-1)
    setIndex(ind+1);
  }
  const onChangeValue = (e,index)=>{

      console.log(e.target.value, index);
  }
  return (
    <Grid className={classes.root}>
    <Card className={classes.box}>
    <FormControl>
      <FormLabel component="legend">{questions[index].id}. {questions[index].quesText}</FormLabel>
      <RadioGroup aria-label="gender" name="radio-buttons-group" onChange={(e)=>onChangeValue(e,questions[index].id)}>
        <FormControlLabel value={questions[index].option1} control={<Radio />} label={questions[index].option1} />
        <FormControlLabel value={questions[index].option2} control={<Radio />} label={questions[index].option2} />
        <FormControlLabel value={questions[index].option3} control={<Radio />} label={questions[index].option3} />
        <FormControlLabel value={questions[index].option4} control={<Radio />} label={questions[index].option4} />

      </RadioGroup>
      <br/>
      {
        index<questions.length-1?
        <Button
        variant="contained"
        color="primary"
        style={{display:'flex',float:'right'}}
        onClick={(event) => handleSubmit(event, index, questions[index].id)}>Next
        </Button>:<div></div>
      }
    </FormControl>
    </Card>
    <Button
    variant="contained"
    color="primary"
    style={{display:'flex',float:'right'}}
    onClick={(event) => handleSubmit(event, index, questions[index].id)}>Submit
    </Button>
    </Grid>
  )
}
