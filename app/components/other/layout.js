import React from 'react';

import Header from './header';
import Footer from './footer';

export default class Layout extends React.Component {
  getVal() {
    return "React";
  }
  
  render () {
  	var lista = [
  		<Header />,
  		<Header />,
  		<Header />,
		];

    return (
      <div>
      	<h3>Aprendiendo {this.getVal()}!</h3>
      	{lista}
      	<Header />
      	<Footer />
      	<Header />
      </div>
    );
  }
}