import React, { useEffect, useState } from 'react';
import { Tarea } from '../../JS/tarea';
import { NIVELES } from '../../JS/niveles';
import ComponenteTarea from '../jsx secundario/Tarea'

const ListaTarea = () => {

    const TareaDefecto = new Tarea('primera', 'jajajaj', false, NIVELES.NORMAL)
    
    ///Estado de componente
    const [tareas, setTareas] = useState([TareaDefecto]);
    const [loading, setLoading] = useState(true);


    ///control del ciclo de vida
    useEffect(() => {
        console.log('Modificacion de tarea')
        setLoading(false);
        return () => {
            console.log('La lista de tareas se va a desmontar')
        };
    }, [tareas]);

    

    const changeCompleted = (id) => {
        console.log('TODO: Cambiar estado de una tarea')
    }


    return (
        <div>

        <div>
            <h2>La Tarea:</h2>
        </div>

        <ComponenteTarea prop={TareaDefecto}></ComponenteTarea>
            
        </div>
    );
};





export default ListaTarea;
