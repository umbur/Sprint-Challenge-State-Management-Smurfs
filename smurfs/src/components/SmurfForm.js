import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import axios from 'axios';

const SmurfForm = ({ errors, touched, values, handleSubmit, status }) => {
    const [smurfs, setSmurfs] = useState([]);
    useEffect(() => {
        if (status) {
          setSmurfs([...smurfs, status]);
        }
      }, [status]);
    return (
      <div>
        <h1>Smurf Form</h1>
        <Form>
          <Field type="text" name="name" placeholder="Smurf Name" />
          <Field type="text" name="age" placeholder="Smurf Age" />
          <Field type="text" name="height" placeholder="Smurf Height" />
          <button type="submit">Submit!</button>
        </Form>
      </div>

     
    );
  };

  const FormikSmurfForm = withFormik({
    mapPropsToValues({ name, age, height }) {
      return {
        name: name || '',
        age: age || '',
        height: height || '',
      };
    },

  
    handleSubmit(values, { setStatus }) {
        //console.log('values:', values)
        axios
          .post('http://localhost:3333/smurfs', values)
          .then(res => {
            setStatus(res.data);
            console.log(res.data)
          })
          .catch(err => console.log(err.response));
      }
  })(SmurfForm);


export default FormikSmurfForm;
