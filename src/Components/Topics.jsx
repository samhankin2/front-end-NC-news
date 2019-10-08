import React, { Component } from "react";
import { Link } from "@reach/router";
import style from "./Styles/Topics.module.css";

class Topics extends Component {
  state = {
    topics: [
      { slug: "coding", description: "Code is love, code is life" },
      { slug: "football", description: "FOOTIE!" },
      {
        slug: "cooking",
        description: "Hey good looking, what you got cooking?"
      }
    ]
  };
  render() {
    return (
      <ul className={style.navBar}>
        <div className={style.navBarItemDiv}>
          <Link to="/">
            <li key="all" className={style.navBarItem}>
              all
            </li>
          </Link>
        </div>
        {this.state.topics.map(topic => {
          return (
            <div key={topic.slug} className={style.navBarItemDiv}>
              <Link key={topic.slug} to={"/topic/" + topic.slug}>
                <li className={style.navBarItem}>{topic.slug}</li>
              </Link>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default Topics;
