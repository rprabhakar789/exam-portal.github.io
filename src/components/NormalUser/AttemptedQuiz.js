import React from 'react'
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


const useStyles = makeStyles({
  root: {
    padding:"10px",
  },
  title: {
    fontSize: 14,
  },
});

const attemptedQuizes = [
  {
    topic: "Java Basics",
    description: "Test your basic understanding of java here",
    noOfQues: 5,
    marks: 100,
    solved: 3,
    marksObtained:"60%"
  },
  {
    topic: "Python",
    description: "Test your basic understanding of Python in this test",
    noOfQues: 10,
    marks: 50,
    solved: 6,
    marksObtained:"60%"
  }
]

export default function AttemptedQuiz() {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    return (
      <Grid>
     <Grid item xs={12}>
       <Grid container>
         { attemptedQuizes.map((quiz)=>{
           return(
             <Card variant="outlined" className={classes.root} style={{display:"block", margin:"10px",width:"275px",borderRadius:"15px"}}>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    {quiz.topic}
                  </Typography>
                  <Typography variant="body2" component="p">
                   {quiz.description}
                    <br />
                    <br/>
                    No of Questions: {quiz.noOfQues}
                    <br/>
                    Total Marks: {quiz.marks}
                    <br/>
                    Solved: {quiz.solved}
                    <br/>
                    Marks Obtained: {quiz.marksObtained}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" color="primary">View</Button>
                </CardActions>
             </Card>
           )})}
       </Grid>
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
