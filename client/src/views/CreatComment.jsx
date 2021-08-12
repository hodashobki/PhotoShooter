import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import CommentForm from '../components/CommentForm';
import { Box } from '@material-ui/core';
import Logo from '../components/Logo';


const CreatComment = (props) => {


    const {idu,idp,photo}=props;
    
    // console.log("look here",photo.photo.comments);
    const [error, setError]= useState([]);
    const createComments =  comment => {
        axios.post('http://localhost:8000/api/comment/new/'+idu+"/"+idp, comment)
            .then(res=>{
                // navigate("/"); //navigate to the page where the photo is displayed
            })
            .catch(err=>{
              const errorResponse = err.response.data.errors; // Get the errors from err.response.data
              const errorArr = []; // Define a temp error array to push the messages in
              for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                  errorArr.push(errorResponse[key].message)
              }
              // Set Errors
              setError(errorArr);
          })   

    }
    console.log(photo.photo)

    return (
        <div>
            <Box style= {{width:"500px" , height:"500px" ,backgroundColor:"#e0e0e0", marginLeft:"10px", overflowY:"scroll"}}>

            {photo.photo.comments.map((comment, idx)=>
                 <div style={{width:"100%", height:"80px" ,boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}} key={idx}>
                     <p>{comment.user.name}</p>
                    <p>{comment.text}</p>
                </div> 
                
            )}


            </Box>
            <div style= {{width:"500px" ,backgroundColor:"#e0e0e0", marginLeft:"10px"}}>
            < CommentForm onSubmitProp={createComments}  text_error={error}/>

            </div>

            
        </div>
    )
}

export default CreatComment
