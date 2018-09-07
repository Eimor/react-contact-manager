import React, { Component } from 'react'

export default class Test extends Component {
  state = {
    title: '',
    body: ''
  };
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json()).then(data => this.setState({
      title: data.title,
      body: 'hola soy el body harcodeado porque en la api no existo'
    }));
    console.log(this.state.body);
  }; //Carga con la pagina
  /*
  componentWillMount() {
    console.log('componentWillMount...')
  } // CArga antes de la pagina

  componentDidUpdate() {
    console.log('componentDidUpdate...');
  } // Carga cuando se updatea algun componente

  componentWillUpdate() {
    console.log('componentWillUpdate...')
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log('componentWillReceiveProps...')
  } //En actualizaciones siguiente agregar UNSAFE_  porque se va a deprecar

  static static getDerivedStateFromProps(nextProps, prevState) {
    return null;
  }
  */


  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    )
  }
}
