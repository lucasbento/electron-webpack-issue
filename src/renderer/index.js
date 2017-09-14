import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

const root = document.createElement('div'); // eslint-disable-line no-undef

root.id = 'root';

document.body.appendChild(root); // eslint-disable-line no-undef

render(<App />, document.getElementById('root')); // eslint-disable-line no-undef
