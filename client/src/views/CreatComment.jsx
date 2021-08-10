import React from 'react'
import {useState } from 'react'
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import CommentForm from '../components/CommentForm';

const CreatComment = (props) => {

    const {idu,idp}=props;
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
    return (
        <div>
           <h1>The Comment Form</h1>
            < CommentForm  onSubmitProp={createComments}  text_error={error}/>
        </div>
    )
}

export default CreatComment
