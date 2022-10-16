import React from 'react';
import { Field, Form, Formik } from 'formik';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <Formik
        initialValues={{search: ""}}
        onSubmit={async values => {
          const response = await fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`, {
            headers: {
              "Authorization" : "Client-ID 4VdJyEXw83Pf_coJSI8UbppQgO_sNWnpZAhy5EjAGnU"
            }
          })
          const data = await response.json()
          console.log(data)
        }}
        >
          <Form className="form">
            <h1 className="titulo">Buscar imagen:</h1>
            <Field type="text" name="search" className="buscador"/>
          </Form>
        </Formik>
      </header>
    </div>
  );
}
 
export default App;
