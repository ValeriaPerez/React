import React from 'react';

import Header from './header';
import Footer from './footer';

export default class Layout extends React.Component {
  constructor() {
  	super();
  	this.state = {name: "Andres"};
  	this.update = this.update.bind(this);  	
  }

  update(){
    this.setState({name:'Valeria'})
  }

  render () {
    return (
      <div>
      	<Header />
      	<h3>Ahora lo ves y ahora no...</h3>
      	{this.state.name}
      	<button onClick={this.update}>click me</button>
      	<input />
      	<Footer />
      </div>
    );
  }
}