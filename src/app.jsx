import HelloWorld from './component.jsx';
import React from 'react';
import ReactDom from 'react-dom';
require('./app.scss');
console.log('I am root file')
ReactDom.render(<HelloWorld />, document.getElementById('main'));