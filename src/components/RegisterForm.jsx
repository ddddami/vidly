import React from "react";
import Joi from "joi";
import { LeapFrog } from "@uiball/loaders";
import * as UserService from "../services/userService";
import Form from "./common/Form";
import withRouter from "../hoc/withRouter";
import { login } from "../services/authService";

class RegisterForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
      name: "",
    },
    errors: {},
    isLoading: false,
  };
  schema = Joi.object({
    username: Joi.string().required().label("Username"),
    password: Joi.string().min(5).required().label("Password"),
    name: Joi.string().required().label("Name"),
  });
  doSubmit = async () => {
    try {
      this.setState({ isLoading: true });
      const { data } = this.state;
      await UserService.register(data);
      // To improve: (Errors for login or better still, a better approach.)
      const { data: result } = await login(
        data.username,
        data.password,
        data.name
      );
      localStorage.setItem("access", result.access);
      localStorage.setItem("refresh", result.access);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data.username[0];
        this.setState({ errors });
      }
    }
    this.setState({ isLoading: false });
  };
  render() {
    const { isLoading } = this.state;
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username", "text", true)}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton(
            isLoading ? (
              <LeapFrog size={31} speed={2.5} color="white" />
            ) : (
              "Register"
            ),
            isLoading
          )}
        </form>
      </div>
    );
  }
}

export default withRouter(RegisterForm);
