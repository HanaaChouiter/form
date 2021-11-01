import React from 'react';

class Input extends React.Component {
    render() {
        const { type, placeholder, onChange, className, label } = this.props
        
        return (
        <div>
            {label}
            <input 
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            className={className}
            /> 
        </div>
        );
    }
}

export default Input;