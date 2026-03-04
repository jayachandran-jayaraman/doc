import React, { useState } from 'react';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo-box">LOGO</div>
        <span className="logo-text">Department Dash Bord</span>
      </div>

      <div className="profile-container">
        <div className="profile-trigger" onClick={toggleDropdown}>

          <img 
            src="https://via.placeholder.com/40" 
            alt="User Avatar" 
            className="avatar" 
          />
          <span className="dropdown-icon">▼</span>
        </div>

        {isDropdownOpen && (
          <div className="dropdown-menu">
            <div className="dropdown-item">Profile</div>
            <div className="dropdown-item">Log out</div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;