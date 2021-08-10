import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

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
        <div>
            {text_error.map((err, index) => <p style={{color:"red"}} key={index}>{err}</p>)}
            <form onSubmit={onSubmitHandler}>
            <TextField variant="filled"   onChange={(e)=>validateText(e.target.value)} value={text}/>
            <Button type="submit" variant="contained" color="primary">
            Comment here
           </Button>
            </form>
            
        </div>
    )
}

export default CommentForm
