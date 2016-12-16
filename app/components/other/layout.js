import React from 'react';

import Header from './header';
import Footer from './footer';

export default class Layout extends React.Component {
  constructor() {
  	super();
  	this.state = {name: "Andres"};  	
  }

  render () {
  	setTimeout(() => {
  		this.setState({name: "Valeria"})
  	}, 3000)

    return (
      <div>
      	<h3>Ahora lo ves y ahora no...</h3>
      	{this.state.name}
      	<Header />
      	<Footer />
      	<Header />
      </div>
    );
  }
}