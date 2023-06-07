import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Usuario } from '../../JS/usuario';
import { ROLES } from '../../JS/rol';

const LoginFormik = () => {
    // let usuario = new Usuario();

    const valoresIniciales = {

        email: '',
        password: '',
    }

    const loginSchema = Yup.object().shape(
        {
           
            email: Yup.string()
            .email('Formato de email invalido')
            .required('Email es obligatorio'),

            password: Yup.string()
            .required('Password es obligatorio'),

            

        }
    )




    return (
        <div>
        <h4>Login Formik</h4>
        <Formik
        initialValues= {valoresIniciales}

        validationSchema = {loginSchema}

        onSubmit = {async (values) => {
            await new Promise ((r) => setTimeout(r, 1000));
            alert(JSON.stringify(values, null, 2))
        }} 
        >

        {({values,
           touched,
           errors,
           isSubmitting,
           handleChange,
           handleBlur }) => (
            <form>

            <label htmlFor='email'>Email</label>
            <Field id="email" type="email" name="email" placeholder="example@email.com" />

            {
                errors.email && touched.email && (
                <ErrorMessage name='email' component='div'></ErrorMessage>
           )}

           <label htmlFor='password' >Password</label>
           <Field id="password"  name="password"  placeholder="password"  type="password" />
           {
            errors.password && touched.password && (
                <ErrorMessage name='password' component='div'></ErrorMessage>
           )}


           <button type='submit'>Login</button>
           {isSubmitting ? (<p>Se han enviado tus datos...</p>) : null}




            </form>
           )}

        </Formik>
            
        </div>
    );
}

export default LoginFormik;
