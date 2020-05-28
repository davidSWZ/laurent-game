import React from 'react';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import './App.css';
import Form from './form';
import Cookie from './cookie';

function App() {
  return (
    <Router>
      <Route path='/' >
        <Form />
      </Route>

      {
        Cookie.getCookie() === null ? (
          <Redirect to='/' />
        ) : (

          <Route path='/etape1' component={() => { 
            window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdhiwxLPVi_ppt84kvQwv5cNM1PbwT_o_EC8mqGZs6Z4iRx4g/viewform?usp=pp_url&entry.433624650=' + Cookie.getCookie() ;
            return null;
          }} />
        )
      }

{
        Cookie.getCookie() === null ? (
          <Redirect to='/' />
        ) : (
          <Route path='/etape2' component={() => { 
            window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdhiwxLPVi_ppt84kvQwv5cNM1PbwT_o_EC8mqGZs6Z4iRx4g/viewform?usp=pp_url&entry.433624650=david' ;
            return null;
          }} />
        )
      }

    </Router>
  ) 
}

export default App;
