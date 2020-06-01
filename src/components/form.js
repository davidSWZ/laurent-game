import React from 'react';
import SimpleCard from './simpleCard';
import { BrowserRouter as Redirect} from "react-router-dom";

function Form(props) {
  
  return (
    props.registered === false ? 
      <div className="App">
        <div className = "header"></div> 
        <SimpleCard register = { props.register } />
      </div>
      : 
      <Redirect to={props.location.pathname} />
  ) 
}
export default Form;