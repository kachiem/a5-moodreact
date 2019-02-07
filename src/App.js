import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter,
  Redirect
} from "react-router-dom";
import bob from "./bob";
import cathy from "./cathy";
import sam from "./sam";
import logo from './logo.svg';
import './App.css';
import {faSmileBeam} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import {faPlusSquare} from "@fortawesome/free-solid-svg-icons";
import {faCog} from "@fortawesome/free-solid-svg-icons";
import {faInfo} from "@fortawesome/free-solid-svg-icons";
class App extends Component {
  render() {
    return (
    <HashRouter>
 <div>
          <ul className="header">
          <h1>Home</h1>
         <h4 align = "right"> <FontAwesomeIcon icon= {faInfo} size = "3x"/> </h4> 
          </ul>

<ul className = "pretty">
          <table>
  <tr>
    <th>Messages</th>
  </tr>
  <tr>

  <td>  <button class="button button4"> <li><NavLink to ="/Bob"><span style={{alignItems:'flex-start',padding: 20}}><FontAwesomeIcon icon= {faSmileBeam} size ="3x" /></span>Bob</NavLink></li></button></td>
    <td> <p align ="right"> 2/1/19 6:30 PM  </p> </td>

  </tr>
  <tr>
    <td><button class="button button4"><li><NavLink to ="/Cathy"><span style={{alignSelf:'flex-end',padding: 20}}><FontAwesomeIcon icon= {faSmileBeam} size ="3x" /> </span>Cathy</NavLink></li></button></td>
    <td> <p align = "right"> 1/31/19 12:00 PM </p> </td>
  </tr>
  <tr>
    <td><button class="button button4"><li><NavLink to="/Sam"><span style={{alignSelf:'flex-end',padding: 20}}><FontAwesomeIcon icon= {faSmileBeam} size ="3x" /> </span>Sam</NavLink></li></button></td>
    <td> <p align = "right"> 1/30/19 9:00 PM </p> </td>
</tr>

</table>
</ul>
 <div>
 <ul className = "footer">
 <table>


        
           <tr>
          <td> <h3 align = "middle" ><FontAwesomeIcon icon= {faHome} size ="4x" /> </h3></td>
          <td><h3 align = "middle" ><FontAwesomeIcon icon= {faUserCircle} size ="4x" /> </h3> </td>
          <td> <h3 align = "middle" ><FontAwesomeIcon icon= {faPlusSquare} size ="4x" /> </h3></td>
          <td> <h3 align = "middle" ><FontAwesomeIcon icon= {faCog} size ="4x" /> </h3> </td>
           </tr> 
          
</table>
</ul>
  </div>
          <div className="content">
          <Route exact path ="/bob" component = {bob}/>
           <Route path="/cathy" component={cathy}/>
            <Route path="/sam" component={sam}/>
             
          </div>
        </div>
        </HashRouter>
    );
  }
}

export default App;
