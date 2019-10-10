import React, { Component } from "react";
import { navigate } from "@reach/router";
import * as api from "../../api/api";

class LogIn extends Component {
  state = {
    username: "",
    password: "",
    wrongPassword: false
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
    api.logInUser(username, password).then(correctPassUserComboBoolean => {
      //   console.log(correctPassUserComboBoolean);
      if (correctPassUserComboBoolean) {
        this.props.handleLogIn(username);
        navigate("/");
      } else this.setState({ wrongPassword: true });
    });
  };

  render() {
    return (
      <>
        {this.state.wrongPassword && <p>Wrong Username/Password</p>}
        {this.props.loggedInUser == null ? (
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
            <input type="submit" value="Log In!" />
          </form>
        ) : (
          <p>you are already logged in</p>
        )}
      </>
    );
  }
}

export default LogIn;
