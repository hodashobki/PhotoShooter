import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, Paper } from '@material-ui/core';



const CommentForm = (props) => {

    const {onSubmitProp, text_error}= props;
    const [com, setCom] = useState("");
    const [person,setPerson]=useState("");
    const [error, setError]= useState(" ");
    const [error2, setError2]= useState(" ");

    const onSubmitHandler = e => {
        e.preventDefault();
        if(validateText(com) && validatePerson(person)){
            console.log("i am in the on submit "+ com+ ""+ person)
            onSubmitProp({com,person});
            setCom("");
            setPerson("");
        } 
    }
    const validateText=(value)=>{
        setCom(value);
        if(value===""){
            setError("You can't add an empty comment");
            return false;
        }
        else{
            setError("")
            return true;
        }
    }

    const validatePerson=(value)=>{
        setPerson(value);
        if(value===""){
            setError2("You can't add a comment without your name");
            return false;
        }
        else{
            setError2("")
            return true;
        }
    }
    return (
        <div >
            
            {text_error.map((err, index) => <p style={{color:"red"}} key={index}>{err}</p>)}
           
            <form onSubmit={onSubmitHandler} >

            <TextField style={{width:"100%"}} id="standard-basic" label="Comment" onChange={(e)=>validateText(e.target.value)} value={com}/>
            {error&&
            <p style={{color:"red"}}>{error}</p>
            }           
            <TextField style={{width:"100%"}} id="standard-basic" label="Your Name" onChange={(e)=>validatePerson(e.target.value)} value={person}/>
            {error2&&
            <p style={{color:"red"}}>{error2}</p>
            }
            <Button style={{display:"block"}} type="submit" variant="contained" color="primary">
            Comment
           </Button>
           
            </form>
        </div>
    )
}

export default CommentForm
