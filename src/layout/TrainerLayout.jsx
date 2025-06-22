// import { NavLink, Outlet, useNavigate } from 'react-router-dom'

// const TrainerLayout = () => {
//   const navigate = useNavigate()

//   const handleLogout = () => {
//     console.log('Trainer logged out')
//     navigate('/')
//   }

//   return (
//     <div className="d-flex vh-100">
//       {/* Sidebar */}
//       <div className="bg-dark text-white p-3" style={{ width: '220px' }}>
//         <h5 className="text-center mb-4">Trainer Panel</h5>
//         <ul className="nav flex-column">
//           <li className="nav-item mb-2">
//             <NavLink to="/trainer/dashboard" className="nav-link text-white">Dashboard</NavLink>
//           </li>
//           <li className="nav-item mb-2">
//             <NavLink to="/trainer/log-effort" className="nav-link text-white">Log Effort</NavLink>
//           </li>
//           <li className="nav-item mb-2">
//             <NavLink to="/trainer/update-info" className="nav-link text-white">Update Info</NavLink>
//           </li>
//           <li className="nav-item mb-2">
//             <NavLink to="/trainer/raise-query" className="nav-link text-white">Raise Query</NavLink>
//           </li>
//           <li className="nav-item mt-3">
//             <button className="btn btn-sm btn-danger w-100" onClick={handleLogout}>Logout</button>
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

// export default TrainerLayout
// import { useState } from 'react';
// import { NavLink, Outlet, useNavigate } from 'react-router-dom';

// // Assume your logo is in public/images/cognizant_logo.svg
// // For direct Bootstrap usage, if you put it in 'public' folder,
// // you'd typically reference it like '/images/cognizant_logo.svg'
// // For React setup, it's better to import it like below (if using CRA/Vite)
// const cognizantLogoUrl = 'https://miro.medium.com/v2/resize:fit:2400/1*a0PkTH4gryDQdVcLqDGpkA.png';
// const TrainerLayout = () => {
//   const navigate = useNavigate();
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State to control sidebar visibility

//   // Define Cognizant-like color palette
//   const cognizantBlue = '#000048';        // Main Cognizant Blue
//   const cognizantDarkBlue = '#000048';    // Deeper blue for sidebar background
//   const cognizantLightGray = '#F8F9FA';   // Light gray for main content background
//   const navLinkActiveBg = '#000048';     // Slightly lighter blue for active nav link background
//   const logoutButtonHoverBg = '#0062A0'; // Slightly darker blue for logout button hover

//   const handleLogout = () => {
//     console.log('Trainer logged out');
//     navigate('/');
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   // Helper styles for transitions (Bootstrap doesn't have direct width transitions)
//   const sidebarTransitionStyle = {
//     transition: 'width 0.3s ease-in-out, margin-left 0.3s ease-in-out',
//     overflowX: 'hidden', // Hide content overflowing horizontally during transition
//     flexShrink: 0, // Prevent sidebar from shrinking below its width
//   };

//   const mainContentTransitionStyle = {
//     transition: 'margin-left 0.3s ease-in-out',
//   };

//   return (
//     <div className="d-flex vh-100">
//       {/* Sidebar */}
//       <div
//         className="text-white p-3 d-flex flex-column"
//         style={{
//           width: isSidebarOpen ? '220px' : '60px',
//           backgroundColor: cognizantDarkBlue,
//           position: 'relative', // For hamburger button positioning
//           ...sidebarTransitionStyle, // Apply custom transition
//         }}
//       >
//         {/* Hamburger Icon (using Bootstrap's navbar-toggler-icon) */}
//         <button
//           className="navbar-toggler p-0 border-0 align-self-start position-absolute"
//           type="button"
//           onClick={toggleSidebar}
//           aria-controls="sidebarContent"
//           aria-expanded={isSidebarOpen}
//           aria-label="Toggle navigation"
//           style={{ top: '15px', left: '15px', zIndex: 1050 }}
//         >
//           <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span> {/* Invert for white icon */}
//         </button>

