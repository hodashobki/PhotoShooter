import CreateComment from '../views/CreatComment'
import React,{useState,useEffect} from 'react'
import axios from 'axios'

const PhotoDetails = (props) => {
    const {idp}=props
    const [photo, setPhoto] = useState([]);
    const [loaded, setLoaded] = useState(false);

  

    useEffect(() => {
        axios.get("http://localhost:8000/api/phots/"+idp)
        .then(res => {
            setPhoto(res.data);
            setLoaded(true);
        })
        .catch(err => console.log(err));

    }, [props.idp]);

    return (
        <div >

            {loaded && <CreateComment photo={photo} id={idp} />}
            
        </div>
        
    )
}

export default PhotoDetails
