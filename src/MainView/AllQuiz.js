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

const allQuizes = [
  {
    topic: "Java Basics",
    description: "Test your basic understanding of java in this test.",
    noOfQues: 5,
    marks: 100
  },
  {
    topic: "Spring Boot",
    description: "Test your basic understanding of Spring Boot in this test",
    noOfQues: 10,
    marks: 50
  },
  {
    topic: "Python",
    description: "Test your basic understanding of Python in this test",
    noOfQues: 10,
    marks: 50
  },
  {
    topic: "C++",
    description: "Test your understanding of C++ in this test",
    noOfQues: 10,
    marks: 50
  },
]

export default function AllQuiz() {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    return (
      <Grid>
     <Grid item xs={12}>
       <Grid container>
         {  allQuizes.map((quiz)=>{
             return(
               <Card variant="outlined" className={classes.root} style={{display:"block", margin:"10px",width:"275px"}}>
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                      {quiz.topic}
                    </Typography>
                    <Typography variant="body2" component="p">
                     {quiz.description}
                      <br />
                      <br/>
                      <div style={{display:"flex",justifyContent: "space-between"}}>
                      <div>
                        {quiz.noOfQues} Questions
                      </div>
                      <div>
                        {quiz.marks} Marks
                      </div>
                      </div>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" color="primary">Start</Button>
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
