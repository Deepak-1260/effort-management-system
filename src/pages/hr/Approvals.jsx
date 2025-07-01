// import { useContext, useEffect, useState } from 'react';
// import { Usercontext } from '../../App';

// const Approvals = () => {
//   const { user } = useContext(Usercontext);
//   const [efforts, setEfforts] = useState([]);
//   const [rejectedEffortId, setRejectedEffortId] = useState(null);
//   const [remarks, setRemarks] = useState('');

//   useEffect(() => {
//     fetch(`http://52.88.246.113:8085/pendingApprovals/${user}`)
//       .then(res => res.json())
//       .then(data => {
//         console.log(data)
//         setEfforts(data);
//       })
//       .catch(err => {
//         console.error('Failed to fetch efforts:', err);
//         alert('Error fetching pending efforts.');
//       });
//   }, []);

//   const handleAction = async (effort, action) => {
//     if (action === 'reject' && !remarks.trim()) {
//       alert('Please enter remarks for rejection.');
//       return;
//     }

//     effort.status = action;
//     if (action === 'reject') {
//       effort.remarks = remarks;
//     }

//     setEfforts(efforts.filter(eff =>
//       !(eff.info.id === effort.info.id &&
//         eff.info.date === effort.info.date &&
//         eff.info.cohortCode === effort.info.cohortCode)
//     ));
//     setRejectedEffortId(null);
//     setRemarks('');

//     try {
//       const res = await fetch(`http://52.88.246.113:8085/updateStatus/`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(effort)
//       });

//       if (!res.ok) throw new Error('Failed to update');
//       alert(`Effort ${action}ed successfully`);
//     } catch (err) {
//       console.error(err);
//       alert(`Failed to ${action} effort`);
//     }
//   };

//   return (
//     <div className="container-fluid py-4 px-3 bg-light min-vh-100">
//       <div className="row justify-content-center">
//         <div className="col-12 col-lg-10">
//           <h4 className="text-primary mb-4">Pending Effort Approvals</h4>

//           {efforts.length === 0 ? (
//             <div className="alert alert-info">No efforts pending approval.</div>
//           ) : (
//             efforts.map(effort => (
//               <div key={effort.info.cohortCode + effort.info.id + effort.info.date} className="card shadow-sm border-0 mb-4">
//                 <div className="card-body">
//                   <div className="d-flex justify-content-between align-items-center mb-2">
//                     <h6 className="mb-0 text-dark">
//                       {effort.info.iD} <span>({effort.info.cohortCode})</span>
//                     </h6>
//                     <span className="badge bg-secondary">{effort.info.date}</span>
//                   </div>

//                   <p className="mb-1"><strong>Topic:</strong> {effort.topic}</p>
//                   <p className="mb-1"><strong>Hours:</strong> {effort.effortHours}</p>
//                   <p className="mb-2"><strong>Highlights:</strong> {effort.highlights}</p>

//                   <div className="d-flex gap-3">
//                     <button
//                       className="btn btn-sm btn-outline-success"
//                       onClick={() => handleAction(effort, 'accept')}
//                     >
//                       ✅ Accept
//                     </button>
//                     <button
//                       className="btn btn-sm btn-outline-danger"
//                       onClick={() => setRejectedEffortId(effort.info.id)}
//                     >
//                       ❌ Reject
//                     </button>
//                   </div>

//                   {rejectedEffortId === effort.info.id && (
//                     <div className="mt-3">
//                       <textarea
//                         className="form-control"
//                         placeholder="Enter rejection remarks..."
//                         value={remarks}
//                         onChange={(e) => setRemarks(e.target.value)}
//                       />
//                       <div className="mt-2">
//                         <button
//                           className="btn btn-sm btn-danger me-2"
//                           onClick={() => handleAction(effort, 'reject')}
//                         >
//                           Confirm Reject
//                         </button>
//                         <button
//                           className="btn btn-sm btn-secondary"
//                           onClick={() => {
//                             setRejectedEffortId(null);
//                             setRemarks('');
//                           }}
//                         >
//                           Cancel
//                         </button>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Approvals;
import { useContext, useEffect, useState } from 'react';
import { Usercontext } from '../../App';

