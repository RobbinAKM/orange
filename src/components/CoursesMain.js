import React,{useEffect,useContext} from 'react';
import Courses from './Courses'
import {Context as CourseContext} from '../context/courseContext';
import Footer from './Footer';
import Grid from '@material-ui/core/Grid';

const CoursesMain=()=>{
  const {state,fetchCourses} = useContext(CourseContext);

  useEffect(()=>{
    fetchCourses();
  },[]); // eslint-disable-line react-hooks/exhaustive-deps

  return(
    <>
    <Grid container spacing={1}>
      <Grid container item xs={12} spacing={3}>
    {state.map((value,index)=>{
      return<div key={index}><Courses
       name={value.course_name}
       img={value.course_img}
       des={value.course_description}
       /></div>
    })}
    </Grid>
      </Grid>
      <Footer/>
    </>
  )
};

export default CoursesMain;
