import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Topics from "./Components/Topics";
import ArticleList from "./Components/ArticleList";

function App() {
  return (
    <div className="App">
      <Topics />
      <ArticleList />
    </div>
  );
}

export default App;
