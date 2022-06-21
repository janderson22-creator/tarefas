import React from 'react';
import './Button.css'

const Button = ({ children , onClick}) => {
    
    
    return ( 
        <div>
            <button className='task-button-add' onClick={onClick}>
                {children}
            </button>
        </div>
     );
}
export default Button;