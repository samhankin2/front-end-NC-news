import React, { Component } from "react";
import "./App.css";
import Topics from "./Components/Topics";
import ArticleList from "./Components/ArticleList";
import SingleArticle from "./Components/SingleArticle";
import { Router, Link } from "@reach/router";
import Four0Four from "./Components/Four0Four";
import Register from "./Components/LoginRegister/Register";
import LogIn from "./Components/LoginRegister/LogIn";
import Error from "./Components/Error";

class App extends Component {
  state = { loggedInUser: null };

  handleLogIn = username => {
    this.setState({ loggedInUser: username });
  };

  logOut = () => {
    this.setState({ loggedInUser: null });
  };

  render() {
    return (
      <div className="App">
        {this.state.loggedInUser === null ? (
          <>
            <Link to="/login">
              <button>Log In</button>
            </Link>
            <Link to="/register">
              <button>Register</button>
            </Link>
          </>
        ) : (
          <>
            <button onClick={this.logOut}>Log Out</button>
            <p>You are logged in as: {this.state.loggedInUser}</p>
          </>
        )}

        <Topics />
        <Router>
          <ArticleList path="/" heading="all" />
          <ArticleList path="/topic/:topicName" />
          <SingleArticle
            path="/article/:articleId"
            loggedInUser={this.state.loggedInUser}
          />
          <Register path="/register" handleLogIn={this.handleLogIn}></Register>
          <LogIn
            path="/login"
            handleLogIn={this.handleLogIn}
            loggedInUser={this.state.loggedInUser}
          ></LogIn>
          <Error default four0four="true"></Error>
        </Router>
      </div>
    );
  }
}

export default App;
