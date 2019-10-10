import React, { Component } from "react";
import CommentList from "./CommentList";
import * as api from "../api/api";
import Error from "./Error";

class SingleArticle extends Component {
  state = {};

  componentDidMount() {
    api
      .getSingleArticle(this.props.articleId)
      .then(article => {
        this.setState({ article, err: null });
      })
      .catch(({ message, status }) => {
        console.log("here");
        this.setState({ err: { message, status } });
      });
  }

  render() {
    const { article } = this.state;
    const { loggedInUser } = this.props;
    console.log(this.state.err);

    return (
      <>
        {this.state.article ? (
          <>
            <h2>{article.title}</h2>
            <h3>{article.author}</h3>
            <h3>{article.topic}</h3>
            <p>{article.body}</p>

            <CommentList
              articleId={this.props.articleId}
              loggedInUser={loggedInUser}
            />
          </>
        ) : this.state.err ? (
          <Error
            message={this.state.err.message}
            notfound={`Article: ${this.props.articleId} not found`}
          ></Error>
        ) : (
          <p>Loading...</p>
        )}
      </>
    );
  }
}

export default SingleArticle;
