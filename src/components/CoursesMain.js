import React from 'react';
import Courses from './Courses'
import Footer from './Footer';
import Grid from '@material-ui/core/Grid';


const CoursesMain=({state})=>{
  return(
    <>
    <Grid container spacing={1}>
      <Grid container item xs={12} spacing={3}>
    {state.map((value,index)=>{
      return<div key={index}><Courses
       name={value.course_name}
       img={value.course_img}
       des={value.course_description}
       route={value.course_route}

       /></div>
    })}
    </Grid>
      </Grid>
      <Footer/>
    </>
  )

};

export default CoursesMain;
