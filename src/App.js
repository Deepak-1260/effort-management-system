// src/App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import HRLayout from './layout/HRLayout'
import TrainerLayout from './layout/TrainerLayout'
import TrainerDashboard from './pages/trainer/Dashboard'
import LogEffort from './pages/trainer/LogEffort'
import UpdateInfo from './pages/trainer/UpdateInfo'
import RaiseQuery from './pages/trainer/RaiseQuery'

// inside <Route path="/trainer/*" element={<TrainerLayout />} />
import HRDashboard from './pages/hr/HRDashboard'
import AddTrainer from './pages/hr/AddTrainer'
import AddCohort from './pages/hr/AddCohort'
import AllocateTrainer from './pages/hr/AllocateTrainer'
import Search from './pages/hr/Search'
import DeleteTrainer from './pages/hr/DeleteTrainer'
import DeleteCohort from './pages/hr/DeleteCohort'
import DownloadData from './pages/hr/DownloadData'
import Settings from './pages/hr/Settings'
import { createContext, useState } from 'react'
import ResetPassword from './pages/trainer/ResetPassword'
import Signup from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import Approvals from './pages/hr/Approvals'
import Notification from './pages/trainer/Notification'



export const Usercontext = createContext();

function App() {
  const [user,setUser] = useState(null);


  return (
    <Usercontext.Provider value={{user,setUser}}>

    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
       

         <Route path="/hr/*" element={<HRLayout />}>
         <Route path="approvals" element={<Approvals />} />
          <Route path="dashboard" element={<HRDashboard />} />
          <Route path="add-trainer" element={<AddTrainer />} />
          <Route path="add-cohort" element={<AddCohort />} />
          <Route path="allocate-trainer" element={<AllocateTrainer />} />
          <Route path="search" element={<Search />} />
          <Route path="delete-trainer" element={<DeleteTrainer />} />
          <Route path="delete-cohort" element={<DeleteCohort />} />
          <Route path="download" element={<DownloadData />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/hr/dashboard" />} />
        </Route>
         <Route path="/trainer/*" element={<TrainerLayout />}>
            <Route path="dashboard" element={<TrainerDashboard />} />
            <Route path="notification" element={<Notification />} />

            <Route path="log-effort" element={<LogEffort />} />
            <Route path="update-info" element={<UpdateInfo />} />
            {/* <Route path="raise-query" element={<RaiseQuery />} /> */}
            <Route path="reset-password" element={<ResetPassword/>}/>
          </Route>      
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
    </Usercontext.Provider>
  )
}

 export default App



// // App.js
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { createContext, useState, useEffect, useContext } from 'react';

// // Import your page and layout components
// import Login from './pages/Login';
// import Signup from './pages/SignUp';
// import ForgotPassword from './pages/ForgotPassword';
// import ResetPassword from './pages/trainer/ResetPassword';

// import HRLayout from './layout/HRLayout';
// import HRDashboard from './pages/hr/HRDashboard';
// import AddTrainer from './pages/hr/AddTrainer';
// import AddCohort from './pages/hr/AddCohort';
// import AllocateTrainer from './pages/hr/AllocateTrainer';
// import Search from './pages/hr/Search';
// import DeleteTrainer from './pages/hr/DeleteTrainer';
// import DeleteCohort from './pages/hr/DeleteCohort';
// import DownloadData from './pages/hr/DownloadData';
// import Settings from './pages/hr/Settings';
// import Approvals from './pages/hr/Approvals';

// import TrainerLayout from './layout/TrainerLayout';
// import TrainerDashboard from './pages/trainer/Dashboard';
// import LogEffort from './pages/trainer/LogEffort';
// import UpdateInfo from './pages/trainer/UpdateInfo';
// import Notification from './pages/trainer/Notification';
// // import RaiseQuery from './pages/trainer/RaiseQuery'; // Uncomment if you re-add this route

// // Define the UserContext
// export const Usercontext = createContext();

// // ProtectedRoute component to handle access control
// const ProtectedRoute = ({ children, allowedRoles }) => {
//   const { user } = useContext(Usercontext);

//   console.log('ProtectedRoute - Current User State:', user);
//   console.log('ProtectedRoute - Allowed Roles:', allowedRoles);

//   // If user is not logged in, redirect to login page
//   if (!user || !user.isAuthenticated) {
//     console.log('ProtectedRoute - User not authenticated, redirecting to /');
//     return <Navigate to="/" replace />;
//   }

//   // If user is logged in but their role is not allowed, redirect to a default page or show error
//   if (allowedRoles && !allowedRoles.includes(user.role)) {
//     console.log(`ProtectedRoute - User role "${user.role}" not allowed for this route. Redirecting to user's dashboard.`);
//     return <Navigate to={user.role === 'HR' ? '/hr/dashboard' : '/trainer/dashboard'} replace />;
//   }

//   console.log('ProtectedRoute - Access granted.');
//   return children;
// };

// function App() {
//   // Initialize user state from localStorage, or with default unauthenticated state
//   const [user, setUser] = useState(() => {
//     try {
//       const storedUser = localStorage.getItem('user');
//       return storedUser ? JSON.parse(storedUser) : { isAuthenticated: false, username: null, role: null };
//     } catch (error) {
//       console.error("Failed to parse user from localStorage:", error);
//       return { isAuthenticated: false, username: null, role: null };
//     }
//   });

//   // Effect to update localStorage whenever the user state changes
//   useEffect(() => {
//     try {
//       localStorage.setItem('user', JSON.stringify(user));
//       console.log('App.js - User State Updated and stored in localStorage:', user);
//     } catch (error) {
//       console.error("Failed to save user to localStorage:", error);
//     }
//   }, [user]);

//   // Logout function to clear user data
//   const logout = () => {
//     setUser({ isAuthenticated: false, username: null, role: null });
//     localStorage.removeItem('user');
//     console.log('User logged out. localStorage cleared.');
//   };

//   return (
//     <Usercontext.Provider value={{ user, setUser, logout }}> {/* Pass logout function */}
//       <Router>
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/forgotpassword" element={<ForgotPassword />} />

//           {/* HR Protected Routes */}
//           <Route
//             path="/hr/*"
//             element={
//               <ProtectedRoute allowedRoles={['HR']}>
//                 <HRLayout />
//               </ProtectedRoute>
//             }
//           >
//             <Route path="approvals" element={<Approvals />} />
//             <Route path="dashboard" element={<HRDashboard />} />
//             <Route path="add-trainer" element={<AddTrainer />} />
//             <Route path="add-cohort" element={<AddCohort />} />
//             <Route path="allocate-trainer" element={<AllocateTrainer />} />
//             <Route path="search" element={<Search />} />
//             <Route path="delete-trainer" element={<DeleteTrainer />} />
//             <Route path="delete-cohort" element={<DeleteCohort />} />
//             <Route path="download" element={<DownloadData />} />
//             <Route path="settings" element={<Settings />} />
//             <Route path="*" element={<Navigate to="/hr/dashboard" />} />
//           </Route>

//           {/* Trainer Protected Routes */}
//           <Route
//             path="/trainer/*"
//             element={
//               <ProtectedRoute allowedRoles={['Trainer', 'Mentor', 'Buddy Mentor']}>
//                 <TrainerLayout />
//               </ProtectedRoute>
//             }
//           >
//             <Route path="dashboard" element={<TrainerDashboard />} />
//             <Route path="notification" element={<Notification />} />
//             <Route path="log-effort" element={<LogEffort />} />
//             <Route path="update-info" element={<UpdateInfo />} />
//             {/* <Route path="raise-query" element={<RaiseQuery />} /> */}
//             <Route path="reset-password" element={<ResetPassword />} />
//             <Route path="*" element={<Navigate to="/trainer/dashboard" />} />
//           </Route>

//           {/* Fallback for any unmatched routes */}
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//       </Router>
//     </Usercontext.Provider>
//   );
// }

// export default App;
