import React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import { Form, Button } from 'react-bootstrap';
export default function Login() {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required('Email required.')
      .email('Please enter your a valid email.'),
    password: yup
      .string()
      .required('Please Enter your password')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
      ),
  });
  return (
    <>
      <h1
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Augurs Signup
      </h1>
      <div
        style={{
          width: '100%',
          border: '2px solid red',
          padding: '10px',
          display: 'flex',
          flexDrection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Formik
          validationSchema={schema}
          onSubmit={(val) => {
            console.log(val);
            fetch(
              'https://express-simple-jfdzwa--3010.local.webcontainer.io/login',
              {
                method: 'POST',

                body: {
                  email: val.email,
                  password: val.password,
                },
              }
            )
              .then((response) => response.json())
              .then((json) => {
                if (json.status === 200) {
                  localStorage.setItem('token', json.token);
                  localStorage.setItem('firstname', val.token);
                  localStorage.setItem('lastname', json.token);
                  localStorage.setItem('email', json.token);
                }
              });
          }}
          initialValues={{
            email: '',
            password: '',
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isValid={touched.email && !errors.email}
                  type="email"
                  placeholder="Enter email"
                />
                <p>{errors.email}</p>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  isValid={touched.password && !errors.password}
                  type="password"
                  placeholder="Password"
                />
                <p>{errors.password}</p>
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
