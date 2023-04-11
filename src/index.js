import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

let defaultVesselList;

function reducer(vesselList = defaultVesselList, dispatch){
  if (dispatch.type === 'setVessel') {
    vesselList = dispatch.payload;
    return vesselList;
  } else {
    return false;
  } 
}

let store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
