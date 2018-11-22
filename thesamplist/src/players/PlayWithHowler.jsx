import React, { Component } from "react";
import { Howl, Howler } from "howler";
import Button from "../components/Button";
import "howler-plugin-effect-chain";
import Tuna from "tunajs";

class PlayWithHowler extends React.Component {
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
  handlePlay2() {
    let sound = new Howl({
      src: [
        "https://raw.githubusercontent.com/sebamacchia/thesamplist/master/thesamplist/src/assets/sounds/bateria_espectacular-kick%202.wav"
      ],
      loop: false
    });

    const tuna = new Tuna(Howler.ctx);
    const delay = new tuna.Delay({});
    Howler.addEffect(delay);
    sound.play();
  }

  render() {
    return (
      <div>
        <Button onClick={this.handlePlay}>Play</Button>
        <Button onClick={this.handlePlay2}>Play</Button>
      </div>
    );
  }
}

export default PlayWithHowler;
