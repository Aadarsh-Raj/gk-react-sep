import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Style/formcomponent.css";

const FormComponent = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters long"),
    email: Yup.string()
      .oneOf(["arya@gmail.com"], "Email must be arya@gmail.com")
      .required("Email is required"),
    password: Yup.string()
      .oneOf(["arya@01"], "Password should be arya@01")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });

  return (
    <div className="form-component">
      <Formik
        initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          alert("Form Submitted", values);
          setSubmitting(false);
        }}
        validateOnChange={true}   // Validate on every input change
        validateOnMount={true}    // Validate when the form is loaded
        validateOnBlur={true}     // Validate when input loses focus
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <div>
                <h1>Welcome!</h1>
            </div>
            <div className="form-boxes">
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" placeholder="Name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div className="form-boxes">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="form-boxes">
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                name="password"
                placeholder="Password"
              />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <div className="form-boxes">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="error"
              />
            </div>
            <div>
              <button type="submit" disabled={isSubmitting || !isValid}>
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <div className="image-container">
        
      </div>
    </div>
  );
};

export default FormComponent;