//         {isSidebarOpen && (
//           <div className="d-flex flex-column w-100 h-100 pt-5"> {/* Added pt-5 to clear hamburger */}
//             {/* Cognizant Logo */}
//             <div className="text-center mb-4 mt-2"> 
//               <img
//                 src={cognizantLogoUrl}
//                 alt="Cognizant Logo"
//                 className="img-fluid" // Make image responsive within its container
//                 style={{ maxWidth: '50px', height: '50' }}
//               />
//             </div>

//             <h5 className="text-center mb-4">Trainer Panel</h5>

//             <ul className="nav flex-column flex-grow-1">
//               <li className="nav-item mb-2">
//                 <NavLink
//                   to="/trainer/dashboard"
//                   className="nav-link text-white py-2 px-3 rounded"
//                   style={({ isActive }) => ({
//                     backgroundColor: isActive ? navLinkActiveBg : 'transparent',
//                     transition: 'background-color 0.3s ease',
//                   })}
//                   onMouseEnter={(e) => e.currentTarget.style.backgroundColor = navLinkActiveBg}
//                   onMouseLeave={(e) => {
//                     if (!window.location.pathname.startsWith('/trainer/dashboard')) {
//                       e.currentTarget.style.backgroundColor = 'transparent';
//                     }
//                   }}
//                 >
//                   Dashboard
//                 </NavLink>
//               </li>
//               <li className="nav-item mb-2">
//                 <NavLink
//                   to="/trainer/log-effort"
//                   className="nav-link text-white py-2 px-3 rounded"
//                   style={({ isActive }) => ({
//                     backgroundColor: isActive ? navLinkActiveBg : 'transparent',
//                     transition: 'background-color 0.3s ease',
//                   })}
//                   onMouseEnter={(e) => e.currentTarget.style.backgroundColor = navLinkActiveBg}
//                   onMouseLeave={(e) => {
//                     if (!window.location.pathname.startsWith('/trainer/log-effort')) {
//                       e.currentTarget.style.backgroundColor = 'transparent';
//                     }
//                   }}
//                 >
//                   Log Effort
//                 </NavLink>
//               </li>
//               <li className="nav-item mb-2">
//                 <NavLink
//                   to="/trainer/update-info"
//                   className="nav-link text-white py-2 px-3 rounded"
//                   style={({ isActive }) => ({
//                     backgroundColor: isActive ? navLinkActiveBg : 'transparent',
//                     transition: 'background-color 0.3s ease',
//                   })}
//                   onMouseEnter={(e) => e.currentTarget.style.backgroundColor = navLinkActiveBg}
//                   onMouseLeave={(e) => {
//                     if (!window.location.pathname.startsWith('/trainer/update-info')) {
//                       e.currentTarget.style.backgroundColor = 'transparent';
//                     }
//                   }}
//                 >
//                   Update Info
//                 </NavLink>
//               </li>
//               <li className="nav-item mb-2">
//                 <NavLink
//                   to="/trainer/raise-query"
//                   className="nav-link text-white py-2 px-3 rounded"
//                   style={({ isActive }) => ({
//                     backgroundColor: isActive ? navLinkActiveBg : 'transparent',
//                     transition: 'background-color 0.3s ease',
//                   })}
//                   onMouseEnter={(e) => e.currentTarget.style.backgroundColor = navLinkActiveBg}
//                   onMouseLeave={(e) => {
//                     if (!window.location.pathname.startsWith('/trainer/raise-query')) {
//                       e.currentTarget.style.backgroundColor = 'transparent';
//                     }
//                   }}
//                 >
//                   Raise Query
//                 </NavLink>
//               </li>
//               <li className="nav-item mt-auto pt-3">
//                 <button
//                   className="btn w-100"
//                   onClick={handleLogout}
//                   style={{
//                     backgroundColor: cognizantBlue,
//                     borderColor: cognizantBlue,
//                     color: 'white',
//                     transition: 'background-color 0.3s ease, border-color 0.3s ease',
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.backgroundColor = logoutButtonHoverBg;
//                     e.currentTarget.style.borderColor = logoutButtonHoverBg;
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.backgroundColor = cognizantBlue;
//                     e.currentTarget.style.borderColor = cognizantBlue;
//                   }}
//                 >
//                   Logout
//                 </button>
//               </li>
//             </ul>
//           </div>
//         )}
//         {!isSidebarOpen && ( // Display icons only when sidebar is closed
//             <ul className="nav flex-column flex-grow-1 mt-5"> {/* mt-5 for spacing from toggler */}
//                 <li className="nav-item mb-2">
//                     <NavLink to="/trainer/dashboard" className="nav-link text-white text-center py-2 px-0">
//                         <i className="bi bi-house-door d-block fs-5"></i> {/* Bootstrap icon example */}
//                         <small>Dash</small>
//                     </NavLink>
//                 </li>
//                 <li className="nav-item mb-2">
//                     <NavLink to="/trainer/log-effort" className="nav-link text-white text-center py-2 px-0">
//                         <i className="bi bi-pencil-square d-block fs-5"></i>
//                         <small>Effort</small>
//                     </NavLink>
//                 </li>
//                 <li className="nav-item mb-2">
//                     <NavLink to="/trainer/update-info" className="nav-link text-white text-center py-2 px-0">
//                         <i className="bi bi-info-circle d-block fs-5"></i>
//                         <small>Info</small>
//                     </NavLink>
//                 </li>
//                 <li className="nav-item mb-2">
//                     <NavLink to="/trainer/raise-query" className="nav-link text-white text-center py-2 px-0">
//                         <i className="bi bi-question-circle d-block fs-5"></i>
//                         <small>Query</small>
//                     </NavLink>
//                 </li>
//                  <li className="nav-item mt-auto pt-3">
//                     <button
//                         className="btn w-100 d-flex flex-column align-items-center justify-content-center"
//                         onClick={handleLogout}
//                         style={{
//                             backgroundColor: cognizantBlue,
//                             borderColor: cognizantBlue,
//                             color: 'white',
//                             transition: 'background-color 0.3s ease, border-color 0.3s ease',
//                         }}
//                         onMouseEnter={(e) => {
//                             e.currentTarget.style.backgroundColor = logoutButtonHoverBg;
//                             e.currentTarget.style.borderColor = logoutButtonHoverBg;
//                         }}
//                         onMouseLeave={(e) => {
//                             e.currentTarget.style.backgroundColor = cognizantBlue;
//                             e.currentTarget.style.borderColor = cognizantBlue;
//                         }}
//                     >
//                         <i className="bi bi-box-arrow-right fs-5"></i>
//                         <small>Out</small>
//                     </button>
//                 </li>
//             </ul>
//         )}
//       </div>

