import React from 'react';
import ReactDOM from 'react-dom';
import { CreateStor, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extensions';

import App from './components/App'

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
    )

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>
    document.getElementById('root')
)