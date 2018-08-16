import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import App from "./containers/ApplicationContainer";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('app'),
);