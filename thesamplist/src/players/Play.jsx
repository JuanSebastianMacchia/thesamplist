import React from "react";
import ReactHowler from "react-howler";
import Button from "../components/Button";
import { Howl, Howler } from "howler";

// const { Howl, Howler } = require("howler");

class Play extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
  }

  handlePlay() {
    this.setState({
      playing: true
    });
  }

  handlePause() {
    this.setState({
      playing: false
    });
  }

  render() {
    return (
      <div>
        <ReactHowler
          src="https://raw.githubusercontent.com/sebamacchia/thesamplist/master/thesamplist/src/assets/sounds/bateria_espectacular-kick%202.wav"
          playing={this.state.playing}
        />
        <Button onClick={this.handlePlay}>Play</Button>
        <Button onClick={this.handlePause}>Pause</Button>
      </div>
    );
  }
}

export default Play;
