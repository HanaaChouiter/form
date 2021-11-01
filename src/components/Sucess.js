import React from 'react';

class Success extends React.Component {
    render() {
        const { email } = this.props
        
        return (
        <div className="bg-light text-dark p-5">
            <h2 className="text-center mb-5">Form Submitted</h2>
            <h5 className="text-info">{email}
            </h5>
        </div>
        );
    }
}

export default Success;