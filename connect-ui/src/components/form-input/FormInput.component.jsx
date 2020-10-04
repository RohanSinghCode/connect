import React from 'react';

import './FormInput.style.css';


const FormInput = ({handleChange,label, ...otherProps}) => {
    return(
        <div className="group">
            <label>{label.toUpperCase()}</label>
            <input
                onChange={handleChange}
                {...otherProps}
                
            />
            
        </div>
    )
}

export default FormInput;