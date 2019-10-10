import React, { Component } from "react";
import { navigate } from "@reach/router";
import * as api from "../../api/api";

class Register extends Component {
  state = {
    username: "",
    password: "",
    failed: false
  };

  handleUserChange = event => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { username, password } = this.state;
    this.setState({ username: "", password: "" });
    api
      .postNewUser(username, password)
      .then(newUser => {
        this.props.handleLogIn(username);
        navigate("/");
      })
      .catch(err => {
        this.setState({ failed: true });
      });
  };

  render() {
    return (
      <>
        {this.state.failed && <p>Username Already Taken</p>}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">username</label>
          <input
            type="text"
            id="username"
            onChange={this.handleUserChange}
            value={this.state.username}
          />
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={this.handlePasswordChange}
            value={this.state.password}
          />
          <input type="submit" value="Register" />
        </form>
      </>
    );
  }
}

export default Register;
