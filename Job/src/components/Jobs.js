import React, {useState, useEffect} from 'react';
import '../css/job.css';
import Statsboxes from '../components/Statsboxes';
import axios from 'axios'
import EditJob from '../components/EditJob';
import AssignTask from '../components/AssignTask';

function Jobs(props) {

const [form, setForm] = useState("")
const [Jobdeta, setJobdeta] =  useState([])
const [getJobs, setgetJobs] = useState([])

const CancelDelete=(cancelid)=>{
    document.getElementById("delete-message"+cancelid).style.display="none";

}

const ShowDelete=(trashid)=>{
    document.getElementById("delete-message"+trashid).style.display="block";
}                                            


const CreateJob = ()=>{
    console.log("this function")
    const job_name=document.getElementById("job_type").value
    const jobdescription=document.getElementById("job_des").value
    const price=document.getElementById("job_price").value
    const company =document.getElementById("company_name").value
    const jobstatus =document.getElementById("job_status").value

    const jobdata = {
        job_name:job_name,
        job_description:jobdescription,
        price_per_hr:price,
        company_origin:company,
        job_status:jobstatus
    }
    axios.post("http://127.0.0.1:8000/jobpost/", jobdata)
        .then(res => {console.log(res.data);
            setJobdeta("posted")
        }
        
    )
}

const DeletingJob=(jobid)=>{
   const url = "http://127.0.0.1:8000/jobdelete/"+jobid
    axios.delete(url)
.then(res => setJobdeta("deleted") )
   
}


const ModifyJob=(jobid)=>{   
    document.getElementById(jobid).style.display="block"
}
const End=(jobid)=>{   
    document.getElementById(jobid).style.display="none"
}



useEffect(()=>{
    console.log("updated")
    if (form==="ended"){
        document.getElementById("edit-job-box").style.display="none"}
}, [form])

useEffect(()=>

{
    axios.get("http://127.0.0.1:8000/job/")
    .then(res => {console.log(res.data); setgetJobs(res.data)})
    console.log("sucess")
},[Jobdeta])

const AllJobs = getJobs.map((job)=>
     <ul className="job-data-list" key={job.id}>
         <li id={"company"+job.id}> {job.company_origin}</li>
         <li id={"price"+job.id}>{job.price_per_hr}</li>
         <li id={"desc"+job.id}>{job.job_description}</li>
         <li id={"name"+job.id}>{job.job_name}</li>
         <li id={"status"+job.id}>{job.job_status}</li> 
     <li className="edit-delete-view">
         <i class="fa fa-pencil-square-o" id={"jobpencil"+job.id} onClick={()=> ModifyJob("edit-job-box")}></i>
        <p className="delete-message" id={"delete-message"+ job.id}>Delete ?  <span onClick={()=>DeletingJob(job.id)}>yes</span><span onClick={()=> CancelDelete(job.id)}>no</span></p>
         <i class="fa fa-trash" id={"trashicon"+job.id} onClick={()=> ShowDelete(job.id)}></i>

         <i class="fa fa-eye"></i>
     </li> 
    <li>
        <button type="button" onClick={()=> ModifyJob("assign-job-box")}>Assign</button>
    </li>


    <div className="edit-job-box" id="assign-job-box">
        <h2 className="jobadd-heading cancel" id="jobadd-heading" onClick={()=> End("assign-job-box")} ><i className="fa fa-arrow-left"></i> <br/></h2>     

        <AssignTask 
            setForms={setForm}
            setTaskdeta={setJobdeta}
            jobid={job.id}
            jobcompany={job.company_origin} 
            jobprice={job.price_per_hr} 
            jobdes={job.job_description}
            jobname={job.job_name}
            jobstatus={job.job_status}
            changemenu={props.displaying}
          
        />
    </div>

    <div className="edit-job-box" id="edit-job-box">
        <h2 className="jobadd-heading cancel" id="jobadd-heading" onClick={()=> End("edit-job-box")} ><i className="fa fa-arrow-left"></i> <br/></h2>     

        <EditJob 
            setForms={setForm}
            setJobdeta={setJobdeta}
            jobid={job.id}
            jobcompany={job.company_origin} 
            jobprice={job.price_per_hr} 
            jobdes={job.job_description}
            jobname={job.job_name}
            jobstatus={job.job_status}
          
        />
    </div>
                    
     </ul>

)


if (form==="addform"){

    return (

            <div className="job-wrapper">
                <div className="job-box">

<div className="job-add-container"> 
<span className="back-icon"onClick={()=> setForm("jobs-box")}><i class="fa fa-arrow-left"></i></span>

<ul className="job-add-list"><li className="job-heading-item"><h2 className="jobadd-heading" id="jobadd-heading"> Add Job</h2></li>
{/* <li className="back-icon"onClick={()=> setForm("jobs-box")}><i class="fa fa-arrow-left"></i></li> */}
</ul>

    <form className="job-add-form">
    <ul>
        <label>Company Name</label><br/>
        <input className="job-add-input" type="hidden" placeholder="" id="job_id_input"/> <br/>
        <input className="job-add-input" type="text" placeholder="" id="company_name"/> <br/>
        <label>Job Description</label><br/>
        <input className="job-add-input" type="text" placeholder="" id="job_des"/><br/>
        <label>Job Type</label><br/>
        <input className="job-add-input" type="text" placeholder="" id="job_type"/><br/>
    </ul> 

    <ul>
        <label>Status</label><br/>
        <input className="job-add-input" type="text" placeholder="" id="job_status"/><br/>
        <label>Price per Hour</label><br/>
        <input className="job-add-input" type="text" placeholder="" id="job_price"/> <br/>

        <button id="createjob-btn" className="add-job-btn" onClick={()=> CreateJob() }><h2>Add Job</h2> </button>
            </ul>
    </form>
    </div>
   </div>
</div>)
}



else{ 
    return (

            <div className="job-wrapper">
                <div className="job-box">
                        <Statsboxes/>
                   <div className="job-details-wrapper">

                        <ul className="job-heading">
                            <li className="heading"><h1>Jobs</h1></li> 
                            <li className="add" onClick={()=> setForm("addform")} >+</li>                           
                        </ul>                   

                        

                        <ul className="job-header-list">
                            <li className="header-items">Company Name</li>                            
                            <li> Job Prize</li>
                            <li> Job Description</li>
                            <li> Job Type </li>
                            <li> Status</li>
                            <li>Edit/View/Delete</li>
                            <li>Assigne Status</li>
                        </ul>

                        {AllJobs}

                   

                    </div>



                </div>
            </div>

    )
 }}


export default Jobs
