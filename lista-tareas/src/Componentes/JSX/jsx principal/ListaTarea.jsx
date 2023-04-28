import React, { useEffect, useState } from 'react';
import { Tarea } from '../../JS/tarea';
import { NIVELES } from '../../JS/niveles';
import ComponenteTarea from '../jsx secundario/Tarea'

const ListaTarea = () => {

    const Tarea1 = new Tarea('primera', 'jajajaj', true, NIVELES.NORMAL)
    const Tarea2 = new Tarea('segunda', 'kakak', false, NIVELES.URGENTE)
    const Tarea3 = new Tarea('tercera', 'jaeknenaj', true, NIVELES.BLOQUIANTE)
    
    ///Estado de componente
    const [tareas, setTareas] = useState([Tarea1, Tarea2, Tarea3]);
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

        <div className='col-12'>
           <div className='card'>
              <div className='card-header p-3'>
              <h5>
                Tus Tareas:
              </h5>
              </div>

              <div className='card-body' data-mdb-perfect-scrollbar='true' style={{position: 'relative', height: '400px'}}>

              <table>
                <thead>
                    <tr>
                    <th scope='col'>Titulo</th>
                    <th scope='col'>Descripcion</th>
                    <th scope='col'>Prioridad</th>
                    <th scope='col'>Accion</th>
                    </tr>
                </thead>
                <tbody>

                {tareas.map((tarea, index) =>{
                    return (
                        <ComponenteTarea
                         key={index} prop={tarea}>
                        </ComponenteTarea> 

                    )
                })}


                                   
                </tbody>
              </table>

              </div>


           </div>
        </div>

       
            
        </div>
    );
};





export default ListaTarea;
