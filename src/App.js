import React from 'react';
import logo from './logo.svg';
import './App.css';
import ImageCircle from './components/ImageCircle';
import ImageCircleC from './components/ImageCircleC';


function App() {
  return (
    <div>
      {/* <ImageCircle /> */}
      {/* <ImageCircleC /> */}
      <ImageCircle name="Madalena" lastname="Pavão" age="25" description="J'aime React" imgUrl="https://picsum.photos/id/1014/300/300"/>
      <p>Ce text est dans App.js!</p>
    </div>
  );
}

export default App;
