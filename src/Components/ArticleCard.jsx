import React, { Component } from "react";
import styles from "./Styles/ArticleCard.module.css";
import { Link } from "@reach/router";
import * as api from "../api/api";

class ArticleCard extends Component {
  state = { votes: this.props.votes };

  handleVote = up_or_down => {
    let vote = 1;
    if (up_or_down === "down") vote = -1;
    console.log(vote);
    this.setState(prevState => {
      return { votes: prevState.votes + vote };
    });

    api.patchArticleVotes(this.props.article_id, vote).then(votes => {
      this.setState({ votes });
    });
  };

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
      <div>
        <Link to={"/article/" + article_id}>
          <div className={styles.wrapper}>
            <p className={styles.title}>{title}</p>
            <p className={styles.author}>{author}</p>
            <p className={styles.topic}>{topic}</p>
            <p className={styles.comments}>comments: {comment_count}</p>
            <p className={styles.created_at}>{created_at.slice(0, 10)}</p>

            <p className={styles.votes}>{this.state.votes || votes}</p>
          </div>
        </Link>
        <button className={styles.up} onClick={this.handleVote}>
          up
        </button>
        <button className={styles.down} onClick={() => this.handleVote("down")}>
          down
        </button>
      </div>
    );
  }
}

export default ArticleCard;
