import React, { useEffect, useState } from 'react'
import axios from 'axios';
const PhotographerDetail = (props) => {
    const [photographer, setphotographer] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/users/" + props.id)
            .then(res =>setphotographer (res.data))
    }, [])


    return (
        <div>
            <p>First Name: {photographer.firstName}</p>
            <p>Last Name: {photographer.lastName}</p>
        </div>
    )
}

export default PhotographerDetail
