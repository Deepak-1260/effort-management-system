// import { useContext, useEffect, useState } from 'react'
// import { Usercontext } from '../../App';

// const Approvals = () => {
//     const {user} = useContext(Usercontext);
    
//   const [efforts, setEfforts] = useState([])

//   useEffect(() => {
//     console.log(user);
//     fetch(`http://localhost:8085/pendingApprovals/${user}`) // your backend URL
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         setEfforts(data)
//     })
        
//       .catch(err => {
//         console.error('Failed to fetch efforts:', err)
//         alert('Error fetching pending efforts.')
//       })
//   }, [])

//   const handleAction = async (effort, action) => {
//     effort.status=action;
//     setEfforts(efforts.filter((eff)=>!(eff.info.id===effort.info.id &&
//         eff.info.date===effort.info.date &&
//         eff.info.cohortCode==effort.info.cohortCode)));
//     try {
//         const res = await fetch(`http://localhost:8085/updateStatus/`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body:JSON.stringify(effort)
//         })
        
//         if (!res.ok) throw new Error('Failed to update')
//         console.log(res)
       
//     //   setEfforts(prev => prev.filter(e => e.id !== effort.info.id)) // remove from list
//       alert(`Effort ${action}ed successfully`)
//     } catch (err) {
//       console.error(err)
//       alert(`Failed to ${action} effort`)
//     }
//   }

//   return (
//     <div className="container-fluid py-4 px-3 bg-light min-vh-100">
//       <div className="row justify-content-center">
//         <div className="col-12 col-lg-10">
//           <h4 className="text-primary mb-4">Pending Effort Approvals</h4>

//           {efforts.length === 0 ? (
//             <div className="alert alert-info">No efforts pending approval.</div>
//           ) : (
//             efforts.map(effort => (
//               <div key={effort.info.cohortCode+effort.info.id+effort.info.date} className="card shadow-sm border-0 mb-4">
//                 <div className="card-body">
//                   <div className="d-flex justify-content-between align-items-center mb-2">
//                     <h6 className="mb-0 text-dark">
//                     {effort.info.iD}<span > ({effort.info.cohortCode})</span>
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
//                       onClick={() => handleAction(effort, 'reject')}
//                     >
//                       ❌ Reject
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Approvals;

import { useContext, useEffect, useState } from 'react';
import { Usercontext } from '../../App';

const Approvals = () => {
  const { user } = useContext(Usercontext);
  const [efforts, setEfforts] = useState([]);
  const [rejectedEffortId, setRejectedEffortId] = useState(null);
  const [remarks, setRemarks] = useState('');

  useEffect(() => {
    fetch(`http://localhost:8085/pendingApprovals/${user}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setEfforts(data);
      })
      .catch(err => {
        console.error('Failed to fetch efforts:', err);
        alert('Error fetching pending efforts.');
      });
  }, []);

  const handleAction = async (effort, action) => {
    if (action === 'reject' && !remarks.trim()) {
      alert('Please enter remarks for rejection.');
      return;
    }

    effort.status = action;
    if (action === 'reject') {
      effort.remarks = remarks;
    }

    setEfforts(efforts.filter(eff =>
      !(eff.info.id === effort.info.id &&
        eff.info.date === effort.info.date &&
        eff.info.cohortCode === effort.info.cohortCode)
    ));
    setRejectedEffortId(null);
    setRemarks('');

    try {
      const res = await fetch(`http://localhost:8085/updateStatus/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(effort)
      });

      if (!res.ok) throw new Error('Failed to update');
      alert(`Effort ${action}ed successfully`);
    } catch (err) {
      console.error(err);
      alert(`Failed to ${action} effort`);
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
                      onClick={() => setRejectedEffortId(effort.info.id)}
                    >
                      ❌ Reject
                    </button>
                  </div>

                  {rejectedEffortId === effort.info.id && (
                    <div className="mt-3">
                      <textarea
                        className="form-control"
                        placeholder="Enter rejection remarks..."
                        value={remarks}
                        onChange={(e) => setRemarks(e.target.value)}
                      />
                      <div className="mt-2">
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
                            setRemarks('');
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
