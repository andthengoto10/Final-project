import React, { Component } from "react";
import classes from "../../assest/form.module.scss";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={classes.formContainer}>
        <h1>Welcome</h1>
        <Formik>
          <Form>
            <div>
              <Field type="email" placeholder="Enter Email" name="email" />
            </div>
            <div>
              <Field
                type="password"
                placeholder="Enter Password"
                name="password"
                id="inputPassword"
              />
              <i
                className={
                  this.state.isHide ? "fas fa-eye-slash" : "fas fa-eye "
                }
              />
              <Link to="/forgotPassword" className={classes.forgotPassword}>
                Forgot your password?
              </Link>
            </div>
            <Link to="/userProfile">
              <input type="submit" value="Login" />
            </Link>

            <p>
              Create a Account? <Link to="/userProfile">Register</Link>
            </p>
          </Form>
        </Formik>
      </div>
    );
  }
}

export default Login;
