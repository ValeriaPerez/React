import React from 'react';
import redux from 'redux';

import Header from './header';
import Footer from './footer';
import Timer from './time';
import List from './list';

export default class Layout extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Hola ' + this.state.value);
    event.preventDefault();//reinicia
  }

  
  render () {
  	
    return (
      <div>
      	<Header />
      		<h3>Formulario</h3>

      		<form onSubmit={this.handleSubmit}>
        		<label style={{color: 'blue'}}>
          		Escribe tu nombre:
          		<input type="text" placeholder="Nombre" value={this.state.value} onChange={this.handleChange} />
        		</label>
        		<input type="submit" value="Enviar" />
      		</form>
      	<Timer />
      	<Footer />
      </div>
    );
  }
}