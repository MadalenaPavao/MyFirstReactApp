import React, { Fragment, Component } from 'react';
import './App.css';
import ImageCircle from './components/ImageCircle';
import ImageCircleC from './components/ImageCircleC';

class App extends Component {
  state = {
    user : {
        name : "Madalena",
        lastname : "PAVÃO",
        age : 25,
        description : "J'aime React! :)",
        imgUrl : "https://picsum.photos/id/1025/200/200"
    },
    user1 : {
        name : "Ekoura",
        lastname : "Dev",
        age : 12,
        description : "C'est l'équipe de DEV",
        imgUrl : "https://picsum.photos/id/1062/200/200"
    },
    user2 : {
        name : "Ekoura",
        lastname : "Manager",
        description : "C'est le manager général",
        age : 50,
        imgUrl : "https://picsum.photos/id/1035/200/200"
    },
    user3 : {
        name : "Ekoura",
        lastname : "Commercial",
        description : "C'est le responsable commmercial",
        age : 35,
        imgUrl : "https://picsum.photos/id/1014/200/200"
    },
    buttonName : 'Enregistrer'
  }
  
  handleOnChange = event => {
    // save State data
    const {user} = this.state
    console.log(user, '<=== before');
    user.description = event.target.value
    console.log(user, '<=== after');
    console.log(event.target.value);
    this.setState({user : user})
  }

  render() {

    return (
      <>
        <input 
          className="form-control"
          type="text"
          onChange={this.handleOnChange}
          value={this.state.user.description}
        />
        <div className="d-flex flex-row justify-content-center">
          <ImageCircle name={this.state.user.name}
                          lastname={this.state.user.lastname}
                          age={this.state.user.age}
                          description={this.state.user.description}
                          imgUrl={this.state.user.imgUrl}
                          buttonName={this.state.buttonName}
                          />
          <ImageCircle name={this.state.user1.name}
                                lastname={this.state.user1.lastname}
                                age={this.state.user1.age}
                                description={this.state.user1.description}
                                imgUrl={this.state.user1.imgUrl}
                                buttonName={this.state.buttonName}
                                />
          <ImageCircle name={this.state.user2.name}
                                lastname={this.state.user2.lastname}
                                age={this.state.user2.age}
                                description={this.state.user2.description}
                                imgUrl={this.state.user2.imgUrl}
                                buttonName={this.state.buttonName}
                                />

          <ImageCircle name={this.state.user3.name}
                                lastname={this.state.user3.lastname}
                                age={this.state.user3.age}
                                description={this.state.user3.description}
                                imgUrl={this.state.user3.imgUrl}
                                buttonName={this.state.buttonName}
                                />
  
          
        </div>
        
        <div className="container" style={{ paddingTop : '30px'}}>
            <input 
                className="form-control"
                type="text"
                
            />
            <input 
                className="form-control"
                type="text"
            />
            <textarea  
                className="form-control"
                />
        </div>
      </>
    )
  }

}

export default App;

// import React, { Fragment } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import ImageCircle from './components/ImageCircle';
// import ImageCircleC from './components/ImageCircleC';


// function App() {

//   state = {
//     user : {
//         name : "AVODAGBE",
//         lastname : "Godwin",
//         age : 45,
//         description : "Il est toujours joyeux :) !!!!!!!!",
//         image : "https://cdn.pixabay.com/photo/2020/05/25/19/58/fox-5220328__480.jpg"
//     },
//     user1 : {
//         name : "Ekoura",
//         lastname : "Dev",
//         age : 12,
//         description : "C'est l\'équipe de DEV",
//         image : "https://cdn.pixabay.com/photo/2016/04/25/18/07/halcyon-1352522__480.jpg"
//     },
//     user2 : {
//         name : "Ekoura",
//         lastname : "Manager",
//         description : "C'est le manager général",
//         age : 50,
//         image : "https://cdn.pixabay.com/photo/2020/07/18/11/46/old-man-5416999__480.jpg"
//     },
//     user3 : {
//         name : "Ekoura",
//         lastname : "Commercial",
//         description : "C'est le responsable commmercial",
//         age : 35,
//         image : "https://cdn.pixabay.com/photo/2020/07/23/10/38/dog-5430987__480.jpg"
//     },
//     buttonName : 'Enregistrer'
//   }
  
//   handleOnChange = event => {
//     // save State data
//     const {user} = this.state
//     console.log(user, '<=== before');
//     user.description = event.target.value
//     console.log(user, '<=== after');
//     console.log(event.target.value);
//     this.setState({user : user})

//   }


//   return (
//     <Fragment>
//       <div className="d-flex flex-row justify-content-center">
//         <ImageCircle name="Madalena" lastname="Pavão" age="25" description="J'aime React! :)" imgUrl="https://picsum.photos/id/1025/200/200"/>
//         <ImageCircle name="Madalena" lastname="Pavão" age="26" description="J'aime React! :)" imgUrl="https://picsum.photos/id/1062/200/200"/>
//         <ImageCircle name="Madalena" lastname="Pavão" age="27" description="J'aime React! :)" imgUrl="https://picsum.photos/id/1035/200/200"/>
//         <ImageCircle name="Madalena" lastname="Pavão" age="28" description="J'aime React! :)" imgUrl="https://picsum.photos/id/1014/200/200"/>
//       </div>
//       <form className="container">
//         <div className="form-group">
//           <input type="text" className="form-control" placeholder="Prénom NOM" ></input>
//           <input type="text" className="form-control" placeholder="Age" ></input>
//           <input type="text" className="form-control" placeholder="description" ></input>
//         </div>
//       </form>
//     </Fragment>
      
//   );
// }

// export default App;
