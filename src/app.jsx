import HelloWorld from './components/hello_component.jsx';
import React from 'react';
import ReactDom from 'react-dom';
require('./app.scss');

ReactDom.render(<HelloWorld />, document.getElementById('main'));