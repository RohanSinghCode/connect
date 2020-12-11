import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import PostImage from '../../components/post-image/post-image.component';
import './post-detail.style.css';

class PostDetail extends React.Component {

    constructor(props) 
    {
        super(props);

        this.state = {
            post_caption:"",
            post_image:"",
            likes:0,
            id:props.id
        }
    }

    componentDidMount()
    {
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization:  `Token ${this.props.token}`
        }

        const {id} = this.state

        axios.get(`http://127.0.0.1:8000/posts/detail/${id}`).then(
            resp => {
                this.setState({
                    post_caption:resp.data.post_caption,
                    post_image:resp.data.post_image
                })
            }
        )

        axios.get(`http://127.0.0.1:8000/posts/like/${id}`).then(
            resp => {
                this.setState({
                likes:resp.data.likes
            })
        }
        )

    }

    render()
    {   
        const {post_caption,post_image,likes} = this.state;
        return(
            <div className='post-detail' >
               <PostImage path={post_image} className='detail-image'/> 
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        token:state.auth.token
    }
}

export default connect(mapStateToProps)(PostDetail);