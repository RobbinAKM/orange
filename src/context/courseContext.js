import createDataContext from './createDataContext';
import fetch from '../api/fetch';


const CourseReducer =(state,action)=>{
  switch (action.type) {
    case 'fetch_courses':
      return action.payload;
    default:
      return state;
  }
}
const fetchCourses=dispatch=>async ()=>{
  const response= await fetch.get('courses');
  dispatch({type:'fetch_courses',payload:response.data});
}


export const{Context,Provider}=createDataContext(
  CourseReducer,
  {fetchCourses},
  []
)
