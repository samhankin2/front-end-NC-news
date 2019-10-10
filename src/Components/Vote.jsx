import React, { Component } from "react";
import styles from "./Styles/CommentCard.module.css";
import * as api from "../api/api";

class Vote extends Component {
  state = { votesChange: 0 };

  handleVote = e => {
    let vote = +e.target.id;
    console.log(vote);

    this.setState(prevState => {
      return { votesChange: prevState.votesChange + vote };
    });

    if (this.props.comment_id) {
      api.patchCommentVotes(this.props.comment_id, vote);
    } else {
      api.patchArticleVotes(this.props.article_id, vote);
    }
  };
  render() {
    return (
      <>
        <button
          id={1}
          className={styles.up}
          onClick={this.handleVote}
          disabled={this.state.votesChange > 0}
        >
          up
        </button>
        <button
          id={-1}
          className={styles.down}
          onClick={this.handleVote}
          disabled={this.state.votesChange < 0}
        >
          down
        </button>
        <p className={styles.votes}>
          {this.props.votes + this.state.votesChange}
        </p>
      </>
    );
  }
}

export default Vote;
