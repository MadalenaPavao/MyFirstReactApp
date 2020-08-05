import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const FirstCompo = () => {
  return React.createElement("p", { style :{backgroundColor : 'green'}, id: 'parentP' }, "Nous sommes en formations React !!!!")
}

ReactDOM.render(
  <FirstCompo />,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
