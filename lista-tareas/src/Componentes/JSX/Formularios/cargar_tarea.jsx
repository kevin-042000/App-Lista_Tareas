import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {NIVELES} from '../../JS/niveles'
import {Tarea} from '../../JS/tarea'


const CargarTarea = ({propAgregar, propLenght}) => {

    const nombreRef = useRef('');
    const descripcionRef = useRef('');
    const nivelRef = useRef('NIVELES.NORMAL');


    function agregarTarea(e){
        e.preventDefault();
        const nuevaTarea= new Tarea (
            nombreRef.current.value,
            descripcionRef.current.value,
            false,
            nivelRef.current.value
        )

        propAgregar(nuevaTarea);
    }

    return (
      
        <div className='card'>
           <div className='card-header p-3'>
           <h5>
             Ingresa tus tareas:
           </h5>
           </div>

           <div className='card-body' data-mdb-perfect-scrollbar='true' style={{position: 'relative', height: '400px'}}>

           <form onSubmit={agregarTarea} >
          <div >
            
             <input ref={nombreRef} id='inputNombre' type='text' required autoFocus placeholder='Nombre de Tarea' />
             <input ref={descripcionRef} id='inputDescripcion' type='text' placeholder='Descripcion'/>
             {/* <label htmlFor='seleccionarNivel' className='sr-only'>Prioridad</label> */}
             <select ref={nivelRef} defaultValue={NIVELES.NORMAL}  id='seleccionarNivel'>

              <option value={NIVELES.NORMAL}>
                    Normal
              </option>
              <option value={NIVELES.URGENTE}>
                    Urgente
              </option>
              <option value={NIVELES.BLOQUIANTE}>
                    Bloquiante
              </option>
            </select>
            <button type='submit'>
               {propLenght > 0 ? 'Agregar nueva tarea' : 'Crear tu primer tarea'}
            </button>
          </div>
     
        </form>

           </div>

           <div className='card-footer p-3'>

              </div>


        </div>
    

       
    );
}


CargarTarea.propTypes = {
    propAgregar: PropTypes.func.isRequired,
    propLenght: PropTypes.number.isRequired,

};


export default CargarTarea;

