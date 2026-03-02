import React from 'react';
import ActionButton from './ActionButton.jsx';
import Header from "../User pages/Header";

const Dashboard = () => {
  return (
    <div>
      <Header />
    <div className="dashboard-body">
  
      <div className="button-container">
        {/* Button 1: Attendance Collecting */}
        <ActionButton 
          icon="📅" 
          text="Attendence" 
        />

        {/* Button 2: Create Notification */}
        <ActionButton 
          icon="🔔" 
          text="Create Notification" 
        />

        {/* Button 3: Others */}
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