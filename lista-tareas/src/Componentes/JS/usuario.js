import { ROLES } from "./rol";

export class Usuario {
    usuario = '';
    email = '';
    password = '';
    rol = ROLES.USUARIO;


    constructor(usuario, email, password, rol){
        this.usuario = usuario;
        this.email = email;
        this.password = password;
        this.rol = rol;

    }
}