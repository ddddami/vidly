import React from "react";
import Joi from "joi";
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
  };
  schema = Joi.object({
    username: Joi.string().required().label("Username"),
    password: Joi.string().min(5).required().label("Password"),
    name: Joi.string().required().label("Name"),
  });
  doSubmit = async () => {
    try {
      const { data } = this.state;
      await UserService.register(data);
      // To improve: (Don't assume call to server for login wont fail)
      const { data: result } = await login(data.username, data.password);
      localStorage.setItem("access", result.access);
      localStorage.setItem("refresh", result.access);
      this.props.navigate("/");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data.username[0];
        this.setState({ errors });
      }
    }
  };
  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username", "text", true)}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default withRouter(RegisterForm);
