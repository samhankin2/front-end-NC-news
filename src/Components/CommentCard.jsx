import React, { Component } from "react";
import styles from "./Styles/CommentCard.module.css";
import * as api from "../api/api";
import Vote from "./Vote";

class CommentCard extends Component {
  // state = {
  //   votesChange: 0
  // };

  // handleVote = e => {
  //   let vote = +e.target.id;
  //   console.log(vote);

  //   this.setState(prevState => {
  //     return { votesChange: prevState.votesChange + vote };
  //   });

  //   api.patchCommentVotes(this.props.comment_id, vote);
  // };

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
        <Vote
          votes={this.props.votes}
          comment_id={this.props.comment_id}
        ></Vote>
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
