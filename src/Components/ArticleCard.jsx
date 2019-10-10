import React, { Component } from "react";
import styles from "./Styles/ArticleCard.module.css";
import { Link } from "@reach/router";
import * as api from "../api/api";
import Vote from "./Vote";

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
          </div>
        </Link>
        <Vote
          votes={this.props.votes}
          article_id={this.props.article_id}
        ></Vote>
      </div>
    );
  }
}

export default ArticleCard;
