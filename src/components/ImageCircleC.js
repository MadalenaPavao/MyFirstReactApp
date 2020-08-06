import React, {Component} from 'react';
import CustomButton from './CustomButton';
import './ImageCircle.css';

class ImageCircleC extends Component {

    render(){
        const fullname = () => this.props.name + ' ' + this.props.lastname
        return (
            <div className="container" > 
                <img src={this.props.imgUrl} onClick={()=> this.props.onClick()} width="200" height="200"/>
                <p>{fullname()}</p>
                <p>{this.props.age}</p>
                <p hidden={this.props.descriptionHidden}>{this.description}</p>
                <CustomButton buttonName={this.props.buttonName} onClickHandler={this.props.showHideDescription}>
                    {/*<div>
                        <p>Nous sommes en formation !</p>
                        <p>J'envoie un children avec plusieurs</p>
                    </div>*/}
                </CustomButton>
                <CustomButton buttonName="Supprimer utilisateur" onClickHandler={this.props.deleteUserHandler}></CustomButton>
            </div>
        )
    }
}

export default ImageCircleC;