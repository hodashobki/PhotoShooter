import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";
import CommentForm from "../components/CommentForm";
import { Box, Button } from "@material-ui/core";
import Logo from "../components/Logo";
// import bbbb from "../images/bbbb.jpg";
import Carousel from "react-material-ui-carousel";

const CreatComment = (props) => {
  const { idu, idp, photo } = props;

  // console.log("look here",photo.photo.comments);
  const [error, setError] = useState([]);
  const createComments = (comment) => {
    axios
      .post("http://localhost:8000/api/comment/new/" + idu + "/" + idp, comment)
      .then((res) => {
        // navigate("/"); //navigate to the show comments page
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
      <div style={{  backgroundImage: "linear-gradient(to right, #232526 ,#414345)",color:"white",width: "500px",}}>
          <h2>Comments:</h2>
        <Carousel interval={3500}>
          {photo.photo.comments.map((comment, idx) => (
            <div
              style={{
                borderRadius: "8px",
                width: "100%",
                height: "80px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              
              }}
              key={idx}
            >
              <p>{comment.user.name} :</p>
              <p>{comment.text}</p>
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
          backgroundImage: "linear-gradient(to right, #232526 ,#414345)",
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
