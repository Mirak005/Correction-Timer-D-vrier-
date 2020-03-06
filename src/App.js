import React, { Component } from "react";
import MyTimer from "./components/MyTimer";
import "./App.css";

export default class App extends Component {
  state = {
    clock: 0,
    isStart: false
  };

  timer = setInterval(() => {
    if (this.state.isStart) {
      this.setState({ clock: this.state.clock + 1 });
    }
    console.log(this.state.clock);
  }, 1000);

  onStartClick = () => {
    this.setState({ isStart: !this.state.isStart });
  };

  onResetClick = () => {
    this.setState({ clock: 0, isStart: false });
  };

  render() {
    return (
      <div className="container">
        <MyTimer time={this.state.clock} />
        <div className="btn-container">
          <button
            className={this.state.isStart ? "btn btn-stop" : "btn btn-start"}
            onClick={this.onStartClick}
          >
            {this.state.isStart ? "Pause" : "Start"}
          </button>
          <button onClick={this.onResetClick} className="btn btn-reset">
            Reset
          </button>
        </div>
      </div>
    );
  }
}
