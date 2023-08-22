import React from "react";
import Joi from "joi";
import Form from "./common/Form";
import { login } from "../services/authService";
import withRouter from "../hoc/withRouter";

class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = Joi.object({
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  });
  doSubmit = async () => {
    // Call the server
    try {
      const { data } = this.state;
      const { data: result } = await login(data.username, data.password);
      localStorage.setItem("access", result.access);
      localStorage.setItem("refresh", result.access);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 401) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data.detail;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username", { autoFocus: true })}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
