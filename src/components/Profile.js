import React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import { Form, Button } from 'react-bootstrap';
export default function Profile() {
  const user = 'Anonymous';
  return (
    <>
      <h1>hello {user}</h1>
    </>
  );
}