//       {/* Main Content */}
//       <div
//         className="flex-grow-1 p-4"
//         style={{
//           backgroundColor: cognizantLightGray,
//           marginLeft: isSidebarOpen ? '0' : '0', // No margin-left needed if sidebar is positioned absolutely or fixed
//           ...mainContentTransitionStyle, // Apply custom transition
//         }}
//       >
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default TrainerLayout;
// import { useState } from 'react';
// import { NavLink, Outlet, useNavigate } from 'react-router-dom';


// const cognizantLogoUrl = 'https://miro.medium.com/v2/resize:fit:2400/1*a0PkTH4gryDQdVcLqDGpkA.png';
// const TrainerLayout = () => {
//   const navigate = useNavigate();
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State to control sidebar visibility

//   // Define Cognizant-like color palette
//   const cognizantBlue = '#000048';        // Main Cognizant Blue
//   const cognizantDarkBlue = '#000048';    // Deeper blue for sidebar background
//   const cognizantLightGray = '#F8F9FA';   // Light gray for main content background
//   const navLinkActiveBg = '#000048';     // Slightly lighter blue for active nav link background
//   const logoutButtonHoverBg = '#0062A0'; // Slightly darker blue for logout button hover

//   const handleLogout = () => {
//     console.log('Trainer logged out');
//     navigate('/');
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   // Helper styles for transitions (Bootstrap doesn't have direct width transitions)
//   const sidebarTransitionStyle = {
//     transition: 'width 0.3s ease-in-out, margin-left 0.3s ease-in-out',
//     overflowX: 'hidden', // Hide content overflowing horizontally during transition
//     flexShrink: 0, // Prevent sidebar from shrinking below its width
//   };

//   const mainContentTransitionStyle = {
//     transition: 'margin-left 0.3s ease-in-out',
//   };

