
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

import AddQues from './AddQues';
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
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
  submit: {
    margin: theme.spacing(3, 0, 2),
    position: 'relative',
    display:'flex',
    float:'right',
    width:100,
    ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key

    }
  },
}));
export default function QuizInfo(props) {

   const classes = useStyles();
   const [state, setState] = React.useState({
     category: props.category,
     topic: props.topic
   });


  const handleOptionSelect=(value)=>{
    console.log("found Value "+value)
    this.setState({
      id : value
    })
  }
  const handleCategoryChange=(event,value)=>{
    console.log(value)
    setState({
      category : value.title,
      topic:state.topic
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

  const handleNext = (event)=>{
    event.preventDefault();
    console.log("sending back category and topic "+state.category+" "+state.topic)
      props.handleNext(state.category,state.topic);
  }
    return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
    <Card className={classes.card}>
     <CardContent>
      <FormControl onSubmit={handleNext}>
      <Autocomplete
        id="category"
        options={categories}
        getOptionLabel={(option) => option.title}
        style={{ width: 300 }}
        required
        renderInput={(params) => <TextField {...params} label="Catergory" variant="outlined" />}
        onChange={handleCategoryChange}
      />
        <FormHelperText></FormHelperText>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="topic"
          label="Topic"
          id="topic"
          onChange = {e => {handleTopicChange(e)}}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleNext}
          style={{margin:"auto"}}
        >
          Next
        </Button>

      </FormControl>
      </CardContent>
     </Card>
      </div>
        </Container>
    );
}
