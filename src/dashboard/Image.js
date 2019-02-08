import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const IMAGES = [
  { id: 0, title: "Dark Orchid", color: "DarkOrchid" },
  { id: 1, title: "Lime Green", color: "LimeGreen" },
  { id: 2, title: "Tomato", color: "Tomato" },
  { id: 3, title: "Seven Ate Nine", color: "#789" },
  { id: 4, title: "Crimson", color: "Crimson" }
];

const Thumbnail = ({ color }) => (
  <div
    style={{
      width: 50,
      height: 50,
      background: color
    }}
  />
);

const Image = ({ color }) => (
  <div
    style={{
      width: "100%",
      height: 400,
      background: color
    }}
  />
);

const Home = () => (
  <div>
  <ul className = "header">
  <h1>Home</h1>
    <Link to="./index.html"> <h4 align = "right"> <FontAwesomeIcon icon= {faInfo} size = "3x"/> </h4> </Link>
          </ul>
<ul className = "pretty">
          <table>

  <tr>
    <td width = "20"><h2> Messages </h2></td><td> <h5> </h5> </td> <td> <h5> </h5> </td> 
    <td ><Link to="./index.html"><h2> Slider </h2></Link></td> 
  </tr>
  <tr>
   <td width = "100%"> <li> <button class ="button button4"> <Link to="/gallery"><span style={{alignSelf:'flex-end',padding: 20}}><FontAwesomeIcon icon= {faSmileBeam} size ="3x"/></span>Bob</Link></button></li></td>
 <td> </td> <td> </td>
    <td> <p align ="right"> 2/1/19 6:30 PM  </p> </td>
 </tr>
  <tr>
    <td>

<li>
<button class ="button button4"> <Link to="/cathy"><span style={{alignSelf:'flex-end',padding: 20}}><FontAwesomeIcon icon= {faSmileBeam} size ="3x"/></span> Cathy</Link></button> </li></td> 
<td> </td> <td> </td>
<td> <p align = "right"> 1/31/19 12:00 PM </p> </td> </tr> 
   <tr>
<td>
      <li>
        <button class ="button button4"> <Link to="./index.html"><span style={{alignSelf:'flex-end',padding: 20}}><FontAwesomeIcon icon= {faSmileBeam} size ="3x"/></span>Sam</Link></button></li></td>
     <td> </td> <td> </td>
   <td> <p align = "right"> 1/30/19 9:00 PM </p> </td>
</tr>
   
      </table>
      </ul>
  <ul className = "footer">
 <table>


        
           <tr>
          <td> <Link to="./index.html"><h3 align = "middle" ><FontAwesomeIcon icon= {faHome} size ="4x" /> </h3></Link></td>
          <td><Link to="./index.html"><h3 align = "middle" > <FontAwesomeIcon icon= {faUserCircle} size ="4x" /> </h3> </Link> </td>
          <td> <Link to="./index.html"><h3 align = "middle" ><FontAwesomeIcon icon= {faPlusSquare} size ="4x" /> </h3> </Link></td>
          <td> <Link to="./index.html"><h3 align = "middle" ><FontAwesomeIcon icon= {faCog} size ="4x" /></h3></Link>  </td>
           </tr> 
          
</table>
</ul>
</div>
);

export default Image;