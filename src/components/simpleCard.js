import React, { useState } from 'react';
import Cookie from './cookie';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import DirectionsRunRoundedIcon from '@material-ui/icons/DirectionsRunRounded';

import '../App.css';


function SimpleCard(props) {

    const [firstName, setFirstName] = useState(""); 
    const [name, setName] = useState(""); 

    return (
      <div className = "card">
        <div className= "icon-round">
          <DirectionsRunRoundedIcon className = "icon"/>
        </div>

        <Typography className = "text-header" variant="h6" gutterBottom>
          Formulaire d'inscription à la course d'orientation
        </Typography>

        <Card >
          <CardContent >
            <Typography className= "" color="textSecondary" gutterBottom>
              Merci de remplir le formulaire ci-dessous avant de commencer le parcours
            </Typography>
    
            <form className = "" noValidate autoComplete="off">
              <TextField 
                id="standard-basic" 
                className = "champ-text" 
                label="Prénom" 
                variant="standard" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value) }
              />
              <br />
              <TextField 
                id="standard-basic" 
                className = "champ-text" 
                label="Nom" 
                variant="standard" 
                value={name} 
                onChange={(e) => setName(e.target.value) }
              />
      
              <CardActions>
                <Fab variant="extended" color="primary" onClick={ () => Cookie.setCookie(firstName, name, props.register ) }>
                  <SendIcon className = "" />
                    Envoyer
                </Fab>
              </CardActions>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  export default SimpleCard;