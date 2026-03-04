import React from 'react';

const ActionButton = ({ icon, text }) => {
  return (
    <>
      <button className="action-btn">
        <div className="btn-icon">{icon}</div>
        <div className="btn-text">{text}</div>
      </button>
    </>
    
  );
};

export default ActionButton;