import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

console.log('Starting to compile electron renderer process');

const app = <App />;

// Render application in DOM
ReactDOM.render(app, document.getElementById('app'));
