import React from 'react';
import './Cancel.scss';

const Cancel = () => {
    const handleCancel = () => {
        alert('Action canceled');
    };

    return (
        <div className="container">
            <h1 className="header">Cancel Page</h1>
            <button className="button" onClick={handleCancel}>Cancel</button>
        </div>
    );
};

export default Cancel;
