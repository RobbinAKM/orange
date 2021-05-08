import React from 'react';
import RenderChildCourse from './RenderChildCourse';
import {useParams} from "react-router-dom";
import BufferIcon from "./BufferIcon";

const ChildCourse=({state})=>{
  let { id } = useParams();
const resultCourses=state.find(l=>l.course_route === id);




  if (resultCourses) {
    return resultCourses.lectures.map((value,index)=>{
      return (
        <RenderChildCourse
        key={index}
        name={value.lecture_name}
        video_array={value.lecture_videos}
        lecture_name_array={value.lecture_titles}
        quizzes={value.questions}
        />
      )
    })
}


  return (
   <div >
    <BufferIcon/>
  </div>
  )
};

export default ChildCourse
