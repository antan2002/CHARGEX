import React from 'react';
import './Success.scss';

const Success = () => {
    return (
        <div className="success-container">
            <div className="success-message">
                <h1>Success!</h1>
                <p>Your operation was completed successfully.</p>
                <button className="success-button" onClick={() => window.location.href = '/'}>Go Home</button>
            </div>
        </div>
    );
};

export default Success;
