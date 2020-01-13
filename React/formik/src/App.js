import React from 'react';
import { Formik, Form, Field } from 'formik';

const App = () => {
  return (
    <Formik
      initialValues={{ name:'', password:'' }}
      onSubmit={( values, tools ) => {
        console.log(values, tools)
        tools.resetForm()
      }}>
      {props => {
        return (
          <Form>
            <Field name='name' type='text' placeholder='Name'></Field>
            <Field name='password' type='password' placeholder='Password'></Field>
            <input type='submit' />
          </Form>
        )
      }}
      </Formik>
  );
}

export default App;
