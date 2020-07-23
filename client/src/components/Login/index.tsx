import React from "react";
import "./styles.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import PageService from "../../services/pageService";
import { connect } from "react-redux";
import { login, setCurrentId, setUserRole } from "../../actions/pageActions";
import { History } from "history";

interface IState {}

interface IProps {
  login: Function;
  setCurrentId: Function;
  setUserRole: Function;
  history: History;
}

interface FormValues {
  username: string;
  password: string;
}

function Login({ login, setCurrentId, setUserRole, history }: IProps) {
  const initialValues: FormValues = { username: "", password: "" };
  return (
    <div className="login">
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, actions) => {
          const response = await PageService.login(values);
          if (response.error) {
            if (response.statusCode === 404) {
              actions.setFieldError("username", "Invalid username");
            }
            if (response.statusCode === 401) {
              actions.setFieldError("password", "Invalid password");
            }
          } else {
            login();
            setCurrentId(response.data!.id);
            setUserRole(response.data!.role);
            if (response.data!.role == "admin") history.push("/userList");
          }
        }}
      >
        <Form className="loginForm">
          <label htmlFor="username">Username</label>
          <Field
            className="loginInput"
            type="text"
            name="username"
            placeholder="Username"
          />
          <ErrorMessage
            className="loginError"
            component="div"
            name="username"
          />
          <label htmlFor="password">Password</label>
          <Field
            className="loginInput"
            type="password"
            name="password"
            placeholder="Password"
          />
          <ErrorMessage
            className="loginError"
            component="div"
            name="password"
          />
          <button type="submit" className="loginSubmit">
            {" "}
            Submit{" "}
          </button>
        </Form>
      </Formik>
    </div>
  );
}

const mapDispatchToProps = {
  login,
  setCurrentId,
  setUserRole,
};
export default connect(null, mapDispatchToProps)(Login);
