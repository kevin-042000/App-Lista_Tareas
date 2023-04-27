import { NIVELES } from './niveles'

export class Tarea {
    nombre = '';
    descripcion = '';
    completada = false;
    nivel = NIVELES.NORMAL;

    constructor(nombre, descripcion, completada, nivel){

        this.nombre = nombre;
        this.descripcion = descripcion;
        this.completada = completada;
        this.nivel = nivel;

    }
}