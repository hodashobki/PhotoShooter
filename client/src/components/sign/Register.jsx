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
import { navigate } from '@reach/router';
// import "./register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"


const useStyles = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // backgroundColor: "white",

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

export default function Register() {
    const classes = useStyles();
    // const Register = () => {

    const history = useHistory()

    const [user, setUser] = useState({
        name: "", //fname=name
        email: "",
        address: "", //lname=address
        password: "",
        confirmPassword: ""
    })

    const handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = (e) => {
        e.preventDefault();
        // const { name, address, email, password, reEnterPassword } = user
        // if (name && address && email && password && (password === reEnterPassword)) {
        axios.post("http://localhost:8000/api/register", user)
            .then(res => {
                console.log("asd")
                // alert(res.data.message)
                // history.push("/login")

                // history.push("/login")

            })
            .then(navigate("/"))
            .catch(err => console.log(err))
        // .catch(alert("invlid input"))

    }
    // } else {
    //     alert("invlid input")
    // }

    // const already=() =>{
    //     history.push("/login")

    // }

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
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="name"
                                name="name"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                value={user.name}
                                placeholder="Your Name"
                                onChange={handleChange}
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
                                name="address"
                                autoComplete="address"
                                value={user.address}
                                placeholder="Your address"
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="confirmPassword"
                                label="confirm Password"
                                type="password"
                                id="password"
                                value={user.confirmPassword}
                                placeholder="confirm Password"
                                onChange={handleChange}
                                autoComplete="confirmPassword"
                            />
                        </Grid>

                        {/* <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid> */}
                    </Grid>
                    <br></br>
                    {/* <br></br> */}
                    <Link  >

                        <input type="submit" className="submit" value="Register" style={{backgroundColor:"darkBlue", color:"white", width:"150px", height:"30px",borderBlockColor: "darkBlue", borderRadius:"7px"}} onClick={(e) => register(e)} />
                    </Link>
                </form>
                {/* <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={register}
                    >
                        Register
                    </Button> */}
                <Grid container justifyContent="flex-end">
                    <Grid item>
                        <Link onClick={() => navigate("/login")} variant="body2">
                            Already have an account? Log In
                        </Link>
                    </Grid>
                </Grid>

            </div>
        </Container>
    );
}