import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            title : '',
            body : ''
        }
    }
    
    onChange = (e)=>{
        this.setState({[e.target.name] : e.target.value})
    }

    onSubmit = (e)=>{
        e.preventDefault();
        const value = {
            title : this.state.title,
            body : this.state.body
        }

        fetch('https://jsonplaceholder.typicode.com/posts',{
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(value)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    render() {
        return (
            <div className='container border p-4 w-50 rounded'>
                <form onSubmit={this.onSubmit}>
                   <div className='input-group'>
                       <input type='text' name='title' className='form-control' placeholder='Title' value={this.state.title} onChange={this.onChange}/>
                   </div>
                   <div className='input-group'>
                       <input type='text' name='body' className='form-control' placeholder='Body' value={this.state.body} onChange={this.onChange}/>
                   </div>
                   <button className='btn btn-primary my-3 px-3'>Submit</button>
                </form>
                
                
            </div>
        )
    }
}

export default PostForm
