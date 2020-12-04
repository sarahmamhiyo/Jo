import React, {useState} from 'react';
import Header from '../components/Header';
import EmployeeSidemenu from '../components/EmployeeSidemenu';
import '../css/dash.css';
import EmployeeReports from '../components/EmployeeReports';
import EmployeeTasks from '../components/EmployeeTasks';


const EmployeeDashboard = (props)=>{

const [changedisplay, setChangedisplay] = useState([])


if (changedisplay==="employee-tasks"){
return(


    <div className="Dashboard">                            
        <EmployeeSidemenu changeview={setChangedisplay}/>
        <Header userheaderinfo={props.userdetails}/>
        <div className="job-task-wrapper">

            <EmployeeTasks/>    
        </div>
    </div>
)}

if (changedisplay==="employee-reports"){
return(


    <div className="Dashboard">       
        <EmployeeSidemenu changeview={setChangedisplay}/>
        <Header userheaderinfo={props.userdetails}/>
        <div className="job-task-wrapper">
   
            <EmployeeReports changeview={setChangedisplay}
                currentview={changedisplay}/>
        </div>
    </div>
)}

else{
return(


    <div className="Dashboard">       
        <EmployeeSidemenu changeview={setChangedisplay}/>
        <Header  userheaderinfo={props.userdetails}/>
        <div className="job-task-wrapper">
   
            <EmployeeTasks changeview={setChangedisplay}
                currentview={changedisplay}/>
        </div>
    </div>
)}

}

export default EmployeeDashboard;