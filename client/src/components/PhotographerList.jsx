import React from 'react'
import axios from 'axios';

const PhotographerList = (props) => {
    return (
        <div>
            {props.photographer.map((Photographer, idx)=>{
                return <p key={idx}>{Photographer.name}</p>
            })}
        </div>
    )
}

export default PhotographerList
