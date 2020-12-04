import React from 'react';
import '../css/technician.css'
import useravatar from '../img/useravatar.png'



export default function Technicians() {

    const ShowDelete=(trashid)=>{
        document.getElementById("delete-message"+trashid).style.display="block";
    }  

    return (

    <div className="technicians-container">

        <h2 className="employees-heading"> Employees Profiles</h2>
    <div className="techn-box">
        <ul className="technicians-header-list">
            <li>Avatar</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>

        <ul className="technicians-data-list">
            <li className="avatar-item"><img src={useravatar} className="technician-avatar"/></li>

            <li className ="role-item">
                <b>Sarah Mamhiyo</b>
                <p>Junior Software Developer</p>
            </li>
            <li className="techni-contacts">sarahmamhiyo@prodleader.com</li>

            <li className="techni-company">Prodleader</li>


            <li className="edit-delete-view technmodify">
            <p className="delete-message">Delete ?  <span>yes</span><span>no</span></p>
                <i class="fa fa-pencil-square-o"></i>
                <i class="fa fa-trash"></i>
                <i class="fa fa-eye"></i>
            </li>  

        </ul>

        <ul className="technicians-data-list">
            <li className="avatar-item"><img src={useravatar} className="technician-avatar"/></li>

            <li className ="role-item">
                <b>Sarah Mamhiyo</b>
                <p>Junior Software Developer</p>
            </li>
            <li className="techni-contacts">sarahmamhiyo@prodleader.com</li>

            <li className="techni-company">Prodleader</li>


            <li className="edit-delete-view technmodify">
            <p className="delete-message">Delete ?  <span>yes</span><span>no</span></p>
                <i class="fa fa-pencil-square-o"></i>
                <i class="fa fa-trash"></i>
                <i class="fa fa-eye"></i>
            </li>  

        </ul>

        <ul className="technicians-data-list">
            <li className="avatar-item"><img src={useravatar} className="technician-avatar"/></li>

            <li className ="role-item">
                <b>Sarah Mamhiyo</b>
                <p>Junior Software Developer</p>
            </li>
            <li className="techni-contacts">sarahmamhiyo@prodleader.com</li>

            <li className="techni-company">Prodleader</li>


            <li className="edit-delete-view technmodify">
            <p className="delete-message">Delete ?  <span>yes</span><span>no</span></p>
                <i class="fa fa-pencil-square-o"></i>
                <i class="fa fa-trash"></i>
                <i class="fa fa-eye"></i>
            </li>  

        </ul>
    </div>       

</div>
    )
}