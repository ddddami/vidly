import React, { Component } from "react";
import Input from "./common/Input";
import Joi from "joi";

class LoginForm extends Component {
  state = {
    account: {
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = Joi.object({
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  });
  validate = () => {
    const { account } = this.state;
    const options = { abortEarly: false };
    const result = this.schema.validate(account, options);
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };
  validateProperty = ({ name, value }) => {
    const schema = this.schema.extract(name);
    const { error } = schema.validate(value);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    // Call the server
    console.log("Submitted");
  };
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };
  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            autoFocus
            value={account.username}
            label="Username"
            name="username"
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            label="Password"
            value={account.password}
            onChange={this.handleChange}
            error={errors.password}
          />

          <button className="btn btn-primary" disabled={this.validate()}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
