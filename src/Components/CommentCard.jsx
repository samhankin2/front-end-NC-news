import React, { Component } from "react";
import styles from "./Styles/CommentCard.module.css";

class CommentCard extends Component {
  state = {};
  render() {
    const { body, author, votes, created_at } = this.props;
    return (
      <div className={styles.wrapper}>
        <p className={styles.author}>{author}</p>
        <p className={styles.body}>{body}</p>
        <p className={styles.created_at}>{created_at.slice(0, 10)}</p>
        <button className={styles.up}>up</button>
        <button className={styles.down}>down</button>
        <p className={styles.votes}>{votes}</p>
      </div>
    );
  }
}

export default CommentCard;
