import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green, blue, red, yellow } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';

const GreenRadio = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);
  
const BlueRadio = withStyles({
root: {
    color: blue[400],
    '&$checked': {
    color: blue[600],
    },
},
checked: {},
})((props) => <Radio color="default" {...props} />);

const YellowRadio = withStyles({
root: {
    color: yellow[400],
    '&$checked': {
    color: yellow[600],
    },
},
checked: {},
})((props) => <Radio color="default" {...props} />);

const RedRadio = withStyles({
root: {
    color: red[400],
    '&$checked': {
    color: red[600],
    },
},
checked: {},
})((props) => <Radio color="default" {...props} />);

function RadioForm() {

    const [selectedValue, setSelectedValue] = React.useState('a');
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return(
        <div className= "champ-text">
            <FormLabel component="legend">Equipe</FormLabel>
            <RedRadio
              checked={selectedValue === 'rouge'}
              onChange={handleChange}
              value="rouge"
              name="equipe-rouge"
            />
            <YellowRadio
              checked={selectedValue === 'jaune'}
              onChange={handleChange}
              value="jaune"
              name="equipe-jaune"
            />
            <BlueRadio
              checked={selectedValue === 'bleu'}
              onChange={handleChange}
              value="bleu"
              name="equipe-bleu"
            />
            <GreenRadio
              checked={selectedValue === 'vert'}
              onChange={handleChange}
              value="vert"
              name="equipe-verte"
            />
          </div>
    )
}

export default RadioForm;