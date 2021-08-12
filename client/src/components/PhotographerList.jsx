import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import photoo from '../images/photoo.jpg'

const useStyles = makeStyles((theme) => ({


  
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    imageList: {
      flexWrap: 'nowrap',
     
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    // ***
    root1: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  }));

  const style ={
    lo:{
        width: "300px",
        hieght: "100px"
    }
}

  
const PhotographerList = (props) => {

  
 
const classes = useStyles();
const {photographer}=props;
// console.log(photographer)
    return (
    <div>
      <center>
      <Card className={classes.root1}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="../images/photoo.jpg"
          title="Photographer"> 
            <img style= {style.lo} src={photoo} alt="PhotoShooter logo" />

          </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {photographer.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" >
            {photographer.address}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Equiped With Talent And Passion We gurantee that everything you Wish Is Materialized In Your Hands 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      
      </CardActions>
    </Card>
    </center>
    <br></br>
      <br></br>
      {/* ****** */}
      {/* style={{width:"426px",height:"640px"}} */}
   <div className={classes.root}>
      <ImageList className={classes.imageList} cols={2.5}>
        {photographer.photo.map((pho) => (
          <ImageListItem key={pho._id}>
            <img src={pho.img} alt={pho.title} /> 
            <ImageListItemBar
              title={pho.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${pho.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>  
    </div>  
  

  )
 }

export default PhotographerList
