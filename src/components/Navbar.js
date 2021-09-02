import React from 'react';
import "./components.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
  } from "react-router-dom";
function Navbar(props) {
    return (
        <div id="mainNav">
            
            <Link to="/create"><button >Create DVD</button></Link>
           
            <button >search</button>
           
            <select name="filter">
                <option  defaultValue disabled>Search Category</option>
            </select>
            <form>
               <input type="text" id="searchField" name= "search"></input>
               
            </form>
            </div>
        
    );
}

export default withRouter(Navbar);