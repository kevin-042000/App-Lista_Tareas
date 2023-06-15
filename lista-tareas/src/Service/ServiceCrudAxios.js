import axios from 'axios';

// utilizando login de reqres (api)

export const login = (email, password)=> {

    let body = {
        email: email,
        password: password
    }

    //retorna una respuesta con una promesa
    return axios.post('https://reqres.in/api/login', body)
}

// obtiene todos los usuarios

export const getAllUser = () => {
    return axios.get('https://reqres.in/api/users')
}

//obtiene todas las paginas de usuarios

export const getAllPageUsers = (page) => {
    return axios.get(`https://reqres.in/api/users?page=${page}`)
}

// obtener usuario por ID

export const getUserByID = (id) => {
    return axios.get(`https://reqres.in/api/users/${id}`)
}