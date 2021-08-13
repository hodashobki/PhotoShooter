import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 600,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));
  

const PhotoCards = (props) => {
   
    const {photos}=props;
    const [like,setLikes]=useState(0);
    const [photoo,setPhotoo]=useState({});
   
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

  const addToLikes=(id)=>{
    //  var likedphoto=photos.filter(photo=>photo._id===id)
    //    setPhotoo(likedphoto[0]);
    //   photoo.like=0;
    //   axios.put("http://localhost:8000/api/update/"+id,photos)
    //   .then(res=>{})
    let increment=like+1;
            
          setLikes(increment);
        
 
  }
    return (
        <div>
            <div>
            <center>
           {photos.map((photo)=>{
               return(

                <Card key={photo._id} className={classes.root}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      A
                    </Avatar>
                    
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
               
                  title={photo.title}
                  
                //   subheader={photo.user.name}
                />
                {/* {"/edit/"+auth._id} */}
                <Link to={"/photo/"+photo._id}><CardMedia
                  className={classes.media}
                  image={photo.img}
                  title="Paella dish"
                >
                </CardMedia></Link>
                <Link to={"/photographer/"+photo.user._id}><CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                  {photo.user.name}
                  </Typography>
                </CardContent></Link>
                
                {/* <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                   {photo.like}
                  </Typography>
                </CardContent> */}
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                   {photo.desc}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites"
                   onClick={(e)=>{addToLikes(photo._id)}}>
                    <FavoriteIcon />
                  </IconButton>
                
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>
                     {photo.desc}
                    </Typography>
                    </CardContent>
                </Collapse>
              </Card>
              
               );
               
               
           })}
           <br></br>
           <br></br> 
           </center>
           </div>
           
        </div>
    )
}

export default PhotoCards
