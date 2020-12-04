import React,{useState,useEffect} from 'react';
import axios from 'axios'


const Assigntask = (props) =>{
const [setTask, setTaskdeta]=useState("")

const CreateTask = ()=>{
    const job_name=document.getElementById("assigntask_name").value
    const job=document.getElementById("assigntask_id").value
    const employeename=document.getElementById("assigntask_employee").value
    const company =document.getElementById("assigntask_company").value
    const due_date =document.getElementById("assigntask_duedate").value
    const start_date =document.getElementById("assigntask_start").value
    const assignstatus = job+employeename

    const jobdata = {
        jobid:job,
        task_name:job_name,
        technicians_asigned:employeename,
        startingday:start_date,
        destination_company:company,
        duedate:due_date,
        assignment_status:assignstatus
    }
  
    const put_url = "http://127.0.0.1:8000/taskpost/"+assignstatus

    axios.post(put_url, jobdata)
    .then(res => {props.setTaskdeta(res.data); SuccessMessage()} )
}

const SuccessMessage=()=>{
    document.getElementById("task-visibleform").style.display="none"
    document.getElementById("assign-task-venue").style.display="none"
    document.getElementById("assign-task-successmessage").style.display="block"
}


return(
<div className="Edit">
    
<div className="job-add-container  jobeditcontainer"> 

    <form className="job-add-form">
    <ul  className="assigntask-hidden">
    <h2 className="jobadd-heading" id="jobadd-heading">Assign Task</h2> 
        <label>Job Name</label><br/>
        <input className="job-add-input" type="text" placeholder="" id="assigntask_name" defaultValue={props.jobname}/> <br/>
        <label>Job ID</label><br/>
        <input className="job-add-input" type="text" placeholder="" id="assigntask_id" defaultValue={props.jobid}/><br/>
        <label>Company </label><br/>
        <input className="job-add-input" type="text" placeholder="" id="assigntask_company" defaultValue={props.jobcompany}/><br/>
    </ul> 

<ul id="assign-task-venue">
    <h2 className="assign-text">Assign Task</h2>

<span>for</span>

<p>{props.jobname}</p>
<p>{props.jobdes}</p>
<p>@</p>
<p>{props.jobcompany}</p>

</ul>

    <ul id="task-visibleform">

 
        <label>Start Date</label><br/>
        <input className="job-add-input" type="text" placeholder="" id="assigntask_start"/> <br/>
        <label>Due Date</label><br/>
        <input className="job-add-input" type="text" placeholder="" id="assigntask_duedate" /><br/>
        <label>Employee Name</label><br/>
        <input className="job-add-input" type="text" placeholder="" id="assigntask_employee" /> <br/>

         <button type="button" id="updatejob-btn" className="add-job-btn" onClick={()=> CreateTask() }><h2>Assign Task</h2> </button>

    </ul>

<ul id="assign-task-successmessage">
    <h2>Task Assign Successfully</h2>
    <button type="button" id="updatejob-btn" className="add-job-btn" onClick={()=> props.changemenu("tasks") }><h2>View Task</h2> </button>

</ul>
    </form>    


    </div>
   </div>

)


}

export default Assigntask;