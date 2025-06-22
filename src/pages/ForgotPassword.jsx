// import { useContext, useState } from 'react';

// const ForgotPassword = () => {
//   const [trainerId, setTrainerId] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(newPassword)
//     const requestBody = {
//       trainerId,
//       newPassword
//     };
  
//     fetch("http://localhost:8085/resetPassword", { 
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(requestBody),
//     })
//     .then(res => res.text())
//     .then(data => {
//         console.log(data);
//       setMessage(data); 
//     })
//     .catch(error => {
//       setMessage("Error resetting password. Please try again.");
//       console.error("Reset Password Error:", error);
//     });
//   };
  
//   return (
//     <div className="container">
//       <h4 className="m-4 text-primary">Forgot Password</h4>

//       {message && <div className="alert alert-info">{message}</div>}

//       <form onSubmit={handleSubmit} className="row g-3">
//         <div className="col-12">
//           <label className="form-label">Trainer ID</label>
//           <input
//             type="text"
//             className="form-control"
//             value={trainerId}
//             onChange={(e) => setTrainerId(e.target.value)}
//             required
//           />
//         </div>

//         <div className="col-12">
//           <label className="form-label">New Password</label>
//           <input
//             type="password"
//             className="form-control"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//             required
//           />
//         </div>

//         <div className="col-12">
//           <button className="btn btn-success" type="submit">
//             Reset Password
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ForgotPassword;
// import { useContext, useState } from 'react';

// const ForgotPassword = () => {
//       const [trainerId, setTrainerId] = useState('');

//     const [newPassword, setNewPassword] = useState('');
//     const [otp, setOtp] = useState('');
//     const [message, setMessage] = useState('');
//     const [otpSent, setOtpSent] = useState(false);

//     // Function to send OTP
//     const handleSendOtp = () => {
//         fetch("http://localhost:8085/initiatePasswordReset", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ trainerId }),
//         })
//         .then(res => res.text())
//         .then(data => {
//             console.log(data);
//             setMessage(data);
//             setOtpSent(true); // Set state to indicate OTP was sent
//         })
//         .catch(error => {
//             setMessage("Error sending OTP. Please try again.");
//             console.error("Send OTP Error:", error);
//         });
//     };

//     // Function to reset password
//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (!otpSent) {
//             setMessage("Please request an OTP first.");
//             return;
//         }

//         const requestBody = {
//             trainerId,
//             newPassword,
//             enteredOtp: otp
//         };

//         fetch("http://localhost:8085/resetPassword", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(requestBody),
//         })
//         .then(res => res.text())
//         .then(data => {
//             console.log(data);
//             setMessage(data);
//         })
//         .catch(error => {
//             setMessage("Error resetting password. Please try again.");
//             console.error("Reset Password Error:", error);
//         });
//     };

//     return (
//         <div className="container">
//             <h4 className="mb-4 text-primary">Reset Password</h4>

//             {message && <div className="alert alert-info">{message}</div>}

//             <form onSubmit={handleSubmit} className="row g-3">
//                 <div className="col-12">
//                     <label className="form-label">Trainer ID</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         value={trainerId}
//                         onChange={(e) => setTrainerId(e.target.value)}
//                         required
//                     />
//                 </div>

//                 {!otpSent && (
//                     <div className="col-12">
//                         <button type="button" className="btn btn-warning" onClick={handleSendOtp}>
//                             Send OTP
//                         </button>
//                     </div>
//                 )}

//                 {otpSent && (
//                     <>
//                         <div className="col-12">
//                             <label className="form-label">Enter OTP</label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 value={otp}
//                                 onChange={(e) => setOtp(e.target.value)}
//                                 required
//                             />
//                         </div>

//                         <div className="col-12">
//                             <label className="form-label">New Password</label>
//                             <input
//                                 type="password"
//                                 className="form-control"
//                                 value={newPassword}
//                                 onChange={(e) => setNewPassword(e.target.value)}
//                                 required
//                             />
//                         </div>

//                         <div className="col-12">
//                             <button className="btn btn-success" type="submit">
//                                 Reset Password
//                             </button>
//                         </div>
//                     </>
//                 )}
//             </form>
//         </div>
//     );
// };

// export default ForgotPassword;
import { useState } from 'react';

const ForgotPassword = () => {
  const [trainerId, setTrainerId] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const cognizantBlue = '#0073B9';
  const cognizantLightBlue = '#EAF4FA';

  const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleSendOtp = () => {
    fetch("http://localhost:8085/initiatePasswordReset", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ trainerId }),
    })
      .then(res => res.text())
      .then(data => {
        console.log(data);
        setMessage(data);
        setOtpSent(true);
      })
      .catch(error => {
        setMessage("Error sending OTP. Please try again.");
        console.error("Send OTP Error:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!otpSent) {
      setMessage("Please request an OTP first.");
      return;
    }

    if (!strongPasswordRegex.test(newPassword)) {
      setMessage('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.');
      return;
    }

    const requestBody = { trainerId, newPassword, enteredOtp: otp };

    fetch("http://localhost:8085/resetPassword", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    })
      .then(res => res.text())
      .then(data => {
        console.log(data);
        setMessage(data);
      })
      .catch(error => {
        setMessage("Error resetting password. Please try again.");
        console.error("Reset Password Error:", error);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: cognizantLightBlue }}>
      <div
        className="card shadow p-4"
        style={{
          minWidth: 400,
          maxWidth: 450,
          margin: '30px',
          borderRadius: '10px'
        }}
      >
        <h4 className="text-center mb-4" style={{ color: cognizantBlue, fontSize: '1.8rem' }}>
          Forgot Password
        </h4>

        {message && (
          <div className="alert alert-info py-2 px-3" style={{ fontSize: '0.95rem' }}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" style={{ fontSize: '1rem' }}>Trainer ID</label>
            <input
              type="text"
              className="form-control form-control-lg"
              value={trainerId}
              onChange={(e) => setTrainerId(e.target.value)}
              required
            />
          </div>

          {!otpSent && (
            <div className="mb-3">
              <button
                type="button"
                className="w-100 btn btn-warning btn-lg"
                onClick={handleSendOtp}
              >
                Send OTP
              </button>
            </div>
          )}

          {otpSent && (
            <>
              <div className="mb-3">
                <label className="form-label" style={{ fontSize: '1rem' }}>Enter OTP</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label" style={{ fontSize: '1rem' }}>New Password</label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>

              <div className="mb-2">
                <button
                  className="w-100 btn btn-success btn-lg"
                  type="submit"
                  style={{ fontSize: '1.1rem' }}
                >
                  Reset Password
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

