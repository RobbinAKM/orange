import React,{useEffect,useContext} from 'react';
import Header from './Header'
import ChildCourse from './ChildCourse';
import Home from './Home';
import CoursesMain from './CoursesMain';
import Breadcrumb from './Breadcrumb';
import {Provider as CourseProvider} from '../context/courseContext';
import {Context as CourseContext} from '../context/courseContext';



import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


const Main = ()=>{
  const {state,fetchCourses} = useContext(CourseContext);

  useEffect(()=>{
    fetchCourses();
  },[]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Router>
    <Header/>
    <Breadcrumb/>
      <div>
      <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/courses">
        <CoursesMain state={state}/>
      </Route>
      <Route path="/courses/:id">
       <ChildCourse state={state} />
     </Route>
      </Switch>
    </div>
    </Router>
    )
}

const App=()=>{
  return(
  <CourseProvider>
    <Main/>
  </CourseProvider>
  )
};

export default App;
