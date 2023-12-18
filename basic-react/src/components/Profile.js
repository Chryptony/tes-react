import React from 'react';
//lalu profile harus terima dengan tambahkan props di constnya 
// dan harus ada console.log
const Profile = (props) =>{
    // props : sebuah parameter yang diberikan dari parent component
    const { name, hobby} = props
    return ( 
        <div>
            <h3>Hello, {name} </h3>
            <p>Saya suka {hobby} </p>
        </div>
    )
}
export default Profile;