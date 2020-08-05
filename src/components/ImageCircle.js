import React from 'react';
import './ImageCircle.css';

// COMPOSANT STATELESS = COMPOSANT FONCTION

const ImageCircle = () => {
    const user = {
        name: 'Madalena',
        lastname: 'Pavão',
        age: '25 ans',
        description: "J'aime React :)",
        imgUrl: 'https://picsum.photos/id/1014/300/300'
    }

    const fullname = () => user.name + ' ' + user.lastname  // fonction! 

    return (
        <div class="container" > 
            <img src={user.imgUrl} />
            <p>{fullname()}</p>
            <p>{user.age}</p>
            <p>{user.description}</p>
        </div>
    )
}

export default ImageCircle