import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import shoppingCartApp from './reducers'
import './index.css';
import App from './components/App.js';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(shoppingCartApp);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
