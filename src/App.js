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
    selectedUser : {
      name : "",
      lastname : "",
      description : "",
      age : null,
      imgUrl : ""
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

  handleSelectUser = user =>{
    this.setState({selectedUser : user})
  }

  handleLastName = event =>{
    const {selectedUser } = this.state
    selectedUser.lastName = event.target.value
    this.setState({selectedUser})
  }

  handleName = event => {
    const {selectedUser } = this.state
    selectedUser.name = event.target.value
    this.setState({selectedUser})
  }

  handleDescription = event =>{
    const {selectedUser } = this.state
    selectedUser.description = event.target.value
    this.setState({selectedUser})
  }



  render() {

    return (
      <Fragment>
        {/* <input 
          className="form-control"
          type="text"
          onChange={this.handleOnChange}
          value={this.state.user.description}></input> */}
        
        <div className="d-flex flex-row justify-content-center">
          <ImageCircleC name={this.state.user.name}
                          lastname={this.state.user.lastname}
                          age={this.state.user.age}
                          description={this.state.user.description}
                          imgUrl={this.state.user.imgUrl}
                          buttonName={this.state.buttonName}
                          onClick={()=> this.handleSelectUser(this.state.user)}
                          />
          <ImageCircleC name={this.state.user1.name}
                                lastname={this.state.user1.lastname}
                                age={this.state.user1.age}
                                description={this.state.user1.description}
                                imgUrl={this.state.user1.imgUrl}
                                buttonName={this.state.buttonName}
                                onClick={()=> this.handleSelectUser(this.state.user1)}
                                />
          <ImageCircleC name={this.state.user2.name}
                                lastname={this.state.user2.lastname}
                                age={this.state.user2.age}
                                description={this.state.user2.description}
                                imgUrl={this.state.user2.imgUrl}
                                buttonName={this.state.buttonName}
                                onClick={()=> this.handleSelectUser(this.state.user2)}
                                />

          <ImageCircleC name={this.state.user3.name}
                                lastname={this.state.user3.lastname}
                                age={this.state.user3.age}
                                description={this.state.user3.description}
                                imgUrl={this.state.user3.imgUrl}
                                buttonName={this.state.buttonName}
                                onClick={()=> this.handleSelectUser(this.state.user3)}
                                />
        </div>

        <form className="container">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Prénom" value={this.state.selectedUser.name} onChange={this.handleName}></input>
            <input type="text" className="form-control" placeholder="NOM" value={this.state.selectedUser.lastname} onChange={this.handleLastName}></input>
            <textarea  className="form-control" placeholder="Description" defaultValue={this.state.selectedUser.description} onChange={this.handleDescription}></textarea>
          </div>
        </form>

      </Fragment>
    )
  }

}

export default App;