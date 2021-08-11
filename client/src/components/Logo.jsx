import React from 'react'
import logo from '../images/logo.png'

const Logo = () => {

    const style ={
        lo:{
            width: "200px",
            hieght: "100px"
        }
    }
    return (
        <div>
            <a href="/"><img style={style.lo} src={logo} alt="PhotoShooter logo" /></a>
            
        </div>
    )
}

export default Logo
