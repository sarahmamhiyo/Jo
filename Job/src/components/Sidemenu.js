 import React from 'react';
import '../css/sign.css'

function Sidemenu(props) {


    return ( 
        <div className="sidemenu">
            <ul className="side-list">  

                <li className="home-icon" onClick={()=>props.changeview("home") }>
                    <i class="fa fa-home" aria-hidden="true"></i>
                    <p className="menu-description">Home</p>
                </li>

                <li onClick={()=>props.changeview("jobs") }>
                    <i class="fa fa-list-alt" aria-hidden="true"></i>
                    <p className="menu-description">Jobs</p>
                </li>

                <li onClick={()=>props.changeview("tasks") }>
                    <i class="fa fa-building" aria-hidden="true"></i>
                    <p className="menu-description">Tasks</p>
                </li>


                <li onClick={()=>props.changeview("technicians") }>
                    <i class="fa fa-wrench" aria-hidden="true"></i>                 
                    <p className="menu-description">Technicians</p>
                </li>

                <li onClick={()=>props.changeview("reports") }> 
                    <i class="fa fa-files-o" aria-hidden="true"></i>
                     <p className="menu-description">Reports</p>
                </li>

                <li><i class="fa fa-money" aria-hidden="true"></i>
                    <p className="menu-description">Invoices</p>
                </li>

                <li>
                    <i class="fa fa-line-chart" aria-hidden="true"></i>
                    <p className="menu-description">Statistics</p>
                </li>
            </ul>

        </div>
    )
}

export default Sidemenu