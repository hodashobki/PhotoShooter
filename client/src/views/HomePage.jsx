import CreatePhoto from "./CreatePhoto"
import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';
import { Card, CardMedia, Typography, Button, CardActions, CardContent } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles.js';
// import { deletePost, likePost } from '../../../actions/posts.js';
// import { useDispatch } from 'react-redux';



const AllPhoto = (props, setCurrentId) => {
    const classes = useStyles();

    const [photo, setPhoto] = useState({
        title: "",
        desc: "",
        selectedFile: "",
    });
    const [error, setError] = useState({});
    const { uid } = props;
    // const [viewed, setViewed] = useState(false); //loded
    const [loaded, setLoaded] = useState(false); //loded
    const [photos, setPhotos] = useState([]);


    const handleOnSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/phots/new/' + uid, photo)
            .then((res) => {
                console.log(res.data);
                if (res.data.errors) {
                    setError(res.data.errors);
                }
                else {
                    // setViewed(true); // =setLoded
                    setLoaded(true);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/phots")
            .then((res) => {
                console.log(res.data);
                setPhotos(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [loaded]); //loded

    const afterDelete = (deletedPhotoById) => {
        let filterPhoto = photos.filter((photo) => {
            return photo._id !== deletedPhotoById;
        });
        setPhotos(filterPhoto);
    }
    //     return (
    //         <div>
    //             < hr style={{ marginBottom: "60px" }} />
    //             {/* <CreatePhoto photo={photo} setPhoto={setPhoto} error={error} handleSubmit={handleOnSubmit} submitButton={"please Add Photo"}

    //             /> */}
    //             <h1>All Photo:</h1>
    //             {
    //                 photos.map((photo, index) => {
    //                     return (
    //                         <div key={index} className="single">
    //                             <Link to={"/photo/" + photo._id}>
    //                                 {photo.title}
    //                             </Link>
    //                             {photo.desc}
    //                             {/* <Delete id={photo._id} afterDelete={afterDelete} /> */}
    //                         </div>
    //                     )
    //                 })
    //             }
    //         </div>
    //     )
    // }
    return (
        // <h1>All Photo:</h1>
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={photo.selectedFile} />

            {/* image={phot.selectedFile} title={phot.title} */}
            {
                photos.map((photo, index) => {
                    return (
                        <div key={index} className="single">
                            <div className={classes.overlay}>
                                <Typography variant="h6">
                                    <Link to={"/photo/" + photo._id}>
                                        {photo.title}
                                        {/* {photo.selectedFile} */}
                                    </Link>
                                </Typography>
                            </div>
                            <Typography variant="body2">
                                {moment(photo.createdAt).fromNow()}
                            </Typography>
                            <div className={classes.details} >
                                <Typography variant="body2" color="textSecondary">
                                    {photo.desc}
                                    {/* {phot.desc.map((desc) => `#${desc} `)} */}
                                </Typography>
                            </div>

                            {/* <Delete id={photo._id} afterDelete={afterDelete} /> */}
                            <Typography className={classes.title} variant="subtitle1" gutterBottom>
                                {photo.title}
                            </Typography>
                            <CardContent>
                                <Typography variant="body2" color="textSecondary">
                                    {photo.desc}
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.cardActions}>
                                {/* <Button size="small" color="primary" onClick ={() =>likePost(photo._id)}>
                    <ThumbUpAltIcon fontSize="small"/>
                    &nbsp;{photo.likeCount}
                    &nbsp;Likes
                </Button> */}

                                <Button size="small" color="primary" onClick={() => afterDelete(photo._id)}>
                                    <DeleteIcon fontSize="small" />
                                    Delete
                                </Button>
                            </CardActions>
                        </div>
                    )
                })
            }

        </Card>
    );
}

export default AllPhoto;



