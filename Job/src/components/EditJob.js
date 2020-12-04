import React from 'react';
import axios from 'axios'


const EditJob = (props) =>{

const UpdateJob = (jobid)=>{
    const job_name=document.getElementById("editjob_type").value
    const jobdescription=document.getElementById("editjob_des").value
    const price=document.getElementById("editjob_price").value
    const company =document.getElementById("editcompany_name").value
    const jobstatus =document.getElementById("editjob_status").value
    

console.log(jobdescription)

    const jobdata = {
        job_name:job_name,
        job_description:jobdescription,
        price_per_hr:price,
        company_origin:company,
        job_status:jobstatus
    }
  
    const put_url = "http://127.0.0.1:8000/jobput/"+jobid

    axios.put(put_url, jobdata)
    .then(res => props.setJobdeta("updated") )


}

return(
<div className="Edit">
    
<div className="job-add-container  jobeditcontainer"> 

    <form className="job-add-form">
    <ul>
    <h2 className="jobadd-heading" id="jobadd-heading"> Editing Job</h2>
        <label>Company Name</label><br/>
        <input className="job-add-input" type="hidden" placeholder="" id="editjob_id_input" value={props.jobid}/> <br/>
        <input className="job-add-input" type="text" placeholder="" id="editcompany_name" defaultValue={props.jobcompany}/> <br/>
        <label>Job Description</label><br/>
        <input className="job-add-input" type="text" placeholder="" id="editjob_des" defaultValue={props.jobdes}/><br/>
        <label>Job Type</label><br/>
        <input className="job-add-input" type="text" placeholder="" id="editjob_type" defaultValue={props.jobname}/><br/>
    </ul> 

    <ul>

        {/* <h2 className="jobadd-heading" id="jobadd-heading" onClick={()=> props.setForms("ended")} ><i className="fa fa-arrow-left"></i> <br/></h2>      */}
        
        <label>Status</label><br/>
        <input className="job-add-input" type="hidden" placeholder="" id="editjob_idinput" defaultValue={props.jobid}/> <br/>
        <input className="job-add-input" type="text" placeholder="" id="editjob_status" defaultValue={props.jobstatus}/><br/>
        <label>Price per Hour</label><br/>
        <input className="job-add-input" type="text" placeholder="" id="editjob_price" defaultValue={props.jobprice}/> <br/>

         <button id="updatejob-btn" className="add-job-btn" onClick={()=> UpdateJob(props.jobid) }><h2>Edit Job</h2> </button>

    </ul>
    </form>
    </div>
   </div>

)


}

export default EditJob;