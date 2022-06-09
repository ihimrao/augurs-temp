import React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import { Form, Button } from 'react-bootstrap';
export default function Register() {
  const token = localStorage.getItem('token');
  const schema = yup.object().shape({
    firstName: yup.string().required('Please enter your first name.'),
    lastName: yup.string().required('Please enter your last name.'),
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
    retypePassword: yup
      .string()
      .required('Please retype your password.')
      .oneOf([yup.ref('password')], 'Your passwords do not match.'),
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
          onSubmit={console.log}
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            retypePassword: '',
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
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  isValid={touched.firstName && !errors.firstName}
                  placeholder="Enter first name"
                />
                <p>{errors.firstName}</p>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  isValid={touched.lastName && !errors.lastName}
                  placeholder="Enter last name"
                />
                <p>{errors.lastName}</p>
              </Form.Group>

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

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm password</Form.Label>
                <Form.Control
                  type="password"
                  name="retypePassword"
                  value={values.retypePassword}
                  onChange={handleChange}
                  isValid={touched.retypePassword && !errors.retypePassword}
                  placeholder="Confirm Password"
                />
                <p>{errors.retypePassword}</p>
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
