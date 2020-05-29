import Cookies from 'universal-cookie';

const cookies = new Cookies();

function setCookie(firstName, name, register) { 
    if(firstName !== "" && name !== "") {
        cookies.set('firstname', firstName, { path: '/', sameSite: true });
        cookies.set('name', name, { path: '/', sameSite: true });
        register();
    }
}

function getCookie() {
    if(cookies.get('firstname') && cookies.get('name'))  
    {
        const name = cookies.get('firstname') + " " + cookies.get('name')
        return name
    } else return null
}


export default {setCookie, getCookie};

