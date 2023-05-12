import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {NIVELES} from '../../JS/niveles'
import {Tarea} from '../../JS/tarea'


const CargarTarea = ({propAgregar}) => {

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
        <form onSubmit={agregarTarea} className='d-flex justify-content-center align-items-center mb-4'>
          <div className='form-outline flex-fill'>
             <input ref={nombreRef} id='inputNombre' type='text' className='form-control form-control-lg' required autoFocus placeholder='Nombre de Tarea' />
             <input ref={descripcionRef} id='inputDescripcion' type='text' className='form-control form-control-lg' required placeholder='Descripcion' />
             <label htmlFor='seleccionarNivel' className='sr-only'>Prioridad</label>
             <select ref={nivelRef} defaultValue={NIVELES.NORMAL} id='seleccionarNivel'>

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
          </div>

          <button type='submit' className='btn btn-success btn-lg ms-2'>Agregar</button>
            
        </form>
    );
}


CargarTarea.propTypes = {
    propAgregar: PropTypes.func.isRequired,

};


export default CargarTarea;

