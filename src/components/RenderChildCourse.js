import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import Quiz from './Quiz';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));


const ChildCourse =({name,video_array,lecture_name_array,quizzes})=>{

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
   const [open, setOpen] = React.useState(false);

   var things=video_array
   var array=lecture_name_array

   function getSteps() {
     return array;
   }

   function getStepContent(step) {

     switch (step) {
       case step:
         return `${things[step]}`;
       default:
         return 'Unknown step';
     }
   }

  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };



  return(
    <div>
    <Typography variant="h4" gutterBottom style={{marginLeft:"25px",marginTop:"20px"}}>
    {name}
      </Typography>
    <Stepper activeStep={activeStep} orientation="vertical">
       {steps.map((label, index) => (
         <Step key={label}>
           <StepLabel>{label}</StepLabel>
           <StepContent>
             <Typography>
             <iframe width="inherit" height="inherit" src={'https://www.youtube.com/embed/'+getStepContent(index)}
              title="YouTube video player" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen={true}></iframe>
             </Typography>
             <div className={classes.actionsContainer}>
               <div>
                 <Button
                   disabled={activeStep === 0}
                   onClick={handleBack}
                   className={classes.button}
                 >
                   Back
                 </Button>
                 <Button
                   variant="contained"
                   color="primary"
                   onClick={handleNext}
                   className={classes.button}
                 >
                   {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                 </Button>
               </div>
             </div>
           </StepContent>
         </Step>
       ))}
     </Stepper>
     {activeStep === steps.length && (
       <Paper square elevation={0} className={classes.resetContainer}>
         <Typography>All steps completed - you&apos;re finished</Typography>
         <Button variant="outlined" color="primary" size="large" onClick={handleReset} className={classes.button}>
           Reset
         </Button>
       </Paper>
     )}
       <Button variant="outlined" color="primary" size="large" onClick={handleClickOpen} style={{margin:"20px"}}>
            Open Quiz
       </Button>
       <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
          <Quiz quizzes={quizzes}/>
       </Dialog>
    </div>
  )
};

export default ChildCourse;
