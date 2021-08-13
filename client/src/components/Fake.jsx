// import React from 'react';
// import { Card, CardMedia, Typography, Button, CardActions, CardContent } from '@material-ui/core';
// // import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
// // import DeleteIcon from '@material-ui/icons/Delete';
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
// import moment from 'moment';
// import useStyles from './style.js';
// import { useEffect, useState } from 'react';
// import { Link } from '@reach/router';
// import axios from 'axios';
// // import { deletePost, likePost } from '../../../actions/posts.js';
// // import { useDispatch } from 'react-redux';


// const Post = ({ phot, setCurrentId }) => {
//     const classes = useStyles();
//     // const dispatch = useDispatch();
//     const [photo, setPhoto] = useState({
//         title: "",
//         desc: "",
//         selectedFile: "",
//     });
//     const [error, setError] = useState({});
//     // const {uid}=props;
//     // const [viewed, setViewed] = useState(false); //loded
//     const [loaded, setLoaded] = useState(false); //loded
//     const [photos, setPhotos] = useState([]);


//     const handleOnSubmit = (e) => {
//         e.preventDefault();

//         axios.post('http://localhost:8000/api/phots/new/',photo) //+uid
//             .then((res) => {
//                 console.log(res.data);
//                 if (res.data.errors) {
//                     setError(res.data.errors);
//                 }
//                 else {
//                     // setViewed(true); // =setLoded
//                     setLoaded(true);
//                 }
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }

//     useEffect(() => {
//         axios.get("http://localhost:8000/api/phots")
//             .then((res) => {
//                 console.log(res.data);
//                 setPhotos(res.data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }, [loaded]); //loded

//     const afterDelete = (deletedPhotoById) => {
//         let filterPhoto = photos.filter((photo) => {
//             return photo._id !== deletedPhotoById;
//         });
//         setPhotos(filterPhoto);
//     }

//     return (
//         <Card className={classes.card}>
//             <CardMedia className={classes.media}  />
//             {/* image={phot.selectedFile} title={phot.title} */}
//             <div className={classes.overlay}>
//                 <Typography variant="h6">
//                     {/* {phot.user} */}
//                 </Typography>

//                 <Typography variant="body2">
//                     {/* {moment(phot.createdAt).fromNow()} */}
//                 </Typography>
//             </div>
//             {/* <div className={classes.overlay2}>
//                 <Button
//                     style={{ color: 'white' }}
//                     size="small"
//                     onClick={() => setCurrentId(phot._id)}
//                 >
//                     <MoreHorizIcon fontSize="medium" />
//                 </Button>
//             </div> */}
//             <div className={classes.details}>
//                 <Typography variant="body2" color="textSecondary">
//                     {/* {phot.desc.map((desc) => `#${desc} `)} */}
//                 </Typography>
//             </div>
//             <Typography className={classes.title} variant="subtitle1" gutterBottom>
//                 {/* {phot.title} */}
//             </Typography>
//             <CardContent>
//                 <Typography variant="body2" color="textSecondary">
//                     {/* {phot.desc} */}
//                 </Typography>
//             </CardContent>
//             {/* <CardActions className={classes.cardActions}>
//                 <Button size="small" color="primary" onClick ={() => dispatch(likePost(post._id))}>
//                     <ThumbUpAltIcon fontSize="small"/>
//                     &nbsp;{phot.likeCount}
//                     &nbsp;Likes
//                 </Button>

//                 <Button size="small" color="primary" onClick ={() => dispatch(deletePost(post._id))}>
//                     <DeleteIcon fontSize="small"/>
//                     Delete
//                 </Button>
//             </CardActions> */}
//         </Card>
//     );
// }

// export default Post;