import React from 'react';
import './ImageCircle.css';

// COMPOSANT STATELESS = COMPOSANT FONCTION

const ImageCircle = (props) => {  // ou {name, lastname, imgUrl, description} et les accedons directement
    // const user = {
    //     name: 'Madalena',
    //     lastname: 'Pavão',
    //     age: '25 ans',
    //     description: "J'aime React :)",
    //     imgUrl: 'https://picsum.photos/id/1014/300/300'
    // }
    console.log(props, " props");
    const {name, lastname, age, description, imgUrl} = props
    //Ou si nous ne voulons pas definir props, on peu acceder aus champs automatiquement avec props.name, props.age, ...
    
    // const fullname = () => user.name + ' ' + user.lastname  // fonction! 
    const fullname = () => name + ' ' + lastname

    return (
        // <div class="container" > 
        //     <img src={user.imgUrl} />
        //     <p>{fullname()}</p>
        //     <p>{user.age}</p>
        //     <p>{user.description}</p>
        // </div>
    
    // <div class="container" > 
    //         <img src={imgUrl} />
    //         <p>Nom: {fullname()}</p>
    //         <p>Age: {age}</p>
    //         <p>Description: {description}</p>
    //     </div>
 
    <div class="container" > 
        <img src={imgUrl} />
        <p>Nom: {fullname()}</p>
        <p>Age: {age}</p>
        <p>Description: {description}</p>
        <p><input type="text" placeholder="Prénom NOM" value={fullname()}></input></p>
        <p><input type="text" placeholder="Age" value={age}></input></p>
        <p><input type="text" placeholder="Description" value={description}></input></p>
    </div>
    )
}

export default ImageCircle