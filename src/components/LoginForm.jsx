import React, { Component } from "react";
import Input from "./common/Input";

class LoginForm extends Component {
  state = {
    account: {
      username: "",
      password: "",
    },
  };
  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  render() {
    const { username, password } = this.state.account;
    return (
      <div>
        <h1>Login</h1>
        <form>
          <Input
            autoFocus
            value={username}
            label="Username"
            name="username"
            onChange={this.handleChange}
          />
          <Input
            name="password"
            label="Password"
            value={password}
            onChange={this.handleChange}
          />

          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
