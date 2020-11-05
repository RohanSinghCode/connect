import React from 'react';

import './post-image.style.css';


const PostImage = ({className,path}) => {
    console.log(path)
    return(
        <div 
        className={`post-image ${className}`}
        style={{
            backgroundImage:`url(${path})`
        }}
        >
        </div>
    )
        
   
}

export default PostImage;

