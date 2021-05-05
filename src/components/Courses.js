import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';



import {Link} from "react-router-dom";


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const Courses =({name,img,des,route})=>{
    const classes = useStyles();
    const path ='/courses/'+route

  return(
    <div>
  <Link style={{ textDecoration: 'none', color: 'inherit' }} to={path}>
    <Card className={classes.root} style={{margin:'30px'}}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={img}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {des}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Typography style={{ textDecoration: 'none', color: 'blue' ,marginLeft:"10px" }}>
              Start Learning
            </Typography>
          </CardActions>
        </Card>
      </Link>
    </div>
  )
};

export default Courses;
