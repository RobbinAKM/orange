import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width:"inherit",
    margin:"50px",
    border:"1px solid orange"
  },
});


const MsgBoard1=()=>{
   const classes = useStyles();

  return (
   <div>

     <CssBaseline />
     <Card className={classes.root}>
      <Button variant="contained" style={{border:"1px solid orange", margin:'25px'}}>START LEARNING</Button>
     <Container style={{display:"block"}}>
          <h1 style={{display:"inline",float:"left" }}>Free Education For Myanmar</h1>

          <h3 style={{float:"left"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          </h3>
          <div style={{float:"left"}}>
          <Button variant="contained" style={{backgroundColor:'#FF8C00' , margin:'25px'}}>Become a volunteer teacher</Button>
          <Button variant="contained" style={{backgroundColor:'white' , border:"1px solid orange",margin:'25px'}}>For Parents</Button>
          </div>

     </Container>
      </Card>
   </div>
 );
};

export default MsgBoard1;