//   return (
//     <div className="d-flex vh-100">
//       {/* Sidebar */}
//       <div
//         className="text-white p-3 d-flex flex-column"
//         style={{
//           width: isSidebarOpen ? '220px' : '60px',
//           backgroundColor: cognizantDarkBlue,
//           position: 'relative', // For hamburger button positioning
//           ...sidebarTransitionStyle, // Apply custom transition
//         }}
//       >
//         {/* Hamburger Icon (using Bootstrap's navbar-toggler-icon) */}
//         <button
//           className="navbar-toggler p-0 border-0 align-self-start position-absolute"
//           type="button"
//           onClick={toggleSidebar}
//           aria-controls="sidebarContent"
//           aria-expanded={isSidebarOpen}
//           aria-label="Toggle navigation"
//           style={{ top: '15px', left: '15px', zIndex: 1050 }}
//         >
//           <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span> {/* Invert for white icon */}
//         </button>

//         {isSidebarOpen && (
//           <div className="d-flex flex-column w-100 h-100 pt-5"> {/* Added pt-5 to clear hamburger */}
//             {/* Cognizant Logo */}
//             <div className="text-center mb-4 mt-2"> 
//               <img
//                 src={cognizantLogoUrl}
//                 alt="Cognizant Logo"
//                 className="img-fluid" // Make image responsive within its container
//                 style={{ maxWidth: '50px', height: '50' }}
//               />
//             </div>

//             <h5 className="text-center mb-4">Trainer Panel</h5>

//             <ul className="nav flex-column flex-grow-1">
//               <li className="nav-item mb-2">
//                 <NavLink
//                   to="/trainer/dashboard"
//                   className="nav-link text-white py-2 px-3 rounded"
//                   style={({ isActive }) => ({
//                     backgroundColor: isActive ? navLinkActiveBg : 'transparent',
//                     transition: 'background-color 0.3s ease',
//                   })}
//                   onMouseEnter={(e) => e.currentTarget.style.backgroundColor = navLinkActiveBg}
//                   onMouseLeave={(e) => {
//                     if (!window.location.pathname.startsWith('/trainer/dashboard')) {
//                       e.currentTarget.style.backgroundColor = 'transparent';
//                     }
//                   }}
//                 >
//                   Dashboard
//                 </NavLink>
//               </li>
//               <li className="nav-item mb-2">
//                 <NavLink to="/trainer/notification"  style={({ isActive }) => ({
//                     backgroundColor: isActive ? navLinkActiveBg : 'transparent',
//                     transition: 'background-color 0.3s ease',
//                   })} className="nav-link text-white  py-2 px-3 rounded">Notifications</NavLink>

