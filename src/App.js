import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageCircle from './components/ImageCircle';
import ImageCircleC from './components/ImageCircleC';


function App() {
  return (
    <Fragment>
      <div className="d-flex flex-row justify-content-center">
        <ImageCircle name="Madalena" lastname="Pavão" age="25" description="J'aime React! :)" imgUrl="https://picsum.photos/id/1025/200/200"/>
        <ImageCircle name="Madalena" lastname="Pavão" age="26" description="J'aime React! :)" imgUrl="https://picsum.photos/id/1062/200/200"/>
        <ImageCircle name="Madalena" lastname="Pavão" age="27" description="J'aime React! :)" imgUrl="https://picsum.photos/id/1035/200/200"/>
        <ImageCircle name="Madalena" lastname="Pavão" age="28" description="J'aime React! :)" imgUrl="https://picsum.photos/id/100/200/200"/>
      </div>
      <form>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Prénom NOM" ></input>
          <input type="text" className="form-control" placeholder="Age" ></input>
          <input type="text" className="form-control" placeholder="Description" ></input>
        </div>
      </form>
    </Fragment>
      
  );
}

export default App;
