import React, {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Grid } from '@material-ui/core';
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import './loader.css';
//const baseUrl = "http://127.0.0.1:8586";

const baseUrl = "https://myexamportal-backend.herokuapp.com/"

const useStyles = makeStyles({
  root: {
      width: '400px',
      boxShadow: "1.8px 3.5px 3.5px hsl(0deg 0% 0% / 0.45)",
      transition: "0.25s ease-in-out",
      justifyContent:"space-around",
      alignItems:"center",
      margin:"20px",
      spacing:20,
      borderRadius: 15,
      ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
        margin: 'auto',
        marginTop:20
      },
        '&:hover': {
          boxShadow: "2.2px 4.0px 4.0px hsl(0deg 0% 0% / 0.45)",
          transform: "scale(1.1)",
          transition: "0.25s ease-in-out",
      },
  },

  title: {
    fontSize: 14,
  },
});



const Quizes = [
  {
    id: 1,
    topic: "Java Basics",
    description: "Test your basic understanding of java in this test.",
    no_of_ques: 5,
    total_marks: 100
  },
  {
    id: 2,
    topic: "Spring Boot",
    description: "Test your basic understanding of Spring Boot in this test",
    no_of_ques: 10,
    total_marks: 50
  },
  {
    id: 3,
    topic: "Python",
    description: "Test your basic understanding of Python in this test",
    no_of_ques: 10,
    total_marks: 50
  },
  {
    id: 4,
    topic: "C++",
    description: "Test your understanding of C++ in this test",
    no_of_ques: 10,
    total_marks: 50
  },
]


export default function AllQuiz() {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [allQuizes, setQuizes] = React.useState(Quizes);
    const [error, setError] = React.useState(false);
    useEffect(() => {
        fetch(`${baseUrl}/api/getQuiz`)
          .then(res => res.json())
          .then(
            (result) => {
              //console.log("found result.size "+result.size());
              setIsLoaded(true);
              setQuizes(result.concat(allQuizes));
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    let history = useHistory();

    const handleSubmit = (event, index) => {
        setSelectedIndex(index);
          history.push({
            pathname: "/quiz",
            state: { quizId: index }
          });
    };
    const list = [1,2,3];

    return (
    <Grid style={{margin:"auto"}}>
     <Grid item xs={12}>
     {
       allQuizes.length<=4?
       <Grid xs={12}>loading...</Grid>
       :
       <Grid container item m={3}>
         {
          list.map((e)=>{
            return(
           allQuizes.map((quiz)=>{
             return(
               <Card variant="outlined" className={classes.root} style={{display:"block",width:"400px"}}>
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                      {quiz.topic}
                    </Typography>
                    <Typography variant="body2" component="p">
                     {quiz.desc}
                      <br />
                      <br/>
                      <div style={{display:"flex",justifyContent: "space-between"}}>
                      <div>
                        {quiz.no_of_ques} Questions
                      </div>
                      <div>
                        {quiz.total_marks} Marks
                      </div>
                      </div>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                    variant="contained"
                    color="primary"
                    onClick={(event) => handleSubmit(event, quiz.id)}>Start</Button>
                  </CardActions>
               </Card>
             )}))
            }
         )
         }

       </Grid>
     }
     </Grid>
     </Grid>
    );
}
{
  /*
  const Quiz = (
      <div>Hi Bitches
      allQuizes.map((quiz)=>{
        <Card variant="outlined">
           <CardContent>
             <Typography className={classes.title} color="textSecondary" gutterBottom>
               {quiz.topic}
             </Typography>
             <Typography variant="body2" component="p">
              {quiz.description}
               <br />
               {quiz.noOfQues} {quiz.marks}
             </Typography>
           </CardContent>
           <CardActions>
             <Button size="small">Start</Button>
           </CardActions>
        </Card>
      })
      </div>
  )
  */
}
