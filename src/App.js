import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import './App.css';

function App() {
  const [photos, setPhotos] = useState([])
  const open = url => window.open(url)
  console.log(photos)
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
          setPhotos(data.results)
        }}
        >
          <Form className="form">
            <h1 className="titulo">Buscar imagen:</h1>
            <Field type="text" name="search" className="buscador"/>
          </Form>
        </Formik>
      </header>
      <div>
        <div>
          {photos.map(photo =>
            <div key={photo.id} onClick={() => open(photo.links.html)}>
             <img src={photo.urls.regular}/>
             <p>{[photo.description, photo.alt_description].join(" - ")}</p> 
            </div>)}
        </div>
      </div>
    </div>
  );
}
 
export default App;
