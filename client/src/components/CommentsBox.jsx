import { Box } from '@material-ui/core'


const CommentsBox = (props) => {
const{photo}=props;


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
