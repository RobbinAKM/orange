import React from 'react';
import Header from './Header'
import ChildCourse from './ChildCourse';
import Home from './Home';
import CoursesMain from './CoursesMain';
import Breadcrumb from './Breadcrumb';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



const App = ()=>{
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
        <CoursesMain/>
      </Route>
      <Route path="/courses/:id">
       <ChildCourse/>
     </Route>
      </Switch>
    </div>
    </Router>
    )
}

export default App;
