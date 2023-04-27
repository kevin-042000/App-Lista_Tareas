import React, {useState} from 'react';

const RegisterForm = () => {

    
    const datos_iniciales = [
        {
            usuario: '',
            nombre:'',
            email: '',
            password: '',
        }
    ];

    const [datos, setDatos] = useState(datos_iniciales);


    return (
        <div>
            
        </div>
    );
}

export default RegisterForm;
