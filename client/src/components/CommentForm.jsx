import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, Paper } from '@material-ui/core';

const styles = {
    paper: {
        width: "50rem", padding: "1rem"
    },
    input: {
        marginBottom: "1rem"
    },
    button: {
        width: "50%"
    }
}

const CommentForm = (props) => {

    const {onSubmitProp, text_error}= props;
    const [text, setText] = useState("");
    const [error, setError]= useState(" ");

    const onSubmitHandler = e => {
        e.preventDefault();
        if(validateText(text)){
            onSubmitProp({text});
            setText("");
        } 
    }
    const validateText=(value)=>{
        setText(value);
        if(value===""){
            setError("Error: you must not Commet an empty field");
            return false;
        }
        else{
            setError("")
            return true;
        }
    }
    return (
        <div >
            
            {text_error.map((err, index) => <p style={{color:"red"}} key={index}>{err}</p>)}
           
            <form onSubmit={onSubmitHandler}>
            <TextField style={{width:"100%"}} variant="filled" onChange={(e)=>validateText(e.target.value)} value={text}/>

            <Button style={{display:"block"}} type="submit" variant="contained" color="primary">
            Comment
           </Button>
           {error&&
            <p style={{color:"red"}}>{error}</p>
            }
            </form>
        </div>
    )
}

export default CommentForm
