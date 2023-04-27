import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Tarea } from '../../JS/tarea';


const ComponenteTarea = ({prop}) => {

    useEffect(() => {
        console.log('Tarea creada')
        return () => {
            console.log(`Tarea: ${prop.nombre} se a desmontado`)
        };
    }, [prop]);



    return (

        <tr  className='fw-normal'>
          <th>
            <span className='ms-2'>{prop.nombre}</span>
          </th>
          <td className='align-middle'>
             <span>{prop.descripcion}</span>
          </td>
          <td className='align-middle'>
             <span>{prop.nivel}</span>
          </td>
          <td className='align-middle'>
             <span>{prop.completada}</span>
          </td>

        </tr>



        // <div>

        // <h2>
        //   Nombre: { prop.nombre }
        // </h2>

        // <h3>
        //     Descripcion: { prop.descripcion }
        // </h3>

        // <h4>
        //     Nivel: { prop.nivel }
        // </h4>

        // <h5>
        //     La tarea esta: { prop.completada ? 'Completada' : 'Pendiente' }
        // </h5>
            


        // </div>
    );
};


ComponenteTarea.propTypes = {
    prop: PropTypes.instanceOf(Tarea)

};


export default ComponenteTarea;
