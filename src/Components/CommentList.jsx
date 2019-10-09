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

  deleteCommentHandler = commentID => {
    let copiedState = this.state.comments.map(comment => ({ ...comment }));
    copiedState = this.state.comments.filter(comment => {
      return comment.comment_id !== commentID;
    });
    this.setState({ comments: copiedState });
    api.deleteCommentByCommentId(commentID).then(() => {
      console.log("deleted");
    });
  };

  render() {
    const { loggedInUser } = this.props;
    return (
      <>
        <section>
          {this.state.comments &&
            this.state.comments.map(comment => {
              let props = { ...comment };
              props.loggedInUser = loggedInUser;
              props.deleteCommentHandler = this.deleteCommentHandler;
              return <CommentCard key={comment.comment_id} {...props} />;
            })}
        </section>
        <AddComment
          articleId={this.props.articleId}
          addNewCommentHandler={this.addNewCommentHandler}
          loggedInUser={loggedInUser}
        />
      </>
    );
  }
}

export default CommentList;
