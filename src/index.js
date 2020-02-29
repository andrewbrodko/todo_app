import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import 'normalize.css';
import './index.css';

import rootReducer from './reducers';
import VTaskBar from './containers/VTaskBar';
import VDescription from './containers/VDescription';
import VFooter from './containers/VFooter'
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
));

ReactDOM.render(
    <Provider store={store}>
        <VTaskBar />
        <VDescription />
        <VFooter />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
