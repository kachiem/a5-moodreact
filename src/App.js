import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import bob from "./bob";
import cathy from "./cathy";
import sam from "./sam";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
    <HashRouter>
 <div>
          <ul className="header">
          <h1>Home</h1>
          </ul>

<ul className = "pretty">
          <table>
  <tr>
    <th>Messages</th>
  </tr>
  <tr>
    <td> <button class="button button4"> <li><NavLink to ="/Bob">Bob</NavLink></li></button></td>

  </tr>
  <tr>
    <td><button class="button button4"><li><NavLink to ="/Cathy">Cathy</NavLink></li></button></td>

  </tr>
  <tr>
    <td><button class="button button4"><li><NavLink to="/Sam">Sam</NavLink></li></button></td>
</tr>

</table>
</ul>
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
