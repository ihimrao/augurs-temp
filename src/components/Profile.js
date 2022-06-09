import React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import { Form, Button } from 'react-bootstrap';
export default function Profile() {
  const user = {
    firstName: 'anonymous',
    lastName: 'las',
    email: 'abc@gmail.com',
  };
  return (
    <>
      <h1>hello {user.firstName + user.lastName}</h1>
      <h1>hello {user.email}</h1>
    </>
  );
}