//               </li>
//               <li className="nav-item mb-2">
//                 <NavLink
//                   to="/trainer/log-effort"
//                   className="nav-link text-white py-2 px-3 rounded"
//                   style={({ isActive }) => ({
//                     backgroundColor: isActive ? navLinkActiveBg : 'transparent',
//                     transition: 'background-color 0.3s ease',
//                   })}
//                   onMouseEnter={(e) => e.currentTarget.style.backgroundColor = navLinkActiveBg}
//                   onMouseLeave={(e) => {
//                     if (!window.location.pathname.startsWith('/trainer/log-effort')) {
//                       e.currentTarget.style.backgroundColor = 'transparent';
//                     }
//                   }}
//                 >
//                   Log Effort
//                 </NavLink>
//               </li>
//               <li className="nav-item mb-2">
//                 <NavLink
//                   to="/trainer/update-info"
//                   className="nav-link text-white py-2 px-3 rounded"
//                   style={({ isActive }) => ({
//                     backgroundColor: isActive ? navLinkActiveBg : 'transparent',
//                     transition: 'background-color 0.3s ease',
//                   })}
//                   onMouseEnter={(e) => e.currentTarget.style.backgroundColor = navLinkActiveBg}
//                   onMouseLeave={(e) => {
//                     if (!window.location.pathname.startsWith('/trainer/update-info')) {
//                       e.currentTarget.style.backgroundColor = 'transparent';
//                     }
//                   }}
//                 >
//                   Update Info
//                 </NavLink>
//               </li>
//               <li className="nav-item mb-2">
//                 <NavLink
//                   to="/trainer/raise-query"
//                   className="nav-link text-white py-2 px-3 rounded"
//                   style={({ isActive }) => ({
//                     backgroundColor: isActive ? navLinkActiveBg : 'transparent',
//                     transition: 'background-color 0.3s ease',
//                   })}
//                   onMouseEnter={(e) => e.currentTarget.style.backgroundColor = navLinkActiveBg}
//                   onMouseLeave={(e) => {
//                     if (!window.location.pathname.startsWith('/trainer/raise-query')) {
//                       e.currentTarget.style.backgroundColor = 'transparent';
//                     }
//                   }}
//                 >
//                   Raise Query
//                 </NavLink>
//               </li>
//               {/* New: Reset Password Link */}
//               <li className="nav-item mb-2">
//                 <NavLink
//                   to="/trainer/reset-password"
//                   className="nav-link text-white py-2 px-3 rounded"
//                   style={({ isActive }) => ({
//                     backgroundColor: isActive ? navLinkActiveBg : 'transparent',
//                     transition: 'background-color 0.3s ease',
//                   })}
//                   onMouseEnter={(e) => e.currentTarget.style.backgroundColor = navLinkActiveBg}
//                   onMouseLeave={(e) => {
//                     if (!window.location.pathname.startsWith('/trainer/reset-password')) {
//                       e.currentTarget.style.backgroundColor = 'transparent';
//                     }
//                   }}
//                 >
//                   Reset Password
//                 </NavLink>
//               </li>
//               <li className="nav-item mt-auto pt-3">
//                 <button
//                   className="btn w-100"
//                   onClick={handleLogout}
//                   style={{
//                     backgroundColor: cognizantBlue,
//                     borderColor: cognizantBlue,
//                     color: 'white',
//                     transition: 'background-color 0.3s ease, border-color 0.3s ease',
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.backgroundColor = logoutButtonHoverBg;
//                     e.currentTarget.style.borderColor = logoutButtonHoverBg;
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.backgroundColor = cognizantBlue;
//                     e.currentTarget.style.borderColor = cognizantBlue;
//                   }}
//                 >
//                   Logout
//                 </button>
//               </li>
//             </ul>
//           </div>
//         )}
//         {!isSidebarOpen && ( // Display icons only when sidebar is closed
//             <ul className="nav flex-column flex-grow-1 mt-5"> {/* mt-5 for spacing from toggler */}
//               <li className="nav-item mb-2">
//                   <NavLink to="/trainer/dashboard" className="nav-link text-white text-center py-2 px-0">
//                     <i className="bi bi-house-door d-block fs-5"></i> {/* Bootstrap icon example */}
//                     <small>Dash</small>
//                   </NavLink>
//               </li>
//               <li className="nav-item mb-2">
//                   <NavLink to="/trainer/log-effort" className="nav-link text-white text-center py-2 px-0">
//                     <i className="bi bi-pencil-square d-block fs-5"></i>
//                     <small>Effort</small>
//                   </NavLink>
//               </li>
//               <li className="nav-item mb-2">
//                   <NavLink to="/trainer/update-info" className="nav-link text-white text-center py-2 px-0">
//                     <i className="bi bi-info-circle d-block fs-5"></i>
//                     <small>Info</small>
//                   </NavLink>
//               </li>
//               <li className="nav-item mb-2">
//                   <NavLink to="/trainer/raise-query" className="nav-link text-white text-center py-2 px-0">
//                     <i className="bi bi-question-circle d-block fs-5"></i>
//                     <small>Query</small>
//                   </NavLink>
//               </li>
//               {/* New: Reset Password Icon Link */}
//               <li className="nav-item mb-2">
//                   <NavLink to="/trainer/reset-password" className="nav-link text-white text-center py-2 px-0">
//                     <i className="bi bi-key d-block fs-5"></i> {/* Using 'bi-key' for reset password */}
//                     <small>Pass</small>
//                   </NavLink>
//               </li>
//                <li className="nav-item mt-auto pt-3">
//                   <button
//                       className="btn w-100 d-flex flex-column align-items-center justify-content-center"
//                       onClick={handleLogout}
//                       style={{
//                           backgroundColor: cognizantBlue,
//                           borderColor: cognizantBlue,
//                           color: 'white',
//                           transition: 'background-color 0.3s ease, border-color 0.3s ease',
//                       }}
//                       onMouseEnter={(e) => {
//                           e.currentTarget.style.backgroundColor = logoutButtonHoverBg;
//                           e.currentTarget.style.borderColor = logoutButtonHoverBg;
//                       }}
//                       onMouseLeave={(e) => {
//                           e.currentTarget.style.backgroundColor = cognizantBlue;
//                           e.currentTarget.style.borderColor = cognizantBlue;
//                       }}
//                   >
//                       <i className="bi bi-box-arrow-right fs-5"></i>
//                       <small>Out</small>
//                   </button>
//               </li>
//             </ul>
//         )}
//       </div>

