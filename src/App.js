import React, {useState} from 'react';
import { BrowserRouter as Router, Route, useParams} from "react-router-dom";
import './App.css';
import Form from './components/form';
import Admin from './components/admin';

import Cookie from './components/cookie';

// https://docs.google.com/forms/d/e/1FAIpQLSdhiwxLPVi_ppt84kvQwv5cNM1PbwT_o_EC8mqGZs6Z4iRx4g/viewform?usp=pp_url&entry.433624650=

function Redirection() {
  let { urlForm } = useParams();
  console.log(urlForm)
  const decodedUrl = decodeURIComponent(urlForm)
  window.location.href = decodedUrl + Cookie.getCookie();
  return null; 
}

function App() {

  const[registered, setRegistered] = useState(false);

  return (
    <Router>

      <Route path='/laurent-game/admin'  >
        <Admin />
      </Route>

      <Route path='/redirect/:urlForm' component={
        Cookie.getCookie() === null ? () => <Form registered={registered} register={ () => setRegistered(true) } /> : Redirection
      } />
        
    </Router>
  ) 
}

export default App;