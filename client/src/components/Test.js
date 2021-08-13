import React from 'react'
import {useState } from 'react'
import axios from 'axios';
import PlayersForm from './PlayersForm';
import { navigate, Link } from '@reach/router';
const CreatePlayer = (props) => {
    const [error, setError]= useState([]);
    const createPlayer = player => {
        axios.post('http://localhost:8000/api/players/addplayer', player)
            .then(res=>{
                navigate("/players/list");
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
            <h3>
                <Link to="/players/list">List</Link>
                |
                <Link to="/players/addplayer">Add Player</Link>
            </h3>
            <br></br>
            <PlayersForm onSubmitProp={createPlayer}  name_error={error} />
            
        </div>
    )
}

export default CreatePlayer