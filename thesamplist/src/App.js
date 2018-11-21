import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactHowler from "react-howler";
import Play from "./players/Play";

class App extends Component {
  render() {
    return (
      <div className="Container">
        <h1 className="title">The Samplist</h1>
        <a
          href="https://github.com/thangngoc89/react-howler"
          className="github-btn"
        />

        <div className="players">
          <section>
            <h1>Simple Player</h1>
            <Play />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