//       {/* Main Content */}
//       <div
//         className="flex-grow-1 p-4"
//         style={{
//           backgroundColor: cognizantLightGray,
//           marginLeft: isSidebarOpen ? '0' : '0', // No margin-left needed if sidebar is positioned absolutely or fixed
//           ...mainContentTransitionStyle, // Apply custom transition
//         }}
//       >
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default TrainerLayout;
import { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

// It's good practice to define constants outside the component if they don't change
// to prevent re-creation on every render.
const cognizantLogoUrl = 'https://miro.medium.com/v2/resize:fit:2400/1*a0PkTH4gryDQdVcLqDGpkA.png';

const TrainerLayout = () => {
  const navigate = useNavigate();
  // State to control sidebar visibility, initialized to true (open)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Define Cognizant-like color palette
  const cognizantBlue = '#000048';       // Main Cognizant Blue (used for sidebar background and logout button)
  const cognizantLightGray = '#F8F9FA';  // Light gray for main content background
  const navLinkActiveBg = '#1a1a80';     // Slightly lighter blue for active/hover nav link background
  const logoutButtonColor = '#dc3545';   // Red color for the logout button

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
    width: isSidebarOpen ? '220px' : '60px', // Full width when open, collapsed width when closed
    height: '100vh',                         // Take full viewport height
    position: 'fixed',                       // Keep sidebar fixed on the left
    top: 0,                                  // Align to the top of the viewport
    left: 0,                                 // Align to the left of the viewport
    backgroundColor: cognizantBlue,          // Cognizant blue background
    color: 'white',                          // White text color
    transition: 'width 0.3s ease-in-out',    // Smooth transition for width changes
    overflowX: 'hidden',                     // Hide horizontal overflow (e.g., text when collapsed)
    flexShrink: 0,                           // Prevent sidebar from shrinking
    zIndex: 1000,                            // Ensure sidebar is on top of other content
  };

  // Styles for the main content area
  const mainContentStyle = {
    // Adjust left margin based on sidebar's state to prevent content overlap
    marginLeft: isSidebarOpen ? '220px' : '60px',
    transition: 'margin-left 0.3s ease-in-out', // Smooth transition for margin changes
    backgroundColor: cognizantLightGray,         // Light gray background for main content
    flexGrow: 1,                                 // Allow main content to take remaining space
    padding: '1.5rem',                           // Padding inside the main content area
    overflowY: 'auto',                           // Allow vertical scrolling if content overflows
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
      {/* Sidebar */}
      <div style={sidebarStyle} className="d-flex flex-column text-white">
        {/* Toggle Button for Sidebar (Hamburger Icon) */}
        <div className="d-flex align-items-center justify-content-between px-3 py-2 border-bottom border-secondary"
             style={{ minHeight: '56px' }}> {/* Set a min-height to prevent jumping */}
          <button
            className="btn p-0 text-white d-flex align-items-center" // Use flex for alignment of icon
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
                <i className="bi bi-box-arrow-right fs-5"></i> {/* Logout icon */}
                {/* <small className="mt-1">Out</small> */}
              </button>
            </li>
          </ul>
        )}
      </div>

      {/* Main Content Area */}
      <div style={mainContentStyle}>
        <Outlet /> {/* This renders the child routes */}
      </div>
    </div>
  );
};

export default TrainerLayout;
