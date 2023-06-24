import React, { useEffect, useState } from 'react';
import { Tarea } from '../../JS/tarea';
import { NIVELES } from '../../JS/niveles';
import ComponenteTarea from '../jsx secundario/Tarea'
import CargarTarea from '../Formularios/cargar_tarea';

const ListaTarea = () => {

    const Tarea1 = new Tarea('Registrar tus tareas', 'Debes cargar tus tareas pendientes', false, NIVELES.NORMAL);
   
    
    ///Estado de componente
    const [tareas, setTareas] = useState([Tarea1]);
    const [loading, setLoading] = useState(true);


    ///control del ciclo de vida
    useEffect(() => {
        console.log('Modificacion de tarea') 
        setLoading(false);
        return () => {
            console.log('La lista de tareas se va a desmontar')
        };
    }, [tareas]);

    /// funciones

    function completarTarea(tarea){
        console.log('Completa esta tarea:', tarea);
        const index = tareas.indexOf(tarea);
        const tempTareas = [...tareas];
        tempTareas[index].completada = !tempTareas[index].completada;
        setTareas(tempTareas);
    }

    function eliminarTarea(tarea){
        console.log('eliminaste esta tarea:', tarea);
        const index = tareas.indexOf(tarea);
        const tempTareas = [...tareas];
        tempTareas.splice(index,1);
        setTareas(tempTareas);
    }

    function agregarTareas(tarea){
        console.log('agregaste esta tarea:', tarea);
        const tempTareas = [...tareas];
        tempTareas.push(tarea);
        setTareas(tempTareas);
    }

    const Tabla = () => {
        return (
            <div className='table-responsive '>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>Titulo</th>
                            <th scope='col'>Descripcion</th>
                            <th scope='col'>Prioridad</th>
                            <th scope='col'>Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tareas.map((tarea, index) => {
                            return (
                                <ComponenteTarea
                                    key={index}
                                    prop={tarea}
                                    propCompletar={completarTarea} 
                                    propEliminar={eliminarTarea}
                                /> 
                            );
                        })}                          
                    </tbody>
                </table>
            </div>
        )
    }

    let tablaTareas;

    if(tareas.length > 0){
        tablaTareas = <Tabla></Tabla>
    } else {
        tablaTareas = (
            <div>
                <h3>No hay tareas por el momento</h3>
                <h4>Puedes crear una tarea</h4>
            </div>
        );
    }

    return (
        <div>
            <div className='col-12 contenedor-tarea-form'>
                <div className='card cardTareas'>
                    <div className='card-header p-3'>
                        <h5>Tus Tareas:</h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
                        {tablaTareas}
                    </div>
                    <div className='card-footer p-3'></div>
                </div>
                <CargarTarea
                    propAgregar={agregarTareas}
                    propLenght={tareas.length}
                />
            </div>
        </div>
    );
};

export default ListaTarea;


