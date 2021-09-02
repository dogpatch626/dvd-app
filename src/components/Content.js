import React, { Component } from 'react';
import axios from 'axios'
import Movietable from './Movietable';
class Content extends Component {
    constructor(props){
        super(props)
        this.state={
            movies:[]
        }
    }
    componentDidMount(){
        axios.get('https://tsg-dvds.herokuapp.com/dvds')
            .then(res=>{
               
                const movies1 = res.data; 
               // console.log(movies1)
              movies1.map(entries=>{
                  var joined = entries; 
                  
                  this.setState({movies:this.state.movies.concat(joined)})
                  //console.log(this.state.movies)
              })
                
            })
           
    }

    render() {
        return (
            <div>
                {this.state.movies.map((movie)=>{
                   return <Movietable title={movie.title} date={movie.releaseYear} director={movie.director} rating={movie.rating} id={movie.id}/>
                })}
               
            </div>
        );
    }
}

export default Content;