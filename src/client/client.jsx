import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import store from './store/store';
import App from "./containers/ApplicationContainer";

ReactDOM.render(


    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>


    ,
    document.getElementById('app'),
);