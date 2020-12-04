import React,{useState,useEffect} from 'react';
import '../css/report.css';
import axios from 'axios'

function EmployeeReports() {

const[reports, setAllReports]=useState([])

useEffect(() => {

axios.get("http://127.0.0.1:8000/report/")
.then(res=> {console.log(res.data);setAllReports(res.data)})

}, [])

const Alreport = reports.map((rep)=>
             <ul className="reports-data-list" key={rep.id}>
                 <li>{rep.employee}</li>
                 <li>{rep.job_name}</li>
                 <li>{rep.arrival_time}</li> 
                 <li>{rep.departure_time}</li>
                <li>{rep.time_spent}</li>
                 <li>{rep.task_status}</li>    
                    
             </ul>

)
    return ( 
        
         <div className="reports-container">
            <div className="reports-box">
             <ul className="reports-header-list">
                 <li>Assignee</li>
                 <li>Company</li>
                 <li>Job Description</li>
                 <li>Starting Time</li>
                 <li>Ending Time</li>
                 <li>Comment</li>
                 <li>Status</li>
             </ul>

            {Alreport}
             <ul className="reports-data-list">
                 <li>Sarah</li>
                 <li>Prodleader</li>
                 <li>Develop Mobile App for uploading company details</li>
                 <li>08:00</li> 
                 <li>17:30</li>
                 <li>Extra wifi</li>    
                 <li>Statuses</li>      
             </ul>
             <ul className="reports-data-list">
                 <li>Sarah</li>
                 <li>Prodleader</li>
                 <li>Develop Mobile App for uploading company details</li>
                 <li>08:00</li> 
                 <li>17:30</li>
                 <li>Extra wifi</li>    
                 <li>Statuses</li>      
             </ul>
             <ul className="reports-data-list">
                 <li>Sarah</li>
                 <li>Prodleader</li>
                 <li>Develop Mobile App for uploading company details</li>
                 <li>08:00</li> 
                 <li>17:30</li>
                 <li>Extra wifi</li>    
                 <li>Statuses</li>      
             </ul>
            </div>
         </div>            

    )
}

export default EmployeeReports;