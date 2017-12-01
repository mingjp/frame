import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import lightReducer from './modules/light/lightReducer'
import LightComponent from './modules/light/lightComponent'

const store = createStore(lightReducer);

ReactDOM.render(
    <Provider store={store}>
        <LightComponent />
    </Provider>,
    document.getElementById('app')
)