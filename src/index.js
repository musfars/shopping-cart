import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import shoppingCartApp from './reducers'
import './index.css';
import RouterComponent from './components/RouterComponent';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(shoppingCartApp);

ReactDOM.render(<Provider store={store}><RouterComponent /></Provider>, document.getElementById('root'));
registerServiceWorker();
