import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<h1>Hello</h1><h2>Create dont hate.</h2>,document.getElementById('root'));
//ReactDOM.render(<h1>Hola</h1>,document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
