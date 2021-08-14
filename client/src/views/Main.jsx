import React,{useEffect,useState} from 'react'
import axios from 'axios';
import PhotoCards from '../components/PhotoCards';

const Main = (props) => {

    const [photos, setPhotos] = useState({});
    // const [photo,setPhotoo]=useState({});
    const [isLoaded, setLoaded] = useState(false);
    const [test, setTest] = useState(false)
    // const [likes,setLikes]=useState(0);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/phots/')
            .then(res=>{
                setPhotos(res.data);
                setLoaded(true);
            });
    },[test]);

    const updatePhotos = (random) => {
        setTest(random);
    }
    return (
        <div>
            <h1>All Of Our Albums</h1>
            {isLoaded ?<PhotoCards photos={photos} updatePhotos={updatePhotos} test={test}/>:<p>loading .......</p>}

            
        </div>
    )
}

export default Main
