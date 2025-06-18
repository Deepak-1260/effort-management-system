// import { useContext, useState } from 'react';
// import { Usercontext } from '../../App';

// const ResetPassword = () => {
//     const {user} = useContext(Usercontext);
// //   const [trainerId, setTrainerId] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(user)
//     console.log(newPassword)
//     const requestBody = {
//       trainerId:user,
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
//       <h4 className="mb-4 text-primary">Reset Password</h4>

//       {message && <div className="alert alert-info">{message}</div>}

//       <form onSubmit={handleSubmit} className="row g-3">
//         <div className="col-12">
//           <label className="form-label">Trainer ID</label>
//           <input
//             type="text"
//             className="form-control"
//             value={user}
//             // onChange={(e) => setTrainerId(e.target.value)}
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

// export default ResetPassword;
import { useContext, useState } from 'react';
import { Usercontext } from '../../App';

const ResetPassword = () => {
    const { user } = useContext(Usercontext);
    const [newPassword, setNewPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');
    const [otpSent, setOtpSent] = useState(false);

    // Function to send OTP
    const handleSendOtp = () => {
        fetch("http://localhost:8085/initiatePasswordReset", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ trainerId: user }),
        })
        .then(res => res.text())
        .then(data => {
            console.log(data);
            setMessage(data);
            setOtpSent(true); // Set state to indicate OTP was sent
        })
        .catch(error => {
            setMessage("Error sending OTP. Please try again.");
            console.error("Send OTP Error:", error);
        });
    };

    // Function to reset password
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
            headers: {
                "Content-Type": "application/json",
            },
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
        <div className="container">
            <h4 className="mb-4 text-primary">Reset Password</h4>

            {message && <div className="alert alert-info">{message}</div>}

            <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-12">
                    <label className="form-label">Trainer ID</label>
                    <input
                        type="text"
                        className="form-control"
                        value={user}
                        readOnly
                        required
                    />
                </div>

                {!otpSent && (
                    <div className="col-12">
                        <button type="button" className="btn btn-warning" onClick={handleSendOtp}>
                            Send OTP
                        </button>
                    </div>
                )}

                {otpSent && (
                    <>
                        <div className="col-12">
                            <label className="form-label">Enter OTP</label>
                            <input
                                type="text"
                                className="form-control"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                required
                            />
                        </div>

                        <div className="col-12">
                            <label className="form-label">New Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="col-12">
                            <button className="btn btn-success" type="submit">
                                Reset Password
                            </button>
                        </div>
                    </>
                )}
            </form>
        </div>
    );
};

export default ResetPassword;

