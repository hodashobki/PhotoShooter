import React, { useState } from 'react'
import { useEffect } from 'react'
import { TextField,Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import FileBase64 from 'react-file-base64';
import Cookies from 'js-cookie';

import {
     Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
     Button
} from '@material-ui/core';
import { navigate } from '@reach/router';
import { Redirect } from '@reach/router';
const styles = {
    paper: {
        width: "50rem", padding: "1rem"
    },
    input: {
        marginBottom: "1rem"
    },
    button: {
        width: "100%"
    }
}

const PhotoForm = (props) => {
    // const classes = useStyles();
    const { onSubmitProp, photo_error } = props;
    const [desc, setDesc] = useState("");
    const [img, setImg] = useState("");
    const [title, setTitle] = useState("");
    const [descerror, setDescError] = useState("");
    const [imgerror, setimgerror] = useState("");
    const [titleerror, setTittleError] = useState("");
    const [like, setLike] = useState(0);
    // const [postData, setPostData] = useState({
    //     user: '',
    //     title: '',
    //     desc: '',
    //     like: '',
    //     selectedFile: ''
    // });


    // (value===""
    const titleValidation = (value) => {
        setTitle(value);
        if (value.length < 1 && value.length !== 0) {
            setTittleError("you must not leave the Title field Empty");
            return false;
        }
        else if (value.length < 3 && value.length !== 0) {
            setTittleError("Title Must be 3 characters at least");
            return false;
        }
        else {
            setTittleError("");
            return true;
        }
    }
    const imgValidation = (value) => {
        setImg(value);
        if (value === "") {
            setimgerror("you must not leave the Image field Empty");
            return false;
        }
        else {
            setimgerror("");
            return true;

        }
    }
    const descValidation = (value) => {
        setDesc(value);
        if (value.length < 1 && value.length !== 0) {
            setDescError("you must not leave the Description field Empty");
            return false;
        }
        else if (value.length < 5 && value.length !== 0) {
            setDescError("description Must be 5 characters at least");
            return false;
        }
        else {
            setDescError("");
            return true;
        }
    }
    const onSubmitHandler = e => {
        e.preventDefault();
        if (titleValidation(title) && imgValidation(img) && descValidation(desc)) {
            onSubmitProp({ title, img, desc });
            setTitle("");
            setImg("");
            setDesc("");
        }
        // else {
        //     alert("You can not submit");
        // }
    }
   

    return (

    
        
        <div style={{alignItems:"left",display: "flex",
        alignItems: "center"}}>

            {photo_error.map((err, index) => <p key={index}>{err}</p>)}
            <Paper elevation={3} style={styles.paper}>   {/* className={classes.paper} */}
                <h3>Create your album</h3>
                <form autoComplete="off" noValidate onSubmit={onSubmitHandler}>
                    <br></br>
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel >Title of your Photo</InputLabel>
                        <OutlinedInput type="text" onChange={(e) => titleValidation(e.target.value)} value={title} />
                        {titleerror &&
                            <p style={{ color: "red" }}>{titleerror}</p>}
                    </FormControl>
                    <br></br>

                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel>Your Photo URL </InputLabel>
                        <OutlinedInput type="text" onChange={(e) => imgValidation(e.target.value)} value={img} />
                        {imgerror && <p style={{ color: "red" }}>{imgerror}</p>}
                    </FormControl>
                    <br></br>
                    {/* <div >
                        <FileBase64
                            type="file"
                            multiple={false}
                            onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                    </div> */}
                    
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel>Describe the Photo</InputLabel>
                        <OutlinedInput type="text" onChange={(e) => descValidation(e.target.value)} value={desc} />
                        {descerror && <p style={{ color: "red" }}>{descerror}</p>}
                    </FormControl>
                    {/* <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} /> */}

                    <br></br>
                    <Button type="submit" variant="contained" color="primary">
                        Create your album
                    </Button>


                </form>
            </Paper>
        </div>

    )
}

export default PhotoForm
