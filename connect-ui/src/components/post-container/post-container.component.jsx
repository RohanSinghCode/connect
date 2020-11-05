import React from 'react';

import PostImage from '../post-image/post-image.component.jsx';

import './post-container.style.css';


const PostContainer = props => {
        return(
            <div className='post-group'>
                <PostImage path={props.post.post_image} />
                <h1>{props.post.post_caption}</h1>
                <h1>{props.post.votes}</h1>
            </div>
        )
    
}

export default PostContainer;