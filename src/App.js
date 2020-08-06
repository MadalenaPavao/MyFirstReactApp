import React, { Fragment, Component } from 'react';
import './App.css';
// import ImageCircle from './components/ImageCircle';
import ImageCircleC from './components/ImageCircleC';
import CustomButton from './components/CustomButton';

class App extends Component {

  descriptionHidden = false;
  buttonName = "Show description"
  
  state = {
    users : {
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
      }
    },
    selectedUser : {
      name : "",
      lastname : "",
      description : "",
      age : 0,
      imgUrl : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
    },
    buttonName : "Show description",
    descriptionHidden : false
    
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
    selectedUser.lastname = event.target.value
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

  createUser = ()=>{
    const {users} = this.state
    users[`user-${Date.now()}`] = this.state.selectedUser
    this.setState({users})
  }

  deleteUser = keyValue=>{
    console.log('deleteuser');
    const {users} = this.state
    delete this.state.users[keyValue]
    this.setState({users})
  }

  showHideDescription = () => {
    // const {descriptionHidden, buttonName} = this.state
    this.descriptionHidden = !this.descriptionHidden;
    if(this.descriptionHidden) 
      this.buttonName = "Show description";
    else
      this.buttonName = "Hide description";
  }    
  

  render() {
    const listUsers = Object.keys(this.state.users)
    .map((keyValue, index) => (
      <ImageCircleC key={index} 
                    name={this.state.users[keyValue].name}
                    lastname={this.state.users[keyValue].lastname}
                    age={this.state.users[keyValue].age}
                    description={this.state.users[keyValue].description}
                    imgUrl={this.state.users[keyValue].imgUrl}
                    buttonName={this.state.buttonName}
                    onClick={()=> this.handleSelectUser(this.state.users[keyValue])}
                    showHideDescription={this.showHideDescription}
                    descriptionHidden={this.descriptionHidden}
                    deleteUserHandler={()=>this.deleteUser(keyValue)}
                    />
    ))

    return (
      <Fragment>
        {/* <input 
          className="form-control"
          type="text"
          onChange={this.handleOnChange}
          value={this.state.user.description}></input> */}
        
        <div className="d-flex flex-row justify-content-center">
        {listUsers}
          {/* <ImageCircleC name={this.state.user.name}
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
                                /> */}
        </div>

        {/* <form className=""> */}
          <div className="form-group container">
            <input type="text" className="form-control" placeholder="Prénom" value={this.state.selectedUser.name} onChange={this.handleName}></input>
            <input type="text" className="form-control" placeholder="NOM" value={this.state.selectedUser.lastname} onChange={this.handleLastName}></input>
            <textarea className="form-control" placeholder="Description" defaultValue={this.state.selectedUser.description} onChange={this.handleDescription}></textarea>
            <CustomButton buttonName="Créer utilisateur" onClickHandler={this.createUser}></CustomButton>
          </div>
          
        {/* </form> */}

      </Fragment>
    )
  }

}

export default App;