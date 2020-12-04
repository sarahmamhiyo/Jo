import React from 'react';
import axios from 'axios';

function CreateReport(props) {

const PostReport = ()=>{

const employeename = document.getElementById("employee_name").value
const jobname = document.getElementById("job_name").value
const timespent = document.getElementById("time_spent").value
const arrivaltime = document.getElementById("arrival_time").value
const depaturetime = document.getElementById("departure_time").value
const taskstatus = document.getElementById("task_status").value

const reportdata= {
    employee:employeename,
    job_name:jobname,
    time_spent:timespent,
    arrival_time:arrivaltime,
    departure_time:depaturetime,
    task_status:taskstatus,
    }

    axios.post("http://127.0.0.1:8000/reportpost/", reportdata)
    .then(res=> console.log(res.data))
}

    return (
        <div className="create-report-wrapper">
            <form className="job-add-form">
            <ul>
            <h2 className="jobadd-heading" id="jobadd-heading">Create Report</h2>
                <label>Employee</label><br/>
                <input className="job-add-input" type="text" placeholder="" id="employee_name"/> <br/>

                <label>Job ID</label><br/>
                <input className="job-add-input" type="text" placeholder="" id="job_name" value={props.taskname}/><br/>
                <label>Time Spent</label><br/>
                <input className="job-add-input" type="text" placeholder="" id="time_spent"/><br/>
            </ul> 

            <ul>
                <label>Arrival Time</label><br/>
                <input className="job-add-input" type="text" placeholder="" id="arrival_time"/> <br/>
                <label>Departure Time</label><br/>     
                <input className="job-add-input" type="text" placeholder="" id="departure_time"/><br/>
                <label> Task Status</label><br/>
                <input className="job-add-input" type="text" placeholder="" id="task_status"/> <br/>
                <button type="button" id="updatejob-btn" className="add-job-btn" onClick={()=> PostReport() }><h2>Assign Task</h2> </button>          
            </ul>
            </form>
        </div>
    )
}

export default CreateReport
