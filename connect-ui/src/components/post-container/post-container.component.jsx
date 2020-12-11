import React from 'react';

import PostImage from '../post-image/post-image.component.jsx';

import axios from 'axios';
import {connect} from 'react-redux'


import PostDetail from '../../pages/post-detail/post-detail.page';

import './post-container.style.css';








class PostContainer extends React.Component {

        constructor(props)
        {
            super(props);

            this.state = {
                post_image:props.post.post_image,
                post_caption:props.post.post_caption,
                likes:0,
                id:props.post.id
            }
        }

        componentDidMount()
        {
            this.getLike(this.props.token,this.state.id);    
        }

        getLike = (token,id) => {
            
            axios.defaults.headers = {
                "Content-Type": "application/json",
                Authorization:  `Token ${token}`
            }
        
            axios.get(`http://127.0.0.1:8000/posts/like/${id}`).then(
                resp => {
                    this.setState({
                    likes:resp.data.likes
                })
            }
            )
            
        }

        postLike = (token,id) => {
            axios.defaults.headers = {
                "Content-Type": "application/json",
                Authorization:  `Token ${token}`
            }
        
            axios.post(`http://127.0.0.1:8000/posts/like/${id}`)
            .catch(err => console.log(err))
        }
        
        

        
        render()
        {
            const {post_image,post_caption,likes,id} = this.state
            return(
                <div className='post-group'>
                    <PostImage path={post_image} className='post-image'/>
                    <div className='group'>
                        <h1><u>Caption</u> <br/>{post_caption}</h1>
                        <button onClick={this.postLike(this.props.token,id)} className='like-button'>Likes {likes}</button>
                    </div>   
                </div>
            )
        }
       
    
}


const mapStateToProps = state => {

    return {
        token: state.auth.token,
    }
}

export default connect(mapStateToProps)(PostContainer);