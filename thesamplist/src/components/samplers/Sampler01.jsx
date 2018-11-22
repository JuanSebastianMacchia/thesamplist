import React, { Component } from "react";
import { Howl, Howler } from "howler";
import Button from "../Button";
import "howler-plugin-effect-chain";
import Tuna from "tunajs";
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

class Sampler01 extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
  }
  handlePlay() {
    let sound = new Howl({
      src: [
        "https://raw.githubusercontent.com/sebamacchia/thesamplist/master/thesamplist/src/assets/sounds/bateria_espectacular-kick%202.wav"
      ],
      loop: false
    });
    sound.play();
  }

  render() {
    return (
      <div>
        {/* <Button onClick={this.handlePlay}>Play</Button> */}
        <FontAwesomeIcon
          className="sampler"
          size="sm"
          icon="play-circle"
          onClick={this.handlePlay}
        />
      </div>
    );
  }
}

export default Sampler01;
