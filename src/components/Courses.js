import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Footer from './Footer';

import {Link} from "react-router-dom";


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const Courses =()=>{
    const classes = useStyles();

  return(
    <div>
  <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/courses/child'>
    <Card className={classes.root} style={{margin:'30px'}}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="https://miro.medium.com/max/6000/1*L76A5gL6176UbMgn7q4Ybg.jpeg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Course Name
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              orem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link style={{ textDecoration: 'none', color: 'blue' ,marginLeft:"10px" }} to='/courses/child'>
              Start Learning
            </Link>
          </CardActions>
        </Card>
      </Link>
      <Footer/>
    </div>
  )
};

export default Courses;
