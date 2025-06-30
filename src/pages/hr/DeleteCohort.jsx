// import { useState } from 'react';
 
// const DeleteCohort = () => {
//   const [cohortCode, setCohortCode] = useState('');
 
//   const handleSubmit = async (e) => {
//     e.preventDefault();
 
//     if (!cohortCode.trim()) return alert('Cohort Code is required');
 
//     try {
//       const response = await fetch(`http://localhost:8081/delete-cohort/${cohortCode}`, {
//         method: 'DELETE'
//       });
 
//       if (response.ok) {
//         const contentType = response.headers.get('Content-Type');
//         let message;
//         if (contentType && contentType.includes('application/json')) {
//           const data = await response.json();
//           message = `${JSON.stringify(data)}`;
//         } else {
//           const text = await response.text();
//           message = `${text}`;
//         }
//         alert(message);
//         setCohortCode('');
//       } else {
//         alert('Failed to delete cohort');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred while deleting the cohort');
//     }
//   };
 
//   return (
//     <div className="container">
//       <h4 className="mb-4 text-danger">Delete Cohort</h4>
//       <form onSubmit={handleSubmit} className="row g-3">
//         <div className="col-md-6">
//           <label className="form-label">Cohort Code</label>
//           <input
//             type="text"
//             className="form-control"
//             value={cohortCode}
//             onChange={(e) => setCohortCode(e.target.value)}
//             required
//           />
//         </div>
//         <div className="col-12">
//           <button type="submit" className="btn btn-danger">Delete</button>
//         </div>
//       </form>
//     </div>
//   );
// };
 
// export default DeleteCohort;
// import { useState } from 'react';
// import 'bootstrap-icons/font/bootstrap-icons.css';

// const DeleteCohort = () => {
//   const [cohortCode, setCohortCode] = useState('');
//   const primaryColor = '#000048';


  

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!cohortCode.trim()) return alert('Cohort Code is required');

//     try {
//       const response = await fetch(`http://localhost:8081/delete-cohort/${cohortCode}`, {
//         method: 'DELETE'
//       });

//       if (response.ok) {
//         const contentType = response.headers.get('Content-Type');
//         let message;
//         if (contentType && contentType.includes('application/json')) {
//           const data = await response.json();
//           message = `${JSON.stringify(data)}`;
//         } else {
//           const text = await response.text();
//           message = `${text}`;
//         }
//         alert(message);
//         setCohortCode('');
//       } else {
//         alert('Failed to delete cohort');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred while deleting the cohort');
//     }
//   };

//   return (
//     <div className="card border-0 shadow-lg rounded-4">
//       <div
//         className="card-header bg-white border-bottom px-2 py-3 d-flex justify-content-between align-items-center"
//         style={{ borderBottom: `2px solid ${primaryColor}` }}
//       >
//         <h5 className="mb-0 text-primary">
//           <i className="bi bi-trash-fill me-2"></i>Delete Cohort
//         </h5>
//         <span className="badge text-bg-light border" style={{ color: primaryColor, borderColor: primaryColor }}>
//           HR Admin
//         </span>
//       </div>

//       <div className="card-body px-4 py-5">
//         <form onSubmit={handleSubmit} className="row g-4">
//           <div className="col-md-6">
//             <label className="form-label" style={{ fontSize: '0.85rem' }}>Cohort Code</label>
//             <div className="input-group">
//               <span className="input-group-text"><i className="bi bi-code-slash"></i></span>
//               <input
//                 type="text"
//                 className="form-control form-control-lg"
//                 value={cohortCode}
//                 onChange={(e) => setCohortCode(e.target.value)}
//                 placeholder="Enter Cohort Code"
//                 style={{ fontSize: '0.9rem' }}
//                 required
//               />
//             </div>
//           </div>

//           <div className="col-12 mt-3 d-flex justify-content-center">
//             <button
//               type="submit"
//               className="btn btn-danger btn-ms w-25 shadow"
//               style={{
//                 backgroundColor: '#dc3545',
//                 borderColor: '#dc3545',
//                 color: 'white',
//                 transition: 'background-color 0.3s ease',
//               }}
//               onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#c82333')}
//               onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#dc3545')}
//             >
//               <i className="bi bi-trash-fill me-2"></i>Delete Cohort
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default DeleteCohort;


import { useEffect, useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const DeleteCohort = () => {
  const [cohortCode, setCohortCode] = useState('');
  const [cohortDetails, setCohortDetails] = useState(null);
  const primaryColor = '#000048';

  const handleCohortCodeChange = (e) => {
    setCohortCode(e.target.value.trim());
  };

  useEffect(() => {
    const fetchCohortDetails = async () => {
      if (cohortCode) {
        try {
          const res = await fetch(`http://localhost:8081/search-cohort/${cohortCode}`);
          if (res.ok) {
            const data = await res.json();
            console.log(data)
            setCohortDetails(data);
          } else {
            setCohortDetails(null);
          }
        } catch (err) {
          console.error('Error fetching cohort details:', err);
          setCohortDetails(null);
        }
      } else {
        setCohortDetails(null);
      }
    };

    fetchCohortDetails();
  }, [cohortCode]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!cohortCode.trim()) return alert('Cohort Code is required');

    try {
      const response = await fetch(`http://localhost:8081/delete-cohort/${cohortCode}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        const contentType = response.headers.get('Content-Type');
        let message;
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          message = `${JSON.stringify(data)}`;
        } else {
          const text = await response.text();
          message = `${text}`;
        }
        alert(message);
        setCohortCode('');
        setCohortDetails(null);
      } else {
        alert('Failed to delete cohort');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while deleting the cohort');
    }
  };

  return (
    <div className="card border-0 shadow-lg rounded-4">
      <div
        className="card-header bg-white border-bottom px-2 py-3 d-flex justify-content-between align-items-center"
        style={{ borderBottom: `2px solid ${primaryColor}` }}
      >
        <h5 className="mb-0 text-primary">
          <i className="bi bi-trash-fill me-2"></i>Delete Cohort
        </h5>
        <span className="badge text-bg-light border" style={{ color: primaryColor, borderColor: primaryColor }}>
          HR Admin
        </span>
      </div>

      <div className="card-body px-4 py-5">
        <form onSubmit={handleSubmit} className="row g-4">
          <div className="col-md-6">
            <label className="form-label" style={{ fontSize: '0.85rem' }}>Cohort Code<span className='text-danger'>*</span></label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-code-slash"></i></span>
              <input
                type="text"
                className="form-control form-control-lg"
                value={cohortCode}
                onChange={handleCohortCodeChange}
                placeholder="Enter Cohort Code"
                style={{ fontSize: '0.9rem' }}
                required
              />
            </div>
          </div>

          {cohortDetails && (
            <div className="col-12 mt-3">
              <div className="border rounded-3 bg-light p-3">
                <h6 className="text-primary mb-3">Cohort Details</h6>
                <p className="mb-1"><strong>Business Type:</strong> {cohortDetails.bussinessType}</p>
                <p className="mb-1"><strong>Genc Count:</strong> {cohortDetails.gencCount}</p>
                <p className="mb-1"><strong>Location:</strong> {cohortDetails.location}</p>
                <p className="mb-1"><strong>HR ID:</strong> {cohortDetails.hr_id}</p>
              </div>
            </div>
          )}

          <div className="col-12 mt-4 d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-danger w-25 shadow"
              style={{
                backgroundColor: '#dc3545',
                borderColor: '#dc3545',
                color: 'white',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#c82333')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#dc3545')}
            >
              <i className="bi bi-trash-fill me-2"></i>Delete Cohort
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeleteCohort;

