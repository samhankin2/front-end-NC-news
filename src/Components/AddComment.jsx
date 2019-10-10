import React, { Component } from "react";
import * as api from "../api/api";

class AddComment extends Component {
  state = { body: "", err: false };

  submitNewComment = event => {
    event.preventDefault();
    const newComment = {
      username: this.props.loggedInUser,
      body: this.state.body
    };

    if (this.state.body.length === 0) {
      this.setState({ err: true });
      this.setState({ body: "" });
    } else {
      api.postNewComment(this.props.articleId, newComment).then(newComment => {
        this.props.addNewCommentHandler(newComment);
      });
    }
  };

  handleChange = event => {
    this.setState({ body: event.target.value });
  };

  render() {
    return this.props.loggedInUser ? (
      <>
        {this.state.err && <p>you must enter a comment</p>}
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
      </>
    ) : (
      <p>You must be logged in to comment</p>
    );
  }
}

export default AddComment;
