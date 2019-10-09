import React, { Component } from "react";
import * as api from "../api/api";

class AddComment extends Component {
  state = { body: "" };

  submitNewComment = event => {
    event.preventDefault();
    const newComment = {
      username: this.props.loggedInUser,
      body: this.state.body
    };

    this.setState({ body: "" });

    api.postNewComment(this.props.articleId, newComment).then(newComment => {
      this.props.addNewCommentHandler(newComment);
    });
  };

  handleChange = event => {
    this.setState({ body: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.submitNewComment}>
        <label htmlFor="body"></label>
        <input
          onChange={this.handleChange}
          id="body"
          type="text"
          value={this.state.body}
        ></input>
        <input type="submit" value="Add Comment" />
      </form>
    );
  }
}

export default AddComment;
