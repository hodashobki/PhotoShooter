import React from 'react'
import {useState } from 'react'
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import PhotoForm from "../components/PhotoForm";

const CreatePhoto = (props) => {

    const [error, setError]= useState([]);
    const {uid}=props;
    const createPhoto = photo => {
        axios.post('http://localhost:8000/api/phots/new/'+uid,photo)
            .then(res=>{
                navigate("/");//This will navigate user to the main page,where he will see his photo
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
            <h1>Share with us your Photo</h1>
            <PhotoForm onSubmitProp={createPhoto}  photo_error={error}/>
        </div>
    )
}

export default CreatePhoto
