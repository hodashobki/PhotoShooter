import React from 'react'
import './Input.css';

const Input = (props) => {
    const { setMessage, sendMessage, message }=props;
    return (
        <form  onSubmit={ sendMessage} className="form">
        <input
          className="input"
          type="text"
          placeholder="Type a message..."
          value={message}
        //   onChange={(e)=>{setMessage(e.target.value)}}
           onChange={({ target: { value } }) => setMessage(value)}
          onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
        />
        {/* <button className="sendButton" type="submit">Send</button> */}
        <button className="sendButton" onClick={e => sendMessage(e)}>Send</button>
      </form>
    )
}

export default Input
