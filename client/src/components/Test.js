import React,{useState,useEffect} from 'react'
import { Link } from '@reach/router';
import { navigate } from '@reach/router';
import {Button} from '@material-ui/core';
import axios from 'axios';
import moment from "moment";


const Main = (props) => {
    const [items,setItem]=useState([]);
    const [inprograss,setInprograss]=useState([]);
    const [completed,setCompleted]=useState([]);
    const [proj,setProj]=useState({});
    var thedate="2021-08-08";

useEffect(()=>{
    axios.get("http://localhost:8000/api/items")
    .then(res=>setItem(res.data.items),

   )

    
    .catch((err)=>console.log(err))
}, [items])





const directToProgress=(id)=>{
   
    var newarr=items.filter(item=>item._id===id
        )
        setProj(newarr[0]);
        
        proj.status="progress";
        console.log(proj);
        setProj(proj)
        axios.put("http://localhost:8000/api/items/update/"+id,proj)
        .then(res=>setProj({}))
}


const directToComplete=(id)=>{
   var newarrayCopmlete=items.filter(item=>item._id===id)
   setProj(newarrayCopmlete[0]);
   proj.status="completed";
   setProj(proj)
   axios.put("http://localhost:8000/api/items/update/"+id,proj)
        .then(res=>setProj(proj))
}

// *****Delete*****

const deleteHandler=(id)=>{
    axios.delete("http://localhost:8000/api/items/delete/"+id)
    .then(()=>setItem(items.filter(item=>item._id !==id)))
    .catch((err)=>console.log(err))
}
 
    return (
        <div>
            <Link to="/form">Form</Link>
            <h1>Project Manager</h1>

            <div style={{display:"flex" ,justifyContent:"space-between"}}>
                <div style={{border:"1px solid black" ,width:"450px"}}>
                    <h2 style={{backgroundColor:"rgb(159,197,248)"}}>Baklog</h2>
                {items.map((item,i)=>{
                    return(
                       <div>{item.status==="backlog"?
                        <div key={item._id} style={{border:"1px solid black"}}>
                            <h2>{item.name}</h2>
                            { moment(item.date).isAfter(thedate)?<p>{item.date} </p>:<p style={{color:"red"}}>{item.date} </p>}
                           
                            <Button onClick={e => {directToProgress(item._id)} } variant="contained" >
                            Start Project
                            </Button>
                        </div>
                        :<div></div>}
               
                        </div> 
                        
                    );
                })}
                </div>
                <div style={{border:"1px solid black" ,width:"450px"}}>
                    <h2 style={{backgroundColor:"rgb(255,229,153)"}}>Progress</h2>
                {items.map((item,i)=>{
                    return(
                       <div>{item.status==="progress"?
                        <div key={item._id} style={{border:"1px solid black"}}>
                            <h2>{item.name}</h2>
                            <p>{item.date} </p>
                            <Button onClick={e => {directToComplete(item._id)} } variant="contained" color="primary">
                         Move to Complete
                         </Button>
                        </div>
                        :<div></div>}
               
                        </div> 
                        
                    );
                })}
                </div>
                <div style={{border:"1px solid black" ,width:"450px"}}>
                    <h2 style={{backgroundColor:"rgb(182,215,168)"}}>Completed</h2>
                {items.map((item,i)=>{
                    return(
                       <div>{item.status==="completed"?
                        <div key={item._id} style={{border:"1px solid black"}}>
                            <h2>{item.name}</h2>
                            <p>{item.date} </p>
                            
                            <Button onClick={e => {deleteHandler(item._id)} } variant="contained" color="secondary">
                            Delete
                            </Button>
                        </div>
                        :<div></div>}
               
                        </div> 
                        
                    );
                })}
                </div>
                
               
            </div>
           
            
        </div>
    )
}

export default Main
