// // import { useContext, useState } from 'react';
// // import { Usercontext } from '../../App';

// // const ResetPassword = () => {
// //     const {user} = useContext(Usercontext);
// // //   const [trainerId, setTrainerId] = useState('');
// //   const [newPassword, setNewPassword] = useState('');
// //   const [message, setMessage] = useState('');

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log(user)
// //     console.log(newPassword)
// //     const requestBody = {
// //       trainerId:user,
// //       newPassword
// //     };
  
// //     fetch("http://localhost:8085/resetPassword", { 
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify(requestBody),
// //     })
// //     .then(res => res.text())
// //     .then(data => {
// //         console.log(data);
// //       setMessage(data); 
// //     })
// //     .catch(error => {
// //       setMessage("Error resetting password. Please try again.");
// //       console.error("Reset Password Error:", error);
// //     });
// //   };
  
// //   return (
// //     <div className="container">
// //       <h4 className="mb-4 text-primary">Reset Password</h4>

// //       {message && <div className="alert alert-info">{message}</div>}

// //       <form onSubmit={handleSubmit} className="row g-3">
// //         <div className="col-12">
// //           <label className="form-label">Trainer ID</label>
// //           <input
// //             type="text"
// //             className="form-control"
// //             value={user}
// //             // onChange={(e) => setTrainerId(e.target.value)}
// //             required
// //           />
// //         </div>


// //         <div className="col-12">
// //           <label className="form-label">New Password</label>
// //           <input
// //             type="password"
// //             className="form-control"
// //             value={newPassword}
// //             onChange={(e) => setNewPassword(e.target.value)}
// //             required
// //           />
// //         </div>

// //         <div className="col-12">
// //           <button className="btn btn-success" type="submit">
// //             Reset Password
// //           </button>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // };

// // export default ResetPassword;
// import { useContext, useState } from 'react';
// import { Usercontext } from '../../App';

// const ResetPassword = () => {
//     const { user } = useContext(Usercontext);
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
//             body: JSON.stringify({ trainerId: user }),
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
//             trainerId: user,
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
//                         value={user}
//                         readOnly
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

// export default ResetPassword;

import { useContext, useState } from 'react';
import { Usercontext } from '../../App';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ResetPassword = () => {
  const { user } = useContext(Usercontext);
  const [newPassword, setNewPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOtp = () => {
    fetch("http://localhost:8085/initiatePasswordReset", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ trainerId: user }),
    })
      .then(res => res.text())
      .then(data => {
        setMessage(data);
        setOtpSent(true);
      })
      .catch(error => {
        console.error("Send OTP Error:", error);
        setMessage("Error sending OTP. Please try again.");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!otpSent) {
      setMessage("Please request an OTP first.");
      return;
    }

    const requestBody = {
      trainerId: user,
      newPassword,
      enteredOtp: otp
    };

    fetch("http://localhost:8085/resetPassword", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    })
      .then(res => {
        const type = res.headers.get("content-type");
        return type && type.includes("application/json") ? res.json() : res.text();
      })
      .then(data => {
        setMessage(typeof data === 'object' ? JSON.stringify(data) : data);
        setNewPassword('');
        setOtp('');
      })
      .catch(error => {
        console.error("Reset Password Error:", error);
        setMessage("Error resetting password. Please try again.");
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-start vh-100 pt-5">
      <div className="card border-0 shadow-lg rounded-4" style={{ maxWidth: '850px', width: '90%' }}>
        <div className="card-header bg-white border-bottom px-4 py-3 d-flex justify-content-between align-items-center">
          <h5 className="mb-0 text-primary" style={{ fontSize: '1.4rem' }}>
            <i className="bi bi-key-fill me-2"></i>Reset Password
          </h5>
          <span className="badge bg-secondary-subtle text-dark">Password Security</span>
        </div>

        <div className="card-body px-5 py-5">
          {message && <div className="alert alert-info py-2 px-3 mb-4">{message}</div>}

          <form onSubmit={handleSubmit} className="row g-4">
            <div className="col-12">
              <label className="form-label" style={{ fontSize: '0.85rem' }}>Trainer ID <span className="text-danger">*</span></label>
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-person-badge-fill"></i></span>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  value={user}
                  readOnly
                  required
                  style={{ fontSize: '0.9rem' }}
                  placeholder="Your Trainer ID"
                />
              </div>
            </div>

            {!otpSent && (
              <div className="col-12 text-center">
                <button
                  type="button"
                  className="btn btn-warning w-100 shadow"
                  onClick={handleSendOtp}
                >
                  <i className="bi bi-send-fill me-2"></i>Send OTP
                </button>
              </div>
            )}

            {otpSent && (
              <>
                <div className="col-12">
                  <label className="form-label" style={{ fontSize: '0.85rem' }}>Enter OTP <span className="text-danger">*</span></label>
                  <div className="input-group">
                    <span className="input-group-text"><i className="bi bi-shield-lock-fill"></i></span>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      required
                      style={{ fontSize: '0.9rem' }}
                      placeholder="Enter OTP"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <label className="form-label" style={{ fontSize: '0.85rem' }}>New Password <span className="text-danger">*</span></label>
                  <div className="input-group">
                    <span className="input-group-text"><i className="bi bi-lock-fill"></i></span>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                      style={{ fontSize: '0.9rem' }}
                      placeholder="Enter your new password"
                    />
                  </div>
                </div>

                <div className="col-12 text-center mt-4 d-flex justify-content-center">
                  <button className="btn btn-success btn-lg w-100 shadow" type="submit">
                    <i className="bi bi-key-fill me-2"></i>Reset Password
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
