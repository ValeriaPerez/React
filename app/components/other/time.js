import React from 'react';
import ReactDOM from 'react-dom';

export default class Timer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {secondsElapsed: 0};
  }

  tick() {
    this.setState((prevState) => ({
      secondsElapsed: prevState.secondsElapsed + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>Segundos transcurridos: {this.state.secondsElapsed}</div>
    );
  }
}

//ReactDOM.render(<Timer />, mountNode);
//ReactDOM.render(<Timer />, container);