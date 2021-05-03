import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { Typography } from '@material-ui/core'

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
  	<Provider store={store}>
    	<App />
      {//<Typography variant="body2"  align = 'center' gutterBottom = 'true' style={{color: "grey", alignItems : "flex-end"}} >Nathan's Website ™</Typography> 
      }
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();