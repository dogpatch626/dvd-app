import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
  } from "react-router-dom";
import "./movietable.css"
class Movietable extends Component {
    constructor(props){
        super(props)
        this.state = {
            title:props.title,
            date:props.date,
            director:props.director,
            rating:props.rating,
            id:props.id
        }
    }
    render() {
        return (
            <div id="contentArea">
                <table>
                    <tr>
                    <th>Title </th>
                    <th>Release Date </th>
                    <th>Director </th>
                    <th>Rating </th>
                    <th></th>
                    <th></th>
                    </tr>
                    <tr>
                        <td>
                       {this.state.title}
                       </td>
                  
                    <td>
                       {this.state.date}
                       </td>
                       <td>
                       {this.state.director}
                       </td>
                       <td>
                       {this.state.rating}
                       </td>
                      <td> 
                     <Link to={`/edit/${this.state.id}`}>Edit</Link>
                     </td>
                     <td> 
                     <a href="">delete</a>
                    </td>
                    </tr>
                 
                </table>
            </div>
        );
    }
}

export default withRouter (Movietable);