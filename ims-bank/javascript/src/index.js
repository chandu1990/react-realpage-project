import React from 'react';
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Bank from './Bank.jsx';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Bank />
  </React.StrictMode>,
  rootElement
);
