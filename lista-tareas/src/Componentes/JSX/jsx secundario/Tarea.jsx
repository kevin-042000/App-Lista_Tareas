import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Tarea } from '../../JS/tarea';
import { NIVELES } from '../../JS/niveles';


const ComponenteTarea = ({prop}) => {

    useEffect(() => {
        console.log('Tarea creada')
        return () => {
            console.log(`Tarea: ${prop.nombre} se a desmontado`)
        };
    }, [prop]);


    function nivel_de_tarea(){
        switch (prop.nivel){
            case NIVELES.NORMAL:
                return(
                    <h6 className='mb-0'>
                    <span className='badge bg-primary'>
                        {prop.nivel}
                    </span>
                    </h6>)

            case NIVELES.URGENTE:
                return(
                <h6 className='mb-0'>
                <span className='badge bg-warning'>
                {prop.nivel}
                </span>
                 </h6>
                 )

                 case NIVELES.BLOQUIANTE:
                    return(
                        <h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            {prop.nivel}
                        </span>
                        </h6>)

                                default:
                                    break;
                        }
                    }

    function icon_de_tarea_completada(){
        if(prop.completada){
            return (<i className='bi-toggle-on' style={{color: 'green'}}></i>)
        }else {
            return  <i className='bi-toggle-off' style={{color:'grey'}}></i>
        }
    }
    







    return (

        <tr  className='fw-normal'>
          <th>
            <span className='ms-2'>{prop.nombre}</span>
          </th>
          <td className='align-middle'>
             <span>{prop.descripcion}</span>
          </td>
          <td className='align-middle'>
             {nivel_de_tarea()}
          </td>
          <td className='align-middle'>
            {icon_de_tarea_completada ()}
            <i className='bi-trash' style={{color: 'red'}}></i>
          </td>

        </tr>


    );
};


ComponenteTarea.propTypes = {
    prop: PropTypes.instanceOf(Tarea)

};


export default ComponenteTarea;
