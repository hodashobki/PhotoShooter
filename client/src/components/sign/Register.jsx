// import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import React, { useState } from "react"
// import "./register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Register()  {
    const classes = useStyles();
    // const Register = () => {

        const history = useHistory()
    
        const [ user, setUser] = useState({
            name: "",
            email:"",
            address:"", //lname=address
            password:"",
            reEnterPassword: ""
        })
    
        const handleChange = e => {
            const { name, value } = e.target
            setUser({
                ...user,
                [name]: value
            })
        }
    
        const register = () => {
            const { name, email, address , password, reEnterPassword } = user
            if( name && address && email && password && (password === reEnterPassword)){
                axios.post("http://localhost:8000/api/register", user)
                .then( res => {
                    alert(res.data.message)
                    history.push("/login")
                    // history.push("/login")

                })
                
            } else {
                alert("invlid input")
            }
            
        }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Register
                </Typography>
                {console.log("User", user)}
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="name"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                value={user.name}
                                placeholder="Your Name"
                                onChange={ handleChange }
                                label="Your Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Your address"
                                name="lastName"
                                autoComplete="address"
                                value={user.address}
                                placeholder="Your address" 
                                onChange={ handleChange }
                            />
                        </Grid>
                        {/* <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                            />
                        </Grid> */}
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                value={user.email}
                                 placeholder="Your Email"
                                 onChange={ handleChange }
                                autoComplete="email"
                            />
                        </Grid>

                        {/* <Grid item xs={12}>
                            <TextField
                            autoComplete="address"
                                variant="outlined"
                                required
                                fullWidth
                                id="address"
                                label="Address"
                                name="adress"
                                value={user.address}
                                placeholder="Your address" 
                                onChange={ handleChange }
                                
                            />
                        </Grid> */}
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                value={user.password}
                                 placeholder="Your Password"
                                  onChange={ handleChange }
                                autoComplete="current-password"
                            />
                        </Grid>
                        
                        {/* <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid> */}
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={register}
                    >
                        Register
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2">
                                Already have an account? Log In
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}