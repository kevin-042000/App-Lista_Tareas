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

//crear usuario
export const createUser = (name, job)=> {

    let body = {
        name: name,
        job: job
    }

    //retorna una respuesta con una promesa
    return axios.post('https://reqres.in/api/users', body)
}

//update user
export const updateUserByID = (id, name, job)=> {

    let body = {
        name: name,
        job: job
    }

    //retorna una respuesta con una promesa
    return axios.put(`https://reqres.in/api/users/${id}`, body)
}

//delete user
export const deleteUserByID = (id) => {
    return axios.delete(`https://reqres.in/api/users/${id}`)
}
