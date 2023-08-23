import React from "react";
import Joi from "joi";
import { LeapFrog } from "@uiball/loaders";
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
    isLoading: false,
  };

  schema = Joi.object({
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  });
  doSubmit = async () => {
    // Call the server
    try {
      this.setState({ isLoading: true });
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
    this.setState({ isLoading: false });
  };

  render() {
    const { isLoading } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username", { autoFocus: true })}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton(
            isLoading ? (
              <LeapFrog size={31} speed={2.5} color="white" />
            ) : (
              "Login"
            ),
            isLoading
          )}
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
