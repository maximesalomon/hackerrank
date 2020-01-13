import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";

const validate = ({ username, password }) => {
  const errors = {};
  if (!username) {
    errors.username = 'Please enter an username';
  }
  if (!username) {
    errors.password = 'Please enter a password';
  }
  return errors;
};

const App = () => {
  return (
    <Formik
      validate={validate}
      initialValues={{ username: '', password: '' }}
      onSubmit={(values, tools) => {
        console.log(values, tools);
        tools.resetForm();
      }}
    >
      {props => {
        return (
          <Form>
            <Field name='username' type='text' placeholder='Name'></Field>
            <ErrorMessage name='username' component='div'/>
            <Field
              name='password'
              type='password'
              placeholder='Password'
            ></Field>
            <ErrorMessage name='password' component='div' />
            <input type='submit' />
          </Form>
        );
      }}
    </Formik>
  );
};

export default App;
