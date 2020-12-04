import React,{useState,useEffect} from 'react';
import '../css/task.css';
import axios from 'axios';
import useravatar from '../img/useravatar.png'

function Task(props) {
const [AllTasks, setAllTasks]=useState([])
const [Taskdeta, setTaskdeta] = useState("")

const CancelDelete=(cancelid)=>{
    document.getElementById("delete-message"+cancelid).style.display="none";

}

const ShowDelete=(trashid)=>{
    document.getElementById("delete-message"+trashid).style.display="block";
}                                            

const DeletingJob=(jobid)=>{
   const url = "http://127.0.0.1:8000/taskdelete/"+jobid
    axios.delete(url)
    .then(res => setTaskdeta("tasks")
 )  

document.getElementById(jobid).style.display="none"
}

useEffect(()=>
{
    axios.get("http://127.0.0.1:8000/task/")
    .then(res => {console.log(res.data); setAllTasks(res.data)})
    console.log("sucess")
},[Taskdeta])

const getTasks = AllTasks.map((tas)=>
     <ul className="task-data-list" key={tas.id} id={tas.id}>
        <li className="avatar-item"><img src={useravatar} className="technician-avatar"/></li>
         <li className="task-items">{tas.technicians_asigned}</li>
         <li className="task-items">{tas.task_name}</li>
         <li  className="task-items">{tas.destination_company}</li>  
         <li className="task-startday">{tas.startingday}</li>    
         <li className="task-duedate">{tas.duedate}</li>
        <li className="edit-delete-view tasks-delete">
           <p className="delete-message" id={"delete-message"+ tas.id}>Delete ?  <span onClick={()=>DeletingJob(tas.id)}>yes</span><span onClick={()=> CancelDelete(tas.id)}>no</span></p>
            <i class="fa fa-trash" id={"trashicon"+tas.id} onClick={()=> ShowDelete(tas.id)}></i>
        </li>
     </ul>
) 


    return ( 
        
         <div className="task-details-wrapper">
            <div className="task-box">
            <ul className="task-header-list">
                <li>Tasks</li>
            </ul>

            {getTasks}



         </div>            
    </div>
    )
}

export default Task;