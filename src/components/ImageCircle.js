import React from 'react';
import './ImageCircle.css';

// COMPOSANT STATELESS = COMPOSANT FONCTION

const ImageCircle = (props) => {
    // const user = {
    //     name: 'Madalena',
    //     lastname: 'Pavão',
    //     age: '25 ans',
    //     description: "J'aime React :)",
    //     imgUrl: 'https://picsum.photos/id/1014/300/300'
    // }
    console.log(props, " props");
    const {name, lastname, age, description, imgUrl} = props
    
    // const fullname = () => user.name + ' ' + user.lastname  // fonction! 
    const fullname = () => name + ' ' + lastname

    return (
        // <div class="container" > 
        //     <img src={user.imgUrl} />
        //     <p>{fullname()}</p>
        //     <p>{user.age}</p>
        //     <p>{user.description}</p>
        // </div>
    
    <div class="container" > 
            <img src={imgUrl} />
            <p>{fullname()}</p>
            <p>{age}</p>
            <p>{description}</p>
        </div>
    )
}

export default ImageCircle