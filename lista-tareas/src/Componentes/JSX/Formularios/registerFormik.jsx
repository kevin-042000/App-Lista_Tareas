import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Usuario } from '../../JS/usuario';
import { ROLES } from '../../JS/rol';

const RegisterFormik = () => {
    let usuario = new Usuario();

    const valoresIniciales = {
        usuario: '',
        email: '',
        password: '',
        confirmacion: '',
        rol: ROLES.USUARIO,
    }

    const registroSchema = Yup.object().shape(
        {
            usuario: Yup.string()
            .min(6, 'El nombre de usuario es muy corto')
            .max(15, 'El nombre de usuario es muy largo')
            .required('Usuario es obligatorio'),

            email: Yup.string()
            .email('Formato de email invalido')
            .required('Email es obligatorio'),

            rol: Yup.string()
            .oneOf([ROLES.ADMINISTRADOR, ROLES.ADMINISTRADOR], 'Debe elegir un rol')
            .required('El rol es obligatorio'),

            password: Yup.string()
            .min(8, 'El password es muy corto')
            .required('Password es obligatorio'),

            confirmacion: Yup.string()
            .when("password", {
                is: value => (value && value.length > 0 ? true : false),
                then: Yup.string().oneOf(
                    [Yup.ref("password")],
                    '¡Las Passwords no coinciden!'
                )
            }).required('Debes confirmar el password')

        }
    )




    return (
        <div>
        <h4>Registro Formik</h4>
        <Formik
        initialValues= {valoresIniciales}

        validationSchema = {registroSchema}

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
            <label htmlFor='username'>Nombre de usuario</label>
            <Field id="username" type="text" name="username" placeholder="Nombre de usuario" />
            { 
                errors.usuario && touched.usuario && (
                <ErrorMessage name='username' component='div'></ErrorMessage>
            )}

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

           <button type='submit'>Registrarse</button>
           {isSubmitting ? (<p>Se han enviado tus datos...</p>) : null}


           




            </form>
           )}

        </Formik>
            
        </div>
    );
}

export default RegisterFormik;
