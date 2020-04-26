import React, { Component } from 'react'

class Posts extends Component {
    constructor(props){
      super();
      this.state = {
          data : []
      }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=> this.setState({data : data}))
    }

    render() {
        const postItem = this.state.data.map(item=>(
            <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
            </div>
        ));
        return (
            <div>
                {postItem}
            </div>
        )
    }
}

export default Posts
