import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import RoomProvider from './Context'
import './index.css';
// import "bootstrap/dist/css/bootstrap.min.css"

ReactDOM.render(
  <RoomProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </RoomProvider>,
  document.getElementById('root')
);

