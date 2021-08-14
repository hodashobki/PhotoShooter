import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import React, { useEffect, useRef, useState } from "react"
import io from "socket.io-client"


const Chatt = (props) => {
    const [ state, setState ] = useState({ message: "", name: "" })
	const [ chat, setChat ] = useState([])

	const socketRef = useRef();

	useEffect(
		() => {
			socketRef.current = io.connect("http://localhost:8000")
			socketRef.current.on("message", ({ name, message }) => {
				setChat([ ...chat, { name, message } ])
			})
			return () => socketRef.current.disconnect(true)
		},[ chat ]);

	const onTextChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value })
	}


	const onMessageSubmit = (e) => {
		const { name, message } = state
		socketRef.current.emit("message", { name, message })
		e.preventDefault()
		setState({ message: "", name })
	}

	const renderChat = () => {
		return chat.map(({ name, message }, index) => (
      
			<div key={index}>
				<h3 style={{color:"blue"}} >
					{name} Say: <span style={{color:"white"}} >{message}</span>
				</h3>
			</div>
		))
	}

	return (
        <center>
		<div >
          
    <h2 style={{color: "white" , backgroundImage :"linear-gradient(to right, #2D37A0,#e55d87)" ,width:"200px" , borderRadius :"7px"}} >Chat</h2>
    <div >
      <div style={{overflow: "scroll",width: "500px",height: "300px"}}>
     <p style={{ marginRight: "500px", padding: "10px", clear: "both", color: 'black', borderRadius: "10px", fontSize: " 15px", width: "350px", backgroundColor: "#CDD4DD"}}>{renderChat()}</p> 
      </div>
    </div>
			<form onSubmit={onMessageSubmit}  >
                <br></br><br></br>
        
        <div style={{display: "flex" , marginLeft :"520px" }} >
				<div className="name-field" >
					<TextField name="name" onChange={(e) => onTextChange(e)} value={state.name} variant="outlined" label="Name" />
				</div>
				<div>
					<TextField
						name="message"
						onChange={(e) => onTextChange(e)}
						value={state.message}
						variant="outlined"
						label="Message"
                        
					/>
				</div>
        </div>
        <br></br><br></br>
				<button style={{backgroundImage :"linear-gradient(to right, #2D37A0,#e55d87)", color:"white" , width :"150px" , height :"30px" ,borderRadius:"7px"}} >Send Message</button>
			</form>
            <br></br><br></br>

		</div>
        </center>
	)
}


export default Chatt
