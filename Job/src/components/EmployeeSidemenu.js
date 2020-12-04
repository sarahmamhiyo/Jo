 import React from 'react';
import '../css/sign.css'

function EmployeeSidemenu(props) {


    return ( 
        <div className="sidemenu">
            <ul className="side-list">  

                <li className="home-icon" onClick={()=>props.changeview("home") }>
                    <i class="fa fa-home" aria-hidden="true"></i>
                    <p className="menu-description">Home</p>
                </li>

                <li onClick={()=>props.changeview("employee-tasks") }>
                    <i class="fa fa-building" aria-hidden="true"></i>
                    <p className="menu-description">Tasks</p>
                </li>

                <li onClick={()=>props.changeview("employee-reports") }> 
                    <i class="fa fa-files-o" aria-hidden="true"></i>
                     <p className="menu-description">Reports</p>
                </li>

            </ul>

        </div>
    )
}

export default EmployeeSidemenu