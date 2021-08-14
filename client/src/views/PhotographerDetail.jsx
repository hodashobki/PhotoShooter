import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PhotographerList from '../components/PhotographerList';
const PhotographerDetail = (props) => {
    const [photographer, setphotographer] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
        console.log(props.id)
        axios.get("http://localhost:8000/api/users/" + props.id)
            .then(res => {
                console.log(res.data.user.photo)
                setphotographer (res.data.user);
                setIsLoaded(true);
            })
    }, [])


    return (
        <div>
            {/* <p>First Name: {photographer.name}</p> */}
            {isLoaded ? <PhotographerList photographer={photographer}/> : <p>loading...</p>}

        </div>
    )
}

export default PhotographerDetail
