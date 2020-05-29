import React, {useState} from 'react';
import Cookie from './cookie';
import SimpleCard from './simpleCard';
import Registered from './registered';

function Form() {

  const[registered, setRegistered] = useState(false);

  return (
    Cookie.getCookie() === null && registered === false ? 
      <div className="App">
        <div className = "header"></div> 
        <SimpleCard register = { () => setRegistered(true) }/>
      </div>
      : 
      <div className="App">
        <div className = "header"></div> 
        <Registered />
      </div>
  ) 
}
export default Form;