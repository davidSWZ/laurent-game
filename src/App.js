import React from 'react';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import './App.css';
import Form from './components/form';
import Cookie from './components/cookie';

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
          <div>
            <Route path='/etape1' component={() =>
            window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdhiwxLPVi_ppt84kvQwv5cNM1PbwT_o_EC8mqGZs6Z4iRx4g/viewform?usp=pp_url&entry.433624650=' + Cookie.getCookie() 
            } />

            <Route path='/etape2' component={() =>
              window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdhiwxLPVi_ppt84kvQwv5cNM1PbwT_o_EC8mqGZs6Z4iRx4g/viewform?usp=pp_url&entry.433624650=' + Cookie.getCookie() 
            } />

            <Route path='/etape3' component={() =>
              window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdhiwxLPVi_ppt84kvQwv5cNM1PbwT_o_EC8mqGZs6Z4iRx4g/viewform?usp=pp_url&entry.433624650=' + Cookie.getCookie() 
            } />

            <Route path='/etape4' component={() =>
              window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdhiwxLPVi_ppt84kvQwv5cNM1PbwT_o_EC8mqGZs6Z4iRx4g/viewform?usp=pp_url&entry.433624650=' + Cookie.getCookie() 
            } />

            <Route path='/etape5' component={() =>
              window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdhiwxLPVi_ppt84kvQwv5cNM1PbwT_o_EC8mqGZs6Z4iRx4g/viewform?usp=pp_url&entry.433624650=' + Cookie.getCookie() 
            } />

            <Route path='/etape6' component={() =>
              window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdhiwxLPVi_ppt84kvQwv5cNM1PbwT_o_EC8mqGZs6Z4iRx4g/viewform?usp=pp_url&entry.433624650=' + Cookie.getCookie() 
            } />

<           Route path='/etape7' component={() =>
              window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdhiwxLPVi_ppt84kvQwv5cNM1PbwT_o_EC8mqGZs6Z4iRx4g/viewform?usp=pp_url&entry.433624650=' + Cookie.getCookie() 
            } />
          </div> 
        )
      }

    </Router>
  ) 
}

export default App;
