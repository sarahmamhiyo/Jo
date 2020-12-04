import React, {useState} from 'react';
import Header from '../components/Header';
import Sidemenu from '../components/Sidemenu';
import '../css/dash.css';
import Jobs from '../components/Jobs';
import Tasks from '../components/Tasks';
import Technicians from '../components/Technicians';
import Reports from '../components/Reports'


const Dashboard = (props)=>{

console.log(props)

const [changedisplay, setChangedisplay] = useState([])


if (changedisplay==="jobs"){
return(


    <div className="Dashboard">                            
        <Sidemenu changeview={setChangedisplay}/>
        <Header userheaderinfo={props.userdetails}/>
        <div className="job-task-wrapper">

            <Jobs/>    
        </div>
    </div>
)}

if (changedisplay==="tasks"){
return(


    <div className="Dashboard">       
        <Sidemenu changeview={setChangedisplay}/>
<Header userheaderinfo={props.userdetails}/>
        <div className="job-task-wrapper">
   
            <Tasks changeview={setChangedisplay}
                currentview={changedisplay}/>
        </div>
    </div>
)}

if (changedisplay==="reports"){
    return(
<div className="Dashboard">
        <Sidemenu changeview={setChangedisplay}/>
<Header userheaderinfo={props.userdetails}/>
    <div className="reports-wrapper">
        <Reports/>
    </div>
</div>
)}

if (changedisplay==="technicians"){
    return(
<div className="Dashboard">
        <Sidemenu changeview={setChangedisplay}/>
<Header userheaderinfo={props.userdetails}/>
    <div className="technicians-wrapper">
        <Technicians/>
    </div>
</div>
)}
else{

return(


    <div className="Dashboard">
        <Sidemenu changeview={setChangedisplay}/>
        <Header userheaderinfo={props.userdetails}/>
        <div className="job-task-wrapper">

            <Jobs displaying={setChangedisplay}/>    
            {/* <Tasks/> */}
        </div>
    </div>

 )}



}

export default Dashboard;