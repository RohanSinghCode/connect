import React from 'react';

import PostImage from '../post-image/post-image.component.jsx';

import './post-container.style.css';


const PostContainer = props => {
        return(
            <div className='post-group'>
                <PostImage path={props.post.post_image} className='post-image'/>
                <div className='group'>
                    <h1><u>Caption</u> <br/>{props.post.post_caption}</h1>
                    <h1>Likes {props.post.votes}</h1>
                </div>
                
            </div>
        )
    
}

export default PostContainer;