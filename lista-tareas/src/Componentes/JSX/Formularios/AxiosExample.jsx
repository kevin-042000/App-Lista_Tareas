import React from 'react';
import { login,  getAllUser, getAllPageUsers, getUserByID, createUser, updateUserByID, deleteUserByID} from '../../../Service/ServiceCrudAxios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const AxiosExample = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const loginSchema = Yup.object().shape({
    email: Yup.string().email('Formato de email inválido').required('Email es obligatorio'),
    password: Yup.string().required('Password es obligatorio'),
  });

 // No es necesario importar 'sessionStorage'

const autHUser = (values) => {
    login(values.email, values.password)
      .then((response) => {
        if (response.data.token) {
          alert(JSON.stringify(response.data.token));
          window.sessionStorage.setItem('token', response.data.token); // Utilizar window.sessionStorage
        } else {
          throw new Error('Inicio de sesión fallido');
        }
      })
      .catch((error) => {
        alert(`Error al ejecutar el método POST: ${error}`);
        window.sessionStorage.removeItem('token'); // Utilizar window.sessionStorage
      })
      .finally(() => console.log('Inicio de sesión finalizado'));
  };
  

  //crud example
  const obtainAllUsers = () => {
    getAllUser()
    .then((response) => {
        alert(JSON.stringify(response.data.data))
    })
    .catch((error) => alert(`el error al traer a todos los usuarios es ${error}`))
  }


  const obtainAllPageUsers = (page) => {
    getAllPageUsers(page)
    .then((response) => {
        alert(JSON.stringify(response.data.data))
    })
    .catch((error) => alert(`el error al traer a todos los usuarios es ${error}`))
  }

  const obtainUserByID = (id) => {
    getUserByID(id)
    .then((response) => {
        alert(JSON.stringify(response.data.data))
    })
    .catch((error) => alert(`el error al traer a todos los usuarios es ${error}`))
  }

  const createNewUser =(name, job) => {
    createUser(name, job)
    .then((response) => {
      if(response.data && response.status === 201){
        alert(JSON.stringify(response.data))
      }else {
        throw new Error('user not created')
      }
    })
    .catch((error) => alert(`el error es ${error}`))
  }

  const updateUser =(id, name, job) => {
    updateUserByID(id, name, job)
    .then((response) => {
      if(response.data && response.status === 200){
        alert(JSON.stringify(response.data))
      }else {
        throw new Error('user not found & no update done')
      }
    })
    .catch((error) => alert(`el error es ${error}`))
  }

  const deleteUser =(id) => {
    deleteUserByID(id)
    .then((response) => {
      if(response.status === 204){
        alert(`el usuario con el ID: ${id} se elimino`)
      }else {
        throw new Error('no se pudo eliminar usuario')
      }
    })
    .catch((error) => alert(`el error es ${error}`))
  }

  return (
    <div>
      <h4>Login Formik</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={autHUser}
      >
        {({ values, touched, errors, isSubmitting }) => (
          <Form>
            <label htmlFor='email'>Email</label>
            <Field
              id='email'
              type='email'
              name='email'
              placeholder='example@email.com'
            />
            {errors.email && touched.email && (
              <ErrorMessage name='email' component='div' />
            )}

            <label htmlFor='password'>Password</label>
            <Field
              id='password'
              name='password'
              placeholder='password'
              type='password'
            />
            {errors.password && touched.password && (
              <ErrorMessage name='password' component='div' />
            )}

            <button type='submit'>Login</button>
            {isSubmitting && <p>Se han enviado tus datos...</p>}
          </Form>
        )}
      </Formik>

      <div>
        <button onClick={obtainAllUsers}>
        traer todos los usuarios
        </button>

        <button onClick={() => obtainAllPageUsers (1)}>
         utraer los usuarios (page 1) 
        </button>

        <button onClick={() => obtainUserByID(1)}>
        traer usuario por ID
        </button>

        <button onClick={() => createNewUser('morpheus', 'leader')}>
        crear usuario
        </button>

        <button onClick={() => updateUser('1, morpheus', 'leader')}>
       actualizar usuario
        </button>

        <button onClick={() => deleteUser('1,morpheus', 'leader')}>
        eliminar usuario
        </button>

      </div>

    </div>
  );
};

export default AxiosExample;

