import React, { Component } from "react";
import styles from "./Styles/ArticleCard.module.css";
class ArticleCard extends Component {
  state = {};
  render() {
    const {
      title,
      author,
      topic,
      created_at,
      comment_count,
      votes
    } = this.props;
    console.log(title);
    return (
      <div className={styles.wrapper}>
        <p className={styles.title}>{title}</p>
        <p className={styles.author}>{author}</p>
        <p className={styles.topic}>{topic}</p>
        <p className={styles.comments}>comments: {comment_count}</p>
        <p className={styles.created_at}>{created_at.slice(0, 10)}</p>
        <button className={styles.up}>up</button>
        <button className={styles.down}>down</button>
        <p className={styles.votes}>{votes}</p>
      </div>
    );
  }
}

export default ArticleCard;
