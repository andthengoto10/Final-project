import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import classes from "../../assest/form.module.scss";
import { Link } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={classes.formContainer}>
        <h1>Register</h1>
        <Formik
        //   initialValues={{
        //     firstName: "",
        //     lastName: "",
        //     email: "",
        //     password: ""
        //   }}
        >
          <Form>
            <div>
              <Field
                type="text"
                name="firstName"
                placeholder="Enter First Name"
              />
            </div>
            <div>
              <Field
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
              />
            </div>
            <div>
              <Field name="email" type="email" placeholder="Enter Email" />
            </div>
            <div>
              <Field
                name="password"
                type="password"
                placeholder="Create Password"
                id="inputPassword"
              />
              <i
                className={
                  this.state.isHide ? "fas fa-eye-slash" : "fas fa-eye"
                }
              />
            </div>
            <Link to="/login">
              <input type="submit" value="Register" />
            </Link>

            <p>
              Already have an account <Link to="/login">Login</Link>
            </p>
          </Form>
        </Formik>
      </div>
    );
  }
}

export default Register;
