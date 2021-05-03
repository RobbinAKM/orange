import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';


const MsgBoard2=()=>{
  return (
   <React.Fragment>
     <CssBaseline />
     <Container fixed>
          <h1>Free Education For Myanmar</h1>

          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
              optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
          </h3>
          <Button variant="contained" style={{backgroundColor:'#FF8C00' , margin:'25px'}}>Become a volunteer teacher</Button>
          <Button variant="contained" style={{backgroundColor:'#FF8C00' , margin:'25px'}}>For Parents</Button>
     </Container>
   </React.Fragment>
 );
};

export default MsgBoard2;
