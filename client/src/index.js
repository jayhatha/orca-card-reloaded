import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/mapbox.css';
import ConnectedApp from './App';
import { Provider } from 'react-redux';
import store from './store/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store = {store}>
                  <ConnectedApp />
                </Provider>, document.getElementById('root'));
registerServiceWorker();
