import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";
import CommentForm from "../components/CommentForm";
import { Box, Button } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";

const CreatComment = (props) => {
  const {id, photo } = props;
  const [error, setError] = useState([]);
  const createComments = (comment) => {
   
    axios.post("http://localhost:8000/api/comment/" + id, comment)
      .then((res) => {
       
        navigate("/photo/"+id); //navigate to the show comments page
      })
      .catch((err) => {
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) {
          // Loop through all errors and get the messages
          errorArr.push(errorResponse[key].message);
        }
        // Set Errors
        setError(errorArr);
      });
  };

  const photographer = (e) => {
    e.preventDefault();
    navigate("/photographer/" + photo.photo.user._id);
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div style={{ borderRadius: "15px", color:"white",width: "500px", display: "flex",
  flexDirection: "column",
  justifyContent: "space-between"}}>
          <h2>Comments:</h2>
       
          <Carousel interval={3500}>
       
          
          {photo.photo.comments.map((comment, idx) => (
            <div
              style={{
                backgroundImage: "linear-gradient(to right, #232526 ,#414345)",
                borderRadius: "8px",
                width: "100%",
                height: "150px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              
              }}
              key={idx}
            >
              <p>{comment.person} :</p>
              <br></br>
              <p>{comment.com}</p>
            </div>
          ))}
        </Carousel>
        <div style={{ width: "100%", backgroundColor: "white" }}>
          <CommentForm onSubmitProp={createComments} text_error={error} />
        </div>
      </div>

      <div
        style={{
          width: "500px",
         
          color: "white",
        }}
      >
        <h1>{photo.photo.title}</h1>
        <img
          style={{
            borderRadius: "8px",
            width: "400px",
            height: "300px",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
          src={photo.photo.img}
        />
        <h5>{photo.photo.desc}</h5>
        <p style={{ display: "inline-block" }}>Photographer :</p>
        <Button
          style={{ display: "inline-block", color: "white" }}
          onClick={photographer}
        >
          {photo.photo.user.name}
        </Button>
      </div>
    </div>
  );
};

export default CreatComment;
