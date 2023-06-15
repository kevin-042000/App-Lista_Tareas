import React from 'react';
import { login,  getAllUser, getAllPageUsers, getUserByID} from '../../../Service/ServiceCrudAxios';
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

      </div>

    </div>
  );
};

export default AxiosExample;

