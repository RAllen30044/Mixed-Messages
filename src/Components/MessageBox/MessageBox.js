import React, { useState } from 'react';
import './MessageBox.css';


export default function MessageBox(props){
const { message} =props;
const [statement, setStatement] = useState('');

const randomMessage = ()=>{
        
   return Math.floor(Math.random()*message.length);
}

const handleSubmit = (event) =>{
    setStatement(event.preventDefault())
    if(message.length > 0){
     setStatement(message[Math.floor(Math.random()*message.length)])
    }
}



    return(
        <div className='flexContainer'>
        <div className='outerBox'>
            <form className='randomMessage' onSubmit={handleSubmit}>
                <label>Click to see a random Message</label>
                <input className='executeButton'type= 'submit' value='Execute'/>
            </form>
            <div className = 'innerBox'>
            <p className='message'>{statement}</p>
            </div>
        </div>
        </div>
    )
}