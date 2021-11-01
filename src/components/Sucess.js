import React from 'react';

class Success extends React.Component {
    render() {
        const { email } = this.props
        
        return (
        <div  >
            <h1>Form Submitted</h1>
            <h4 >{email}
            </h4>
        </div>
        );
    }
}

export default Success;