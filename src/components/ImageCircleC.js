import React, {Component} from 'react';
import CustomButton from './CustomButton';
import './ImageCircle.css';

class ImageCircleC extends Component {

    render(){
        const fullname = () => this.props.name + ' ' + this.props.lastname

        return (
            <div class="container" > 
                <img src={this.props.imgUrl} onClick={()=> this.props.onClick()}/>
                <p>{fullname()}</p>
                <p>{this.props.age}</p>
                <p>{this.props.description}</p>
                <CustomButton>
                    {/*<div>
                        <p>Nous sommes en formation !</p>
                        <p>J'envoie un children avec plusieurs</p>
                    </div>*/}
                </CustomButton>
            </div>
        )
    }
}

export default ImageCircleC;