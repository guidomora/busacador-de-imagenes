import { Field, Form, Formik } from 'formik';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <Formik
        initialValues={{search: ""}}
        onSubmit={async values => {
          console.log(values)
        }}
        >
          <Form>
            <h1>Buscar imagen:</h1>
            <Field type="text" name="search" />
          </Form>
        </Formik>
      </header>
    </div>
  );
}

export default App;
