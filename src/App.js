import logo from './assets/img/logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import arrow from './assets/img/arrow.svg';
import profile from './assets/img/profile.svg';

import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      
      <nav className="navbar shadow-sm navbar-expand-lg navbar-light bg-white p-0">
        <div className="container-fluid p-0">
          <Link className="pl-5 navbar-brand" to="#"> 
            <img src={logo} alt="logo"/>
            <b>Intugine</b>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item  bg-color-nav">
                <Link className="nav-link active p-2" aria-current="page" to="#">Home</Link>
              </li>
              <li className="nav-item  bg-color-nav">
                <Link className="nav-link p-2" to="#">Brands</Link>
              </li>
              <li className="nav-item  bg-color-nav">
                <Link className="nav-link p-2" to="#" tabindex="-1" >Transporters </Link>
              </li>
              <li className="nav-item bg-color-nav">
                <Link className="nav-link p-2" to="#" tabindex="-1" ><img height={36} className="circle p-2" src={profile} alt="profile"/></Link>
              </li>
              <li className="nav-item  bg-color-nav">
                <Link className="nav-link text-center pt-2" to="#"><img className="p-2" src={arrow} alt="arrow"/></Link></li>
            </ul>
          </div>
        </div>
      </nav>
      

    </div>
    </Router>
      );
}

export default App;