const Approvals = () => {
  const { user } = useContext(Usercontext);
  const [efforts, setEfforts] = useState([]);
  const [rejectedEffortId, setRejectedEffortId] = useState(null);
  const [remarks, setRemarks] = useState('');
  const [otherRemark, setOtherRemark] = useState(''); // This state is for the custom "Other" reason text

  useEffect(() => {
    fetch(`http://52.88.246.113:8085/pendingApprovals/${user}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setEfforts(data);
      })
      .catch(err => {
        console.error('Failed to fetch efforts:', err);
        console.log('Error fetching pending efforts.'); // Changed alert to console.log
      });
  }, [user]); // Added user to dependency array for useEffect

  const handleAction = async (effort, action) => {
    if (action === 'reject') {
      // Validate if a reason is selected from the dropdown
      if (!remarks.trim()) {
        console.log('Please select a reason for rejection.'); // Changed alert to console.log
        return;
      }
      // Check if "Other" is selected but no custom remark is provided in the text area
      if (remarks === 'Other' && !otherRemark.trim()) { // Use otherRemark here for validation
        console.log('Please specify your reason for rejection when "Other" is selected.'); // Changed alert to console.log
        return;
      }
    }

    effort.status = action;
    if (action === 'reject') {
      // Use otherRemark if "Other" is selected, otherwise use the selected dropdown remark
      effort.remarks = remarks === 'Other' ? otherRemark : remarks; // Assign otherRemark if 'Other' is selected
    }

    // Optimistically remove the effort from the list
    setEfforts(efforts.filter(eff =>
      !(eff.info.id === effort.info.id &&
        eff.info.date === effort.info.date &&
        eff.info.cohortCode === effort.info.cohortCode)
    ));
    // Reset rejection states
    setRejectedEffortId(null);
    setRemarks(''); // Clear selected dropdown reason
    setOtherRemark(''); // Clear custom "Other" reason

    try {
      const res = await fetch(`http://52.88.246.113:8085/updateStatus/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(effort)
      });

      if (!res.ok) throw new Error('Failed to update');
      console.log(`Effort ${action}ed successfully`); // Changed alert to console.log
    } catch (err) {
      console.error(err);
      console.log(`Failed to ${action} effort`); // Changed alert to console.log
    }
  };

  return (
    <div className="container-fluid py-4 px-3 bg-light min-vh-100">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <h4 className="text-primary mb-4">Pending Effort Approvals</h4>

          {efforts.length === 0 ? (
            <div className="alert alert-info">No efforts pending approval.</div>
          ) : (
            efforts.map(effort => (
              <div key={effort.info.cohortCode + effort.info.id + effort.info.date} className="card shadow-sm border-0 mb-4">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h6 className="mb-0 text-dark">
                      {effort.info.iD} <span>({effort.info.cohortCode})</span>
                    </h6>
                    <span className="badge bg-secondary">{effort.info.date}</span>
                  </div>

                  <p className="mb-1"><strong>Topic:</strong> {effort.topic}</p>
                  <p className="mb-1"><strong>Hours:</strong> {effort.effortHours}</p>
                  <p className="mb-2"><strong>Highlights:</strong> {effort.highlights}</p>

                  <div className="d-flex gap-3">
                    <button
                      className="btn btn-sm btn-outline-success"
                      onClick={() => handleAction(effort, 'accept')}
                    >
                      ✅ Accept
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => {
                        setRejectedEffortId(effort.info.id);
                        setRemarks(''); // Clear previous remarks when opening reject section
                        setOtherRemark(''); // Clear otherRemark too
                      }}
                    >
                      ❌ Reject
                    </button>
                  </div>

                  {rejectedEffortId === effort.info.id && (
                    <div className="mt-3 form-group">
                      <label htmlFor={`remarks-select-${effort.info.id}`} className="form-label visually-hidden">Rejection Reason</label>
                      <select
                        id={`remarks-select-${effort.info.id}`}
                        className="form-select mb-2"
                        value={remarks} // This holds the selected dropdown value (e.g., "Other", "Incorrect hours logged")
                        onChange={(e) => {
                          setRemarks(e.target.value);
                          // If "Other" is not selected, clear the otherRemark input
                          if (e.target.value !== 'Other') {
                            setOtherRemark('');
                          }
                        }}
                        required
                      >
                        <option value="" disabled selected>Select Reason</option>
                        <option value="Incorrect hours logged">Incorrect hours logged</option>
                        <option value="Topic details unclear">Topic details unclear</option>
                        <option value="Wrong entry">Wrong entry</option>
                        <option value="Duplicate entry">Duplicate entry</option>
                        <option value="Other">Others (Please specify)</option>
                      </select>

                      {/* Conditionally render textarea if "Other" is selected */}
                      {remarks === 'Other' && (
                        <textarea
                          id={`other-remarks-textarea-${effort.info.id}`}
                          className="form-control mt-2"
                          placeholder="Please specify your reason..."
                          value={otherRemark} // Bind to otherRemark state
                          onChange={(e) => setOtherRemark(e.target.value)} // Update otherRemark state
                          required
                        />
                      )}

                      <div className="mt-3">
                        <button
                          className="btn btn-sm btn-danger me-2"
                          onClick={() => handleAction(effort, 'reject')}
                        >
                          Confirm Reject
                        </button>
                        <button
                          className="btn btn-sm btn-secondary"
                          onClick={() => {
                            setRejectedEffortId(null);
                            setRemarks(''); // Clear selected dropdown reason
                            setOtherRemark(''); // Clear custom "Other" reason
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Approvals;