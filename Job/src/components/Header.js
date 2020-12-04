import React from 'react';
import '../css/head.css'

function Header(props) {
    var str=props.userheaderinfo
    var firstletter = (str.charAt(0)).toUpperCase();
    return ( 
    <div className="header-container">

        <ul className="header-list">
            <li className="header-item-email "><b>{props.userheaderinfo}</b></li>
            <li className="header-item "><div><p><b>{firstletter}</b></p></div>
        </li>
            <li className="header-item " ><i class="fa fa-bell"></i></li>
        </ul>

    </div>
    )
}

export default Header