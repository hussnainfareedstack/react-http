import React, { Component, Fragment } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMsg: ''
    };
  }

  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data }); // changing state so now component will re-render and show data
      })
      .catch((err) => {
            console.log(err)
            this.setState({errorMsg: `Error fetching data: ${err.message}`})
        });
  }

  render() {
    const { posts, errorMsg } = this.state;

    return (
        <div>
            <h1>List of Posts</h1>
            {
                posts.length
                ? posts.map( post => 
                      <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                      </div>
                    )
                : null
            }
            {
                errorMsg ? <div> {errorMsg}</div> : null
            }
        </div>
    )
  }
}

export default PostList;
