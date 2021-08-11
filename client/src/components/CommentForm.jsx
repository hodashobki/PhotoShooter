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
        <div>
           <Paper elevation={3} style={styles.paper}>
            {text_error.map((err, index) => <p style={{color:"red"}} key={index}>{err}</p>)}
           
            <form onSubmit={onSubmitHandler}>
            <TextField variant="filled" onChange={(e)=>validateText(e.target.value)} value={text}/>
            {error&&
            <p style={{color:"red"}}>{error}</p>
            }
            <Button type="submit" variant="contained" color="primary">
            Comment here
           </Button>
            </form>
            <p>{text}</p>
            </Paper>
            
        </div>
    )
}

export default CommentForm
