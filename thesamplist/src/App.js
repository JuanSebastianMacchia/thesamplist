import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactHowler from "react-howler";
import Play from "./players/Play";
import PlayWithHowler from "./players/PlayWithHowler";
import Sampler01 from "./components/samplers/Sampler01";
import { Howl, Howler } from "howler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// FONT AWESOME
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faKey,
  faPlay,
  faPlayCircle
} from "@fortawesome/free-solid-svg-icons";
library.add(faEnvelope, faKey, faPlayCircle);

class App extends Component {
  render() {
    return (
      <div className="Container">
        <div class="item 1">
          SAMPLSITA <br /> Loguin
        </div>
        <div class="item">2</div>
        <div class="item 3">EDIT lapiz</div>
        <div class="item 4">LOGUIN</div>
        <div class="item5">
          <FontAwesomeIcon size="2x" icon="circle-play" />
          <Sampler01 />
        </div>
        <div class="item6">2</div>
        {/* COMPONENT 7 */}
        <div class="item">
          <div className="players">
            <FontAwesomeIcon size="2x" icon="envelope" />
            <Sampler01 />
          </div>
        </div>
        <div class="item">0</div>
        <div class="item">Q</div>
        <div class="item">W</div>
        <div class="item">11</div>
        <div class="item">12</div>
        <div class="item">13</div>
        <div class="item">14</div>
        <div class="item">15</div>
        <div class="item">16</div>
        <div class="item">17</div>
        <div class="item">18</div>
        <div class="item">19</div>
        <div class="item">20</div>
        {/* COMPONENT 21 */}
        <div class="item">
          <FontAwesomeIcon size="2x" icon="envelope" />
        </div>
        <div class="item">SAVE</div>
        <div class="item">23</div>
        <div class="item">BANK</div>

        {/* <h1 className="title">The Samplist</h1>
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

        <div className="players">
          <section>
            <h1>Simple Player</h1>
            <PlayWithHowler />
          </section>
        </div> */}
      </div>
    );
  }
}

export default App;
