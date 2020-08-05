import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


//FirstCompo et FirstCompo2 font la meme chose
const FirstCompo = () => {
  return React.createElement("p", { style : {backgroundColor : 'green'}, id : 'parentP' }, "Nous sommes en formations React !!!!")
}

const FirstCompo2 = () => {
  return <p style={{backgroundColor : 'green'}}>"Nous sommes en formations React !!!!"</p>
}

const Hello = ({ name }) => React.createElement("h1", {}, `Hello ${ name }`)

function HelloAlten() {
  return (<div> <Hello name="Alten" /> </div>)
}

//Affichage du DOM virtuel dans la page
ReactDOM.render(
  // <FirstCompo />,
  // <FirstCompo2 />,
  // <HelloAlten />,
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>,
 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
