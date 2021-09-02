import React, { Component } from "react";
//import { useState, useEffect } from "react";
import axios from "axios";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      director: "",
      date: "",
      rating: "",
      notes: "",
    };
  }

  //   handleChange =(event)=>{
  //       console.log(event.target.value)
  //       this.setState({id:event.target.value})
  //   }
  handleSubmit = (event) => {
    event.preventDefault();
    const submition = {
      id: this.state.id,
      title: this.state.name,
      releaseYear: this.state.date,
      director: this.state.director,
      rating: this.state.rating,
      notes: this.state.notes,
    };
    axios.post('https://tsg-dvds.herokuapp.com/dvds', submition)
    .then(res => console.log(res))
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Id
            <input
              type="text"
              onChange={(event) => {
                this.setState({ id: event.target.value });
              }}
            />
          </label>
          <label>
            Name
            <input
              type="text"
              onChange={(event) => {
                this.setState({ name: event.target.value });
              }}
            />
          </label>
          <label>
            director
            <input
              type="text"
              onChange={(event) => {
                this.setState({ director: event.target.value });
              }}
            />
          </label>
          <label>
            date
            <input
              type="text"
              onChange={(event) => {
                this.setState({ date: event.target.value });
              }}
            />
          </label>
          <label>
            rating
            <input
              type="text"
              onChange={(event) => {
                this.setState({ rating: event.target.value });
              }}
            />
          </label>
          <label>
            notes
            <input
              type="text"
              onChange={(event) => {
                this.setState({ notes: event.target.value });
              }}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Create;
