import React from 'react';
import Dashboard from '../pages/Dashboard';
import EmployeeDashboard from '../pages/EmployeeDashboard'

function Dashboards() {
    const user=JSON.parse(localStorage.getItem("user"))
    const userrole=user.data.role
    const useremail=user.data.email

if(userrole==="admin"){
    return (
        <div>
            <Dashboard userdetails={useremail}/>
        </div>
    )
}


else{
    return (
        <div>
            <EmployeeDashboard userdetails={useremail}/>
        </div>
    )
}

}

export default Dashboards
