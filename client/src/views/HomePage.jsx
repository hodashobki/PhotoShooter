
import CreatePhoto from "./CreatePhoto"
import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';
import { Card, CardMedia, Typography, Button, CardActions, CardContent } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from '../components/styles.js';
import Post from "../components/Post"
import { Grid, CircularProgress } from '@material-ui/core';
import homeStyle from './homStyle.js';

const HomePage = ({ setCurrentId }) => {
    const [photo, setPhoto] = useState([]);
    const classes = useStyles();

    console.log(photo);
    return (
        !photo.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {photo.map((Photo) => (
                    <Grid key={photo._id} item xs={12} sm={6}>
                        <Post photo={photo} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default HomePage;