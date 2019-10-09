import React, { Component } from "react";
import styles from "./Styles/CommentCard.module.css";
import * as api from "../api/api";

class CommentCard extends Component {
  state = {
    votes: this.props.votes
  };

  handleVote = up_or_down => {
    let vote = 1;
    if (up_or_down === "down") vote = -1;
    console.log(vote);
    this.setState(prevState => {
      return { votes: prevState.votes + vote };
    });

    api.patchCommentVotes(this.props.comment_id, vote).then(votes => {
      this.setState({ votes });
    });
  };

  render() {
    const {
      body,
      author,
      votes,
      created_at,
      loggedInUser,
      comment_id
    } = this.props;

    return (
      <div className={styles.wrapper}>
        <p className={styles.author}>{author}</p>
        <p className={styles.body}>{body}</p>
        <p className={styles.created_at}>{created_at.slice(0, 10)}</p>
        <button className={styles.up} onClick={this.handleVote}>
          up
        </button>
        <button className={styles.down} onClick={() => this.handleVote("down")}>
          down
        </button>
        <p className={styles.votes}>{this.state.votes || votes}</p>
        {author === loggedInUser && (
          <button onClick={() => this.props.deleteCommentHandler(comment_id)}>
            Delete Comment
          </button>
        )}
      </div>
    );
  }
}

export default CommentCard;
