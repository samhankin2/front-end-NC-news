import React, { Component } from "react";
import styles from "./Styles/ArticleCard.module.css";
import { Link } from "@reach/router";

class ArticleCard extends Component {
  state = {};

  goToArticle = () => {};

  render() {
    const {
      article_id,
      title,
      author,
      topic,
      created_at,
      comment_count,
      votes
    } = this.props;

    return (
      <Link to={"/article/" + article_id}>
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
      </Link>
    );
  }
}

export default ArticleCard;
