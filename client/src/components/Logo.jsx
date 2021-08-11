import React from 'react'
import logo from '../images/logo.png'
import { navigate } from '@reach/router';


const Logo = () => {

    const style ={
        lo:{
            width: "200px",
            hieght: "100px"
        }
    }

    const home = (e)=> {
        e.preventDefault();
        navigate("/")
      }


    return (
        <div>
            <img style={style.lo} src={logo} alt="PhotoShooter logo" onClick={home} />
            
        </div>
    )
}

export default Logo
