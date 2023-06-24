import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Tarea } from '../../JS/tarea';
import { NIVELES } from '../../JS/niveles';


const ComponenteTarea = ({prop, propCompletar, propEliminar}) => {

    useEffect(() => {
        console.log('Tarea creada')
        return () => {
            console.log(`Tarea: ${prop.nombre} se a desmontado`)
        };
    }, [prop]);

/// estilos guardaods en const
const tarea_completada = {
    color: "gray",
    textDecoration: "line-through",

}

const tarea_incompleta = {
    fontWeight: "bold",
    color: "#E71828",

}

/// funciones
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
            return (<i onClick={() => propCompletar(prop)} className='bi-toggle-on accion-tarea' style={{color: 'green'}}></i>)
        }else {
            return  <i onClick={() => propCompletar(prop)} className='bi-toggle-off accion-tarea' style={{color:'grey'}}></i>
        }
    }




    return (

        <tr  className='fw-normal' style={prop.completada ? tarea_completada : tarea_incompleta }>
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
            <i className='bi-trash accion-tarea' style={{color: 'red'}}   onClick={()=>propEliminar(prop)} ></i>
          </td>

        </tr>


    );
};


ComponenteTarea.propTypes = {
    prop: PropTypes.instanceOf(Tarea).isRequired,
    propCompletar: PropTypes.func.isRequired,
    propEliminar: PropTypes.func.isRequired,

};


export default ComponenteTarea;
