import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PhotographerList from '../components/PhotographerList';
const PhotographerDetail = (props) => {
    const [photographer, setphotographer] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/users/" + props.id)
            .then(res =>setphotographer (res.data))
    }, [])


    return (
        <div>
            <p>First Name: {photographer.name}</p>
            <PhotographerList photographer={photographer}/>

        </div>
    )
}

export default PhotographerDetail
