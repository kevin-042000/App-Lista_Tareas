import React from 'react';
import { useHistory } from 'react-router-dom'
import Button from '@mui/joy/Button';
import Copyright from '../jsx secundario/Copyright';

const Boton = () => {

    const history = useHistory();

    const logout = () => {
        history.push('/login')
    }

    return (
        <div>
        <Button variant="contained" onClick={logout} >Logout</Button>;
        <Copyright></Copyright>            
        </div>
    );
}

export default Boton;
