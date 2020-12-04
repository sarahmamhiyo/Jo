import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Dashboards from './pages/Dashboards';
import TechnicianBoard from './pages/TechnicianBoard';
import EmployeeDashboard from './pages/EmployeeDashboard.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";




function App() {

const user=JSON.parse(localStorage.getItem("user"))


  return (
    <Router>
      
    <div className="App">
    <Switch>

        <Route path="/login">
          <Login/>
        </Route>

        <Route path="/register">
            <Register/>
        </Route>
            

        {user? (
            <Route path="/dashboards">
              <Dashboards/>
            </Route>

        ):(
        <Redirect to='/login'/>
                    
        ) }


            {/* <Route path="/register">
              <Register/>
            </Route>
            
            <Route path="/dashboard">
              <Dashboard/>
            </Route>
            
            <Route path="/dashboards">
              <Dashboards/>
            </Route>
            <Route path="/employeedashboard">
              <EmployeeDashboard/>
            </Route>
            
            <Route path="/technicianboard">
              <TechnicianBoard/>
            </Route> */}

    </Switch>

    </div>  

    </Router>
  );
}



export default App;