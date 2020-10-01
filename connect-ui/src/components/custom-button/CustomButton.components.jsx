import React from 'react';

import './CustomButton.style.css';



const CustomButton = (props) => {
    
        return(
            <div className="custom-button">
                <button
                type={props.type}
                value = {props.value}
                >
                {props.name.toUpperCase()}
                </button>
            </div>
        )
}


export default CustomButton;