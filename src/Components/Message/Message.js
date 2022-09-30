import React, {useState}from "react";
import './Message.css';
export default function Message(props){
 
   
   const [text, setText] = useState('');

   const handleChange = (event) =>{
    setText(event.target.value)
   }

   const handleSubmit = (event) =>{
    setText(event.preventDefault());
   
         if(text.length > 0){
        props.addMessage(text);
        setText('');
    }
   }

    return(
        
<header className='message'>
  <form className='messageForm'  onSubmit = {handleSubmit}>
    <input className='textbox' type='text' onChange={handleChange} value = {text} />
    <input className='submitButton'type= 'submit' value='Add'/>
</form>
</header>



    );
}