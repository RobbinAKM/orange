import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import {useLocation} from "react-router-dom";


const Breadcrumb=()=>{
     let location = useLocation();
     var home =['home']
     var bc= location.pathname.replace('/','').split('/');
     var bcArray=home.concat(bc)
  return (
    <Breadcrumbs aria-label="breadcrumb" style={{margin:'20px'}}>
      <Typography component={'span'}>
      {bcArray.map(dir=>dir.length>0?<Chip key={Math.random() * 10} color="primary" label={dir}/>:null)}
      </Typography>
    </Breadcrumbs>
  );
};


export default Breadcrumb;
