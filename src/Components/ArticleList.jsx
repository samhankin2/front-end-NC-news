import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import { Link } from "@reach/router";
import style from "./Styles/ArticleList.module.css";
import * as api from "../api/api";
import Error from "./Error";

class ArticleList extends Component {
  state = {
    articles: null,
    sortBy: null
  };

  handleSortByClick = query => {
    this.setState({ sortBy: query });
  };

  componentDidMount() {
    api
      .getArticles(this.state.sortBy, this.props.topicName)
      .then(articles => {
        this.setState({ articles });
      })
      .catch(({ message }) => {
        this.setState({ err: `${message}: Topic doesnt exist` });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const { topicName } = this.props;
    console.log(topicName);

    const topicNameChange = prevProps.topicName !== topicName;
    const queryChange = prevState.sortBy !== this.state.sortBy;

    if (topicNameChange || queryChange) {
      api.getArticles(this.state.sortBy, topicName).then(topicArticles => {
        this.setState({ articles: topicArticles });
      });
    }
  }
  render() {
    const { topicName } = this.props;
    return this.state.articles ? (
      <div>
        <p>SortBy:</p>
        <ul className={style.queryBar}>
          <div className={style.queryBarItemDiv}>
            <li
              onClick={() => this.handleSortByClick("created_at")}
              className={style.queryBarItem}
            >
              Date Created
            </li>
          </div>
          <div className={style.queryBarItemDiv}>
            <li
              onClick={() => this.handleSortByClick("comment_count")}
              className={style.queryBarItem}
            >
              Comment Count
            </li>
          </div>
          <div className={style.queryBarItemDiv}>
            <li
              onClick={() => this.handleSortByClick("votes")}
              className={style.queryBarItem}
            >
              Votes
            </li>
          </div>
        </ul>
        <h2>
          {this.props.heading ? this.props.heading : this.props.topicName}
        </h2>

        {this.state.articles.map(article => {
          return <ArticleCard key={article.article_id} {...article} />;
        })}
      </div>
    ) : this.state.err ? (
      <Error message={this.state.err}></Error>
    ) : (
      "Loading..."
    );
  }
}

export default ArticleList;
