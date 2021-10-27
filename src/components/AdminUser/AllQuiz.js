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


const useStyles = makeStyles({
  root: {
      width: '100%',
      margin:"20px",
      ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
        margin: 'auto',
        marginTop:20
      }
  },

  title: {
    fontSize: 14,
  },
});



const Quizes = [
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
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [allQuizes, setQuizes] = React.useState([]);
    const [error, setError] = React.useState(false);
    useEffect(() => {
        fetch("https://myexamportal-backend.herokuapp.com/api/getQuiz")
          .then(res => res.json())
          .then(
            (result) => {
              //console.log("found result.size "+result.size());
              setIsLoaded(true);
              setQuizes(result);
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
    return (
      <Grid style={{margin:"auto"}}>
     <Grid item xs={12}>
       <Grid container>
         {  allQuizes.map((quiz)=>{
             return(
               <Card variant="outlined" className={classes.root} style={{display:"block",width:"275px"}}>
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
