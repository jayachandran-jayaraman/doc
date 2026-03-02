import React, { useState } from 'react';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      {/* Left Side: Logo and Title */}
      <div className="logo-container">
        <div className="logo-box">LOGO</div>
        <span className="logo-text">Department Dash Bord</span>
      </div>

      {/* Right Side: Profile Dropdown */}
      <div className="profile-container">
        <div className="profile-trigger" onClick={toggleDropdown}>
          {/* Using a placeholder image for the avatar */}
          <img 
            src="https://via.placeholder.com/40" 
            alt="User Avatar" 
            className="avatar" 
          />
          <span className="dropdown-icon">▼</span>
        </div>

        {/* Dropdown Menu (Conditional Rendering) */}
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