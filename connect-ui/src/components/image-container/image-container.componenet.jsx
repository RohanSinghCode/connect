import React from 'react';


import './image-container.style.css';


const ImageContainer = (props) => {
    return(
        <div 
        className='image-container'
        style={{
            backgroundImage:`url(http://127.0.0.1:8000${props.path})`
        }}
        >
        </div>
    )
       
}


export default ImageContainer;