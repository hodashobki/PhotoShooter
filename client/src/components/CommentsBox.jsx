import { Box } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import axios from 'axios'

const CommentsBox = (props) => {
    const [photo, setPhoto] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/phots/"+ props._id)
        .then(res => {
            setPhoto(res.data);
        })
        .catch(err => console.log(err));

    }, []);


    return (
        <div>
            <Box>
            {photo.comments.map((comment, idx)=>{
                return <div style={{width:"100%", height:"80px" ,boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}} key={idx}></div> 
                
            })}
            </Box>
            
        </div>
    )
}

export default CommentsBox
