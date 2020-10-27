import React from 'react';

import './CustomButton.style.css';



const CustomButton = ({className,...props}) => {
    
        return(
                <button
                {...props}
                className={`custom-button ${className}`}
                >
                {props.name.toUpperCase()}
                </button>
        )
}


export default CustomButton;