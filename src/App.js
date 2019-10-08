import React from "react";
import "./App.css";
import Topics from "./Components/Topics";
import ArticleList from "./Components/ArticleList";
import SingleArticle from "./Components/SingleArticle";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Topics />
      <Router>
        <ArticleList path="/" heading="all" />
        <ArticleList path="/topic/:topicName" />
        <SingleArticle path="/article/:articleId" />
      </Router>
    </div>
  );
}

//Change the sortby functionality
//wrap a in nav bar in a div
//dont mutate the state in prevstate

export default App;
