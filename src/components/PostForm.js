import axios from 'axios'
import React, { Component } from 'react'

class PostForm extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         title: '',
         body: '',
         userId: ''
      }
    }

    // userIdInput = (event) =>{
    //     this.setState({
    //         userId: event.target.value
    //     })
    // }

    // bodyInput = (event) =>{
    //     this.setState({
    //         body: event.target.value
    //     })
    // }

    // titleInput = (event) =>{
    //     this.setState({
    //         title: event.target.value
    //     })
    // }

    changeHandler = e =>{
      
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    submitForm = (e)=>{

        e.preventDefault();
        console.log(this.state)

        axios.post(`https://jsonplaceholder.typicode.com/posts`, this.state)
        .then(response => console.log(response))
        .catch(err => console.log(err))

    //    alert(this.state.userId+", "+this.state.title+", "+ this.state.body)
    }

  render() {
    const {userId, title, body} = this.state

    return (
      <form onSubmit={this.submitForm}>
        <label>User ID: </label>
        <input type='number' value={userId} name='userId' onChange={this.changeHandler}></input>
        <br></br>
        <label>Title: </label>
        <input type='text' value={title} name='title' onChange={this.changeHandler}></input>
        <br></br>
        <label>Body: </label>
        <textarea type='text' value={body} name='body' onChange={this.changeHandler}></textarea>
        <br></br>
        <button type='submit'>Submit</button>

      </form>
    )
  }
}

export default PostForm