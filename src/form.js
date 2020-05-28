import React, { useState } from 'react';
import Cookie from './cookie';

function Form() {

    const [firstName, setFirstName] = useState(""); 
    const [name, setName] = useState(""); 

    return (
        Cookie.getCookie() === null ? 
        <div className="App">
          <h1>le jeux de Laurent</h1>
          
          <p>Merci de remplir le formulaire ci-dessous</p>
    
          <form>
            <label>Rouge
              <input type="radio" name="equipe" value="rouge" />
            </label>
            <label>Bleu
              <input type="radio" name="equipe" value="bleu" />
            </label>
            <label>Vert
              <input type="radio" name="equipe" value="vert" />
            </label>
            <br />
    
            <label htmlFor="prenom">Prénom:</label>
            <br />
    
            <input 
              type="text" 
              name="prenom"
              id="prenom"
              placeholder="Prénom"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value) }
            />
            <br />
    
            <label htmlFor="nom">Nom:</label>
            <br />
    
            <input 
              type="text" 
              name="nom"
              id="nom"
              placeholder="Nom"
              value={name} 
              onChange={(e) => setName(e.target.value) }
            />
            <br />
    
            <button onClick={ () => Cookie.setCookie(firstName, name) }>OK</button>
          </form>
        </div>
        : <p>deja enregistré</p>
    ) 
}


export default Form;