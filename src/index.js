import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { getServiceTypes } from "./actions";
import ReduxPromise from 'redux-promise';
import reducers from './reducers';

import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';


// Needed to generate main CSS file
import './style/scss/main.scss';

const store = createStore(
    reducers, 
    // Uncomment out the following line if you want to use the Redux devtools extension
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
    applyMiddleware(ReduxPromise));
store.dispatch(getServiceTypes());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

