import React, { useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import DirectionsRunRoundedIcon from '@material-ui/icons/DirectionsRunRounded';

import '../App.css';


function AdminForm(props) {

    const [url, setUrl] = useState(""); 
    const [encodedGFurl, setEncodedGFurl] = useState("");
    const [copied, setCopied] = useState(false);

    const createGFurl = (e) => {
      const encodedURL = encodeURIComponent(url);
      return("https://laurent-game.herokuapp.com/redirect/"+encodedURL);
    }

    return (
      <div className = "card">
        <div className= "icon-round">
          <DirectionsRunRoundedIcon className = "icon"/>
        </div>

        <Typography className = "text-header" variant="h6" gutterBottom>
          Créer un nouvel url de redirection Google Form
        </Typography>

        <Card >
          <CardContent >
            <Typography className= "" color="textSecondary" gutterBottom>
              Merci de remplir le formulaire ci-dessous
            </Typography>
    
            <form className = "" noValidate autoComplete="off">
              <TextField 
                id="standard-basic" 
                className = "champ-text" 
                label="Url Google Form" 
                variant="standard" 
                value={url}
                onChange={(e) => setUrl(e.target.value) }
              />
              
              <div className = "encodedUrl">
              <Typography className = "encodedUrl" color="textSecondary" variant="h6" gutterBottom>
                { createGFurl() }
              </Typography>
              </div>

              <CardActions>
                <CopyToClipboard text={ createGFurl() }
                  onCopy={() => setCopied(true)}>
                  <Fab variant="extended" color="primary">
                    <SendIcon className = "" />
                      Copier l'url
                  </Fab>
                </CopyToClipboard>
                {copied ? <span style={{color: '#303f9f'}}>Copier!</span> : null}
              </CardActions>
             
             
              
            </form>
          </CardContent>  
        </Card>
      </div>
    );
  }

  export default AdminForm;