import React, {useState} from 'react';
import NowLoading from './NowLoading'
//lalu profile harus terima dengan tambahkan props di constnya 
// dan harus ada console.log
const Profile = (props) =>{ 
    const [users, setUsers] = useState([
        {
          name: "koko",
          hobby: "makan",
        },
        {
          name: "jeni",
          hobby: "minum",
        },
        { 
          name:"tedi",
          hobby:"main game",
        },
        { 
          name:"mardi",
          hobby:"main bola",
        },
        { 
          name:"ardy",
          hobby:"main ps",
        }    
      ])
    // props : sebuah parameter yang diberikan dari parent component
    return ( 
        <div classname="table-profile">
            {/* tabel */}
            <table border="1" cellspacing="0">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>hobby</th>
                    </tr>
                </thead>
                <tbody>
                    {/* 
                    jika array users kosong ===0
                    kita akan tampilkan now loading
                    jika array user lebih dari 0,
                    kita tampilkana users.map
                    
                    let flag = true;
                    if(flag){
                        console.log(1)
                    }else{
                        console.log(0)
                    }
                    // ternary
                    flag ? console.log(1) : console.log(0)
                    */}
                { 
                 users.length !== 0 ?
                 users.map((user,index)=> {
                    const {name, hobby} = user
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{name}</td>
                            <td>{hobby}</td>
                        </tr>
                    )
                }) : 
                <NowLoading/>
                }
                    
                </tbody>
            </table>
            {/* introduction
            <h3>Hello, {name} </h3>
            <p>Saya suka {hobby} </p> */}
        </div>
    )
}
export default Profile;