import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import img2 from '../../public/img2.gif'


const DCard1=()=>{

    return (
      <Card>
        <img alt="school-icon" src={img2} style={{width:"100px" ,float:"left"}}/>
        <div>
          <CardContent>
            <Typography component="h5" variant="h5">
              Quality Education Designed by Field Experts
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
            </Typography>
          </CardContent>
        </div>

      </Card>
    );
};

export default DCard1;
