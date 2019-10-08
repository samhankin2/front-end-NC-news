import React, { Component } from "react";
import CommentCard from "./CommentCard";
import * as api from "../api/api";
import AddComment from "./AddComment";

class CommentList extends Component {
  state = { comments: null };

  componentDidMount() {
    api.getCommentByArticleId(this.props.articleId).then(comments => {
      this.setState({ comments });
    });
  }

  addNewCommentHandler = newComment => {
    this.setState(prevState => {
      const copystate = prevState.comments.map(comment => {
        return { ...comment };
      });

      copystate.unshift(newComment);
      return { comments: copystate };
    });
  };

  render() {
    return (
      <>
        <section>
          {this.state.comments &&
            this.state.comments.map(comment => {
              return <CommentCard key={comment.comment_id} {...comment} />;
            })}
        </section>
        <AddComment
          articleId={this.props.articleId}
          addNewCommentHandler={this.addNewCommentHandler}
        />
      </>
    );
  }
}

export default CommentList;
