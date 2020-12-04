import React, {useState, useEffect} from 'react';
import axios from 'axios'
import '../css/register.css'

function Register() {

const RegisterUser = ()=>{
    const email=document.getElementById("register_email").value
    const company_name=document.getElementById("register_companyname").value
    const role=document.getElementById("register_role").value
    const password =document.getElementById("register_password").value

    const job_data = {
        email:email,
        company_name:company_name,
        role:role,
        password:password,
    }
  console.log(job_data)
  const post_url = "http://127.0.0.1:8000/register/"

  axios.post(post_url, job_data)
  .then(res => console.log(res.data) )

}

return (


<div className="register-container">
<form className="register-form">

<h2 className="signup-heading">Sign Up</h2>
    <ul>
        {/* <label>Email</label><br/> */}
        <input className="register-input" type="text" placeholder="Email" id="register_email"/> <br/>
        {/* <label>Company Nmae</label><br/> */}
        <input className="register-input" type="text" placeholder="Company Name" id="register_companyname"/> <br/>
        {/* <label>Role</label><br/> */}
        <input className="register-input" type="text" placeholder="Role" id="register_role"/><br/>
        {/* <label>PaSsword</label><br/> */}
        <input className="register-input" type="text" placeholder="Password" id="register_password"/><br/>
        <button  type="button" className="register-btn" onClick={()=> RegisterUser() }><h2>Register</h2> </button>
        <p className="signtext"> Already have an account ?<b><a href="/login">SignIn</a>  </b></p>

 </ul> 

    </form>
   
</div>
    )
}

export default Register