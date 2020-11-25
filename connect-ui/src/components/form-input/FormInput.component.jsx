import React from 'react';

import './FormInput.style.css';


const FormInput = ({className,handleChange,label, ...otherProps}) => {
    return(
        <div className="group">
            <label>{label.toUpperCase()}</label>
            <input
                onChange={handleChange}
                {...otherProps}
                className={`${className}`}
            />
            
        </div>
    )
}

export default FormInput;