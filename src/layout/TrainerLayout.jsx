import { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

const cognizantLogoUrl = 'https://miro.medium.com/v2/resize:fit:2400/1*a0PkTH4gryDQdVcLqDGpkA.png';

const TrainerLayout = () => {
  const navigate = useNavigate();
  // State to control sidebar visibility, initialized to true (open)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Define Cognizant-like color palette
  const cognizantBlue = '#000048';       
  const cognizantLightGray = '#F8F9FA';  
  const navLinkActiveBg = '#1a1a80';     
  const logoutButtonColor = '#dc3545';   

  // Handle logout functionality
  const handleLogout = () => {
    console.log('Trainer logged out');
    navigate('/'); // Navigate to the home page or login page after logout
  };

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Styles for the sidebar container
  const sidebarStyle = {
    width: isSidebarOpen ? '220px' : '60px', 
    height: '100vh',                         
    position: 'fixed',                       
    top: 0,                                  
    left: 0,                                 
    backgroundColor: cognizantBlue,          
    color: 'white',                          
    transition: 'width 0.3s ease-in-out',    
    overflowX: 'hidden',                     
    flexShrink: 0,                          
    zIndex: 1000,                            
  };

  // Styles for the main content area
  const mainContentStyle = {
    marginLeft: isSidebarOpen ? '220px' : '60px',
    transition: 'margin-left 0.3s ease-in-out', 
    backgroundColor: cognizantLightGray,          
    flexGrow: 1,                                 
    padding: '1.5rem',                           
    overflowY: 'auto',                            
  };

  // Array of navigation items for easy mapping
  const navItems = [
    { to: '/trainer/dashboard', label: 'Dashboard', icon: 'bi-house-door' },
    { to: '/trainer/notification', label: 'Notifications', icon: 'bi-bell' },
    { to: '/trainer/log-effort', label: 'Log Effort', icon: 'bi-pencil-square' },
    { to: '/trainer/update-info', label: 'Update Info', icon: 'bi-info-circle' },
    { to: '/trainer/reset-password', label: 'Reset Password', icon: 'bi-key' },
  ];

  return (
    <div className="d-flex vh-100">
      <div style={sidebarStyle} className="d-flex flex-column text-white">
        {/* Toggle Button for Sidebar (Hamburger Icon) */}
        <div className="d-flex align-items-center justify-content-between px-3 py-2 border-bottom border-secondary"
             style={{ minHeight: '56px' }}> 
          <button
            className="btn p-0 text-white d-flex align-items-center" 
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
            style={{ fontSize: '1.5rem', lineHeight: '1', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <i className="bi bi-list fs-4"></i> {/* Bootstrap list icon for hamburger */}
          </button>
          {isSidebarOpen && (
            <span className="ms-2 fw-bold text-uppercase fs-6">Trainer Panel</span>
          )}
        </div>

        {/* Sidebar Content (visible only when open) */}
        {isSidebarOpen && (
          <div className="d-flex flex-column w-100 h-100 py-3 px-2">
            {/* Cognizant Logo */}
            

            {/* Navigation Links */}
            <ul className="nav flex-column flex-grow-1">
              {navItems.map(({ to, label }) => (
                <li className="nav-item mb-2" key={to}>
                  <NavLink
                    to={to}
                    className="nav-link text-white py-2 px-3 rounded d-flex align-items-center"
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? navLinkActiveBg : 'transparent',
                      transition: 'background-color 0.3s ease',
                      textDecoration: 'none', // Remove underline
                    })}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = navLinkActiveBg)}
                    onMouseLeave={(e) => {
                      // Only revert background if not the active link
                      if (!window.location.pathname.startsWith(to)) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    <i className={`bi ${label === 'Dashboard' ? 'bi-house-door' :
                                      label === 'Notifications' ? 'bi-bell' :
                                      label === 'Log Effort' ? 'bi-pencil-square' :
                                      label === 'Update Info' ? 'bi-info-circle' :
                                      label === 'Reset Password' ? 'bi-key' : 'bi-circle'
                                    } me-3 fs-5`}></i> {/* Icon and margin-right */}
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Logout Button (visible only when open) */}
            <div className="mt-auto pt-3 px-2"> {/* mt-auto pushes it to the bottom */}
              <button
                className="btn w-100 shadow-sm"
                onClick={handleLogout}
                style={{
                  backgroundColor: logoutButtonColor,
                  borderColor: logoutButtonColor,
                  color: 'white',
                  transition: 'background-color 0.3s ease, border-color 0.3s ease',
                  padding: '0.6rem 1.5rem', // Adjust padding for a better look
                  borderRadius: '0.5rem', // Slightly more rounded corners
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#b02a37'; // Darker red on hover
                  e.currentTarget.style.borderColor = '#b02a37';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = logoutButtonColor;
                  e.currentTarget.style.borderColor = logoutButtonColor;
                }}
              >
                Logout
              </button>
            </div>
          </div>
        )}

        {/* Sidebar Icons (visible only when collapsed) */}
        {!isSidebarOpen && (
          <ul className="nav flex-column flex-grow-1 pt-3"> {/* pt-3 for spacing */}
            {navItems.map(({ to, icon, label }) => (
              <li className="nav-item mb-2" key={to}>
                <NavLink
                  to={to}
                  className="nav-link text-white text-center py-2 px-0 d-flex flex-column align-items-center"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? navLinkActiveBg : 'transparent',
                    transition: 'background-color 0.3s ease',
                    textDecoration: 'none',
                  })}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = navLinkActiveBg)}
                  onMouseLeave={(e) => {
                    if (!window.location.pathname.startsWith(to)) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  <i className={`bi ${icon} fs-5`}></i> {/* Bootstrap icon */}
                  {/* <small className="mt-1">{label.split(' ')[0]}</small> Show first word of label */}
                </NavLink>
              </li>
            ))}
            {/* Logout Icon (visible only when collapsed) */}
            <li className="nav-item mt-auto pt-3">
              <button
                className="btn w-100 d-flex flex-column align-items-center justify-content-center"
                onClick={handleLogout}
                style={{
                  backgroundColor: logoutButtonColor,
                  borderColor: logoutButtonColor,
                  color: 'white',
                  transition: 'background-color 0.3s ease, border-color 0.3s ease',
                  padding: '0.6rem 0.5rem', // Adjust padding for icon-only button
                  borderRadius: '0.5rem',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#b02a37';
                  e.currentTarget.style.borderColor = '#b02a37';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = logoutButtonColor;
                  e.currentTarget.style.borderColor = logoutButtonColor;
                }}
              >
                <i className="bi bi-box-arrow-right fs-5"></i> 
                
              </button>
            </li>
          </ul>
        )}
      </div>

      {/* Main Content Area */}
      <div style={mainContentStyle}>
        <Outlet /> 
      </div>
    </div>
  );
};

export default TrainerLayout;
