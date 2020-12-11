import React from 'react';
import axios from 'axios'


import PostContainer from '../post-container/post-container.component';


import {connect} from 'react-redux';

import './post.style.css';



class Posts extends React.Component {
    constructor()
    {
        super();
        this.state={
            data:[]
        }
    }

    componentDidMount()
    {
        if(this.props.token)
        {
            axios.defaults.headers = {
                "Content-Type": "application/json",
                Authorization:  `Token ${this.props.token}`
            }
    
            axios.get("http://127.0.0.1:8000/posts/create-list").then(
                resp => {
                    
                    this.setState({
                        data:resp.data
                    })
                }
            ).catch(err => console.log(err))
        }
 

    }


    render()
    {
        return(
            <div>
               {
                   this.state.data.map(post =>(
                       <PostContainer key={post.id} post={post}  />
                   ))
               }
            </div>
        )
    }


}


const mapStateToProps = (state) => {
    return{
        token:state.auth.token
    };
}

export default connect(mapStateToProps)(Posts);