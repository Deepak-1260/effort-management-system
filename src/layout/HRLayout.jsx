// import { NavLink, Outlet, useNavigate } from 'react-router-dom'

// const HRLayout = () => {
//   const navigate = useNavigate()

//   const handleLogout = () => {
//     console.log('HR logged out')
//     navigate('/')
//   }

//   return (
//     <div className="d-flex vh-100">
//       {/* Sidebar */}
//       <div className="bg-dark text-white p-3" style={{ width: '240px' }}>
//         <h5 className="text-center mb-4">HR PANEL</h5>
//         <ul className="nav flex-column">
//           <li className="nav-item mb-2">
//             <NavLink to="/hr/dashboard" className="nav-link text-white">Dashboard</NavLink>
//           </li>
//           <li className="nav-item mb-2">
//             <NavLink to="/hr/add-trainer" className="nav-link text-white">Add New Trainer</NavLink>
//           </li>

//           <li className="nav-item mb-2">
//             <NavLink to="/hr/add-cohort" className="nav-link text-white">Add New Cohort</NavLink>
//           </li>
//           <li className="nav-item mb-2">
//             <NavLink to="/hr/allocate-trainer" className="nav-link text-white">Allocate Trainer</NavLink>
//           </li>
//           <li className="nav-item mb-2">
//              <NavLink to="/hr/approvals"  className="nav-link text-white  py-2 px-3 rounded">Approvals</NavLink>

//           </li>
//           <li className="nav-item mb-2">
//             <NavLink to="/hr/search" className="nav-link text-white">Search</NavLink>
//           </li>
//           <li className="nav-item mb-2">
//             <NavLink to="/hr/delete-trainer" className="nav-link text-white">Delete Trainer</NavLink>
//           </li>
//           <li className="nav-item mb-2">
//             <NavLink to="/hr/delete-cohort" className="nav-link text-white">Delete Cohort</NavLink>
//           </li>
//           <li className="nav-item mb-2">
//             <NavLink to="/hr/download" className="nav-link text-white">Download Data</NavLink>
//           </li>
//           <li className="nav-item mt-3">
//             <button className="btn btn-danger w-100" onClick={handleLogout}>Logout</button>
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="flex-grow-1 p-4 bg-light">
//         <Outlet />
//       </div>
//     </div>
//   )
// }

// export default HRLayout
// import { useState } from 'react';
// import { NavLink, Outlet, useNavigate } from 'react-router-dom';

// const HRLayout = () => {
//   const navigate = useNavigate();
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const cognizantBlue = '#000048';
//   const cognizantLightGray = '#F8F9FA';
//   const navLinkActiveBg = '#1a1a80';
//   const logoutButtonColor = '#dc3545';

//   const handleLogout = () => {
//     console.log('HR logged out');
//     navigate('/');
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const sidebarStyle = {
//     width: isSidebarOpen ? '200px' : '60px',
//     height: '100vh',
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     backgroundColor: cognizantBlue,
//     color: 'white',
//     transition: 'width 0.3s ease-in-out',
//     overflowX: 'hidden',
//     flexShrink: 0,
//   };

//   const mainContentStyle = {
//     marginLeft: isSidebarOpen ? '200px' : '60px',
//     transition: 'margin-left 0.3s ease-in-out',
//     backgroundColor: cognizantLightGray,
//   };

//   const navItems = [
//     { to: '/hr/dashboard', label: 'Dashboard' },
//     { to: '/hr/add-trainer', label: 'Add New Trainer' },
//     { to: '/hr/add-cohort', label: 'Add New Cohort' },
//     { to: '/hr/allocate-trainer', label: 'Allocate Trainer' },
//     { to: '/hr/approvals', label: 'Approvals' },
//     { to: '/hr/search', label: 'Search' },
//     { to: '/hr/delete-trainer', label: 'Delete Trainer' },
//     { to: '/hr/delete-cohort', label: 'Delete Cohort' },
//     { to: '/hr/download', label: 'Download Data' },
//   ];

//   return (
//     <div className="d-flex vh-100">
//       {/* Sidebar */}
//       <div style={sidebarStyle} className="d-flex flex-column text-white">
//         <div className="d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
//           <button
//             className="btn p-0 text-white"
//             onClick={toggleSidebar}
//             aria-label="Toggle sidebar"
//             style={{ fontSize: '1.5rem', lineHeight: '1' }}
//           >
//             ☰
//           </button>
//           {isSidebarOpen && <span className="ms-2 fw-bold">HR Panel</span>}
//         </div>

//         {isSidebarOpen && (
//           <div className="d-flex flex-column w-100 h-100 pt-3 px-2">
//             <ul className="nav flex-column">
//               {navItems.map(({ to, label }) => (
//                 <li className="nav-item mb-2" key={to}>
//                   <NavLink
//                     to={to}
//                     className="nav-link text-white py-2 px-3 rounded"
//                     style={({ isActive }) => ({
//                       backgroundColor: isActive ? navLinkActiveBg : 'transparent',
//                       transition: 'background-color 0.3s ease',
//                     })}
//                     onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = navLinkActiveBg)}
//                     onMouseLeave={(e) => {
//                       if (!window.location.pathname.startsWith(to)) {
//                         e.currentTarget.style.backgroundColor = 'transparent';
//                       }
//                     }}
//                   >
//                     {label}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>

//             <div className="mt-2 px-2 mb-2 text-start">
//               <button
//                 className="btn shadow-sm"
//                 onClick={handleLogout}
//                 style={{
//                   backgroundColor: logoutButtonColor,
//                   borderColor: logoutButtonColor,
//                   color: 'white',
//                   boxShadow: '0 2px 5px rgba(0, 0, 0, 0.25)',
//                   padding: '0.5rem 1.5rem',
//                   width: 'auto',
//                 }}
//               >
//                 Logout
//               </button>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Main Content */}
//       <div className="flex-grow-1 p-4" style={mainContentStyle}>
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default HRLayout;
import { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

const HRLayout = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const cognizantBlue = '#000048';
  const cognizantLightGray = '#F8F9FA';
  const navLinkActiveBg = '#1a1a80';
  const logoutButtonColor = '#dc3545';

  const handleLogout = () => {
    console.log('HR logged out');
    navigate('/');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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

  const mainContentStyle = {
    marginLeft: isSidebarOpen ? '220px' : '60px',
    transition: 'margin-left 0.3s ease-in-out',
    backgroundColor: cognizantLightGray,
  };

  const navItems = [
    { to: '/hr/dashboard', label: 'Dashboard', icon: 'bi-house-door' },
    { to: '/hr/add-trainer', label: 'Add Trainer', icon: 'bi-person-plus-fill' },
    { to: '/hr/add-cohort', label: 'Add Cohort', icon: 'bi-journal-plus' },
    { to: '/hr/allocate-trainer', label: 'Allocate Trainer', icon: 'bi-link-45deg' },
    { to: '/hr/approvals', label: 'Approvals', icon: 'bi-check2-square' },
    { to: '/hr/search', label: 'Search', icon: 'bi-search' },
    { to: '/hr/delete-trainer', label: 'Delete Trainer', icon: 'bi-person-dash' },
    { to: '/hr/delete-cohort', label: 'Delete Cohort', icon: 'bi-trash' },
    { to: '/hr/download', label: 'Download Data', icon: 'bi-download' },
  ];

  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <div style={sidebarStyle} className="d-flex flex-column text-white">
        {/* Toggle Button */}
        <div className="d-flex align-items-center justify-content-between px-3 py-2 border-bottom border-secondary" style={{ minHeight: '56px' }}>
          <button
            className="btn p-0 text-white"
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
            style={{ fontSize: '1.5rem', lineHeight: '1', background: 'none', border: 'none' }}
          >
            <i className="bi bi-list fs-4"></i>
          </button>
          {isSidebarOpen && <span className="ms-2 fw-bold text-uppercase fs-6">HR Panel</span>}
        </div>

        {/* Sidebar Expanded */}
        {isSidebarOpen && (
          <div className="d-flex flex-column w-100 h-100 pt-3 px-2">
            <ul className="nav flex-column">
              {navItems.map(({ to, label, icon }) => (
                <li className="nav-item mb-2" key={to}>
                  <NavLink
                    to={to}
                    className="nav-link text-white py-2 px-3 rounded d-flex align-items-center"
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
                    <i className={`bi ${icon} me-3 fs-5`}></i> {label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="mt-auto px-2 mb-2 text-start">
              <button
                className="btn shadow-sm w-100"
                onClick={handleLogout}
                style={{
                  backgroundColor: logoutButtonColor,
                  borderColor: logoutButtonColor,
                  color: 'white',
                  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.25)',
                  padding: '0.5rem 1.5rem',
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
                Logout
              </button>
            </div>
          </div>
        )}

        {/* Sidebar Collapsed (icons only) */}
        {!isSidebarOpen && (
          <ul className="nav flex-column flex-grow-1 pt-3">
            {navItems.map(({ to, icon }) => (
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
                  <i className={`bi ${icon} fs-5`}></i>
                </NavLink>
              </li>
            ))}
            {/* Logout Icon */}
            <li className="nav-item mt-auto pt-3">
              <button
                className="btn w-100 d-flex flex-column align-items-center justify-content-center"
                onClick={handleLogout}
                style={{
                  backgroundColor: logoutButtonColor,
                  borderColor: logoutButtonColor,
                  color: 'white',
                  transition: 'background-color 0.3s ease, border-color 0.3s ease',
                  padding: '0.6rem 0.5rem',
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

      {/* Main Content */}
      <div className="flex-grow-1 p-4" style={mainContentStyle}>
        <Outlet />
      </div>
    </div>
  );
};

export default HRLayout;

