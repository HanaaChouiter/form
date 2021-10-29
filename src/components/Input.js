import React from 'react';

class Input extends React.Component {
    render() {
        const { type, placeholder, onChange } = this.props
        
        return (
        <div>
            <input 
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            />
        </div>
        );
    }
}

export default Input;