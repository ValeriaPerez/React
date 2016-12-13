import React from 'react';
import ReactDOM from 'react-dom';

class Layout extends React.Component {
  constructor() {
    super();
    this.name = "Valeria";
  }
  render () {
    return (
      <h1> Aprendiendo React {this.name} </h1>
      //var div = document.createElement("h1")
      //div innerHTML = "some content"
    );
  }
}

ReactDOM.render(<Layout/>, document.getElementById('container'));
