import React, { Component } from "react";

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
          <div className="mb-3">
            <label htmlFor="username">Username</label>
            <input
              autoFocus
              value={username}
              type="text"
              id="username"
              name="username"
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              value={password}
              type="password"
              id="password"
              name="password"
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
