import Message from './Components/Message/Message';
import "./App.css";
import MessageBox from './Components/MessageBox/MessageBox';
import { useState } from 'react';

export default function App() {
const [message, setMessage] = useState([]);


const addMessage = (statement)=>{
  setMessage((prev)=>[statement, ...prev]);
}


  return (
    <div>
<Message addMessage ={addMessage} />
<MessageBox message={message} setMessage ={setMessage}/>
</div>
  );
}


