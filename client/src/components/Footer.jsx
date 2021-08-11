import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { navigate } from '@reach/router';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles,createTheme } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Logo from './Logo';
import Button from '@material-ui/core/Button'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';


const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,

  },

  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const facebook = (e)=> {
  e.preventDefault();
  navigate("/")
}

const instagram = (e)=> {
  e.preventDefault();
  navigate("/")
}

const twitter = (e)=> {
    e.preventDefault();
    navigate("/")
  }

export default function SearchAppBar() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" style = {{ backgroundImage: "linear-gradient(to right, #232526,#414345)", marginTop: "auto", alignItems: "center"  }}>
        <Toolbar style = {{alignItems: "center" }}>
          <div style = {{ width: "150px", display:"flex" ,justifyContent:"space-between" }}>
              <FacebookIcon onClick={facebook}/>
              <InstagramIcon onClick={instagram}/>
              <TwitterIcon onClick={twitter}/>
          </div>
          

        </Toolbar>
        <p style = {{ display: "block" }}>© 2021 - 2022</p>
      </AppBar>
    </div>
  );
}
