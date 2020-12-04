import React,{useState} from 'react';
import axios from 'axios';
import useStorage from '../components/useStorage';

function Login() {

const [userdata, setUserData] = useStorage("user")
const[successfull, setSuccessgul]=useState("")
const LoginUser=()=>{
    const email=document.getElementById("login_email").value
    const password =document.getElementById("login_password").value

    const job_data = {
        username:email,
        password:password,
    }
  console.log(job_data)
  const post_url = "http://127.0.0.1:8000/login/"

  axios.post(post_url, job_data)
  .then(res => setUserData(JSON.stringify(res.data)))


document.getElementById("success").style.display="block"
document.getElementById("reg-id").style.display="none"

}

const Goto =()=>{
    window.location.replace("/dashboards")
}





return ( 

<div className="register-container">
<form className="register-form" id="reg-id">

<h2 className="signup-heading">Sign Up</h2>
    <ul>

        <input className="register-input" type="text" placeholder="Email" id="login_email"/> <br/>

        <input className="register-input" type="text" placeholder="Password" id="login_password"/><br/>

        <button type="button" className="register-btn" onClick={()=> LoginUser() }><h2>Register</h2> </button>
        <p className="signtext"> Don't have an account ?<b><a href="/register">SignIn</a></b></p>


 </ul> 

    </form>

    <form className="register-form proceed-form" id="success">
        <h2 className="signup-heading">Succesfully logged </h2>
        <p><button type="button" className="proceed-btn" onClick={()=> Goto()}>Proceed to Dashboard</button></p>
    
    </form>
   
</div>
)
}

export default Login;