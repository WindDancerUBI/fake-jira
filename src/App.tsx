/*
 * @Descripttion: your project
 * @Author: huangjitao
 * @Date: 2021-03-19 07:48:44
 * @Function: use of this file
 */
import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {" "}
        <img src={logo} className="App-logo" alt="logo" />{" "}
        <p>
          {" "}
          Edit <code>src/App.tsx</code> and save to reload.{" "}
        </p>{" "}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Learn React{" "}
        </a>{" "}
      </header>
    </div>
  );
}

export default App;
