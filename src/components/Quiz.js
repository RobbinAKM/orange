import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MathJax from 'react-mathjax';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  root: {
  display: 'flex',
  flexWrap: 'wrap',
  '& > *': {
    margin: 'inherit',
    width: 'inherit',
    height: 'inherit',
  },
},
}));


const Quiz=({quizzes})=> {
   const classes = useStyles();

	const questions =quizzes;

  console.log(questions); 


const [currentQuestion, setCurrentQuestion] = useState(0);
const [showScore, setShowScore] = useState(false);
const [score, setScore] = useState(0);
const [err,setErr]=useState("");
const [noScore,setNoscore]=useState(false);

const handleAnswerButtonClick = (isCorrect) => {
	const nextQuestion = currentQuestion + 1;
    if (isCorrect) {
        if(noScore){
          setScore(score);
        }else {
          setScore(score+1);
        }
        setErr("")
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
          } else {
            setShowScore(true);
          }
      }else {
        setErr("Incorrect try again !");
        setNoscore(true);
      }
};

	return (
   <div className={classes.root} style={{marginLeft:"20px"}}>
    <Paper elevation={3}>
      <MathJax.Provider>
		<div className='app' style={{margin:"20px"}}>
			{showScore ? (
				<Typography variant="h6" gutterBottom>You scored {score}out of {questions.length}</Typography>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<Typography variant="h6" gutterBottom>Question{questions.indexOf(questions[currentQuestion])+1}/{questions.length} </Typography>
						</div>
              <Typography variant="h6" gutterBottom><MathJax.Node formula={questions[currentQuestion].questionText}/></Typography>
					</div>
					<Typography variant="subtitle1" gutterBottom>
          {questions[currentQuestion].answerOptions.map((answerOption, index) => (
  	  	    <Button key={index} onClick={() => handleAnswerButtonClick(answerOption.isCorrect)} variant="contained" size="medium" color="primary" style={{margin:"10px"}}>
            <MathJax.Node formula={answerOption.answerText}/>
            </Button>
  	       ))}
					</Typography>
          <h1 style={{color:'red'}}>{err}</h1>
				</>
			)}
		</div>
      </MathJax.Provider>
    </Paper>
   </div>
	);
}

export default Quiz ;
