import React from 'react';
import ReactDom from 'react-dom';
require('./app.scss');

class HelloWorld extends React.Component {
  render() {
    return <p>Hello, bla bla bla!</p>;
  }
}

ReactDom.render(<HelloWorld />,document.getElementById('main'));