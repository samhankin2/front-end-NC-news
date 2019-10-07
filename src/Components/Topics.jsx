import React, { Component } from "react";
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
      <ul>
        {this.state.topics.map(topic => {
          return <li>{topic.slug}</li>;
        })}
      </ul>
    );
  }
}

export default Topics;
