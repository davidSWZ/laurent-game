import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import DirectionsRunRoundedIcon from '@material-ui/icons/DirectionsRunRounded';
import Typography from '@material-ui/core/Typography';

function Registered() {
    return(
        <div className = "card">
             <div className= "icon-round">
                <DirectionsRunRoundedIcon className = "icon"/>
            </div>
            <Card className= "valide-card">
            <CardContent>
                <Typography variant="h3" gutterBottom>
                  Vous êtes bien inscrit. Merci de rescanner le QR code
                </Typography>
                <Typography variant="h3" gutterBottom>
                Bon parcours!
                </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Registered;