import React from 'react';
import ActionButton from './ActionButton.jsx';
import Header from "./Header.jsx";

const Dashboard = () => {
  return (
    <div>
      <Header />
    <div className="dashboard-body">
  
      <div className="button-container">
        <ActionButton 
          icon="📅" 
          text="Attendence" 
        />

        <ActionButton 
          icon="🔔" 
          text="Create Notification" 
        />

        <ActionButton 
          icon="📁" 
          text="Others" 
        />
      </div>
    </div>

    </div>
  );
};

export default Dashboard;