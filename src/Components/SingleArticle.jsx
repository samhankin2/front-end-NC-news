import React, { Component } from "react";
import CommentList from "./CommentList";
import * as api from "../api/api";

class SingleArticle extends Component {
  state = {};

  componentDidMount() {
    api
      .getSingleArticle(this.props.articleId)
      .then(article => {
        this.setState({ article, err: null });
      })
      .catch(({ message }) => {
        this.setState({ err: message });
      });
  }

  render() {
    const { article } = this.state;
    const { loggedInUser } = this.props;

    return (
      <>
        <p>{this.state.err}</p>
        {this.state.article && (
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
        )}
      </>
    );
  }
}

export default SingleArticle;
