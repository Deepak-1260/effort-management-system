// import { useState } from 'react';
 
// const DeleteTrainer = () => {
//   const [tmId, setTmId] = useState('');
 
//   const handleSubmit = async (e) => {
//     e.preventDefault();
 
//     if (!tmId.trim()) return alert('Trainer ID is required');
 
//     try {
//       const response = await fetch(`http://localhost:8081/deleteTrainer/${tmId}`, {
//         method: 'DELETE'
//       });
 
//       if (response.ok) {
//         const contentType = response.headers.get('Content-Type');
//           let message;
//           if (contentType && contentType.includes('application/json')) {
//               const data = await response.json();
//               message = `${JSON.stringify(data)}`;
//           } else {
//                 const text = await response.text();
//                 message = `${text}`;
//           }
//           alert(message);
//           setTmId('');
 
//       } else {
//         alert('Failed to delete trainer');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred while deleting the trainer');
//     }
//   };
 
//   return (
//     <div className="container">
//       <h4 className="mb-4 text-danger">Delete Trainer</h4>
//       <form onSubmit={handleSubmit} className="row g-3">
//         <div className="col-md-6">
//           <label className="form-label">Trainer ID</label>
//           <input
//             type="text"
//             className="form-control"
//             value={tmId}
//             onChange={(e) => setTmId(e.target.value)}
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
 
// export default DeleteTrainer;
 
// import { useState } from 'react';
// import 'bootstrap-icons/font/bootstrap-icons.css';

// const DeleteTrainer = () => {
//   const [tmId, setTmId] = useState('');
//   const primaryColor = '#000048';

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!tmId.trim()) return alert('Trainer ID is required');

//     try {
//       const response = await fetch(`http://localhost:8081/deleteTrainer/${tmId}`, {
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
//         setTmId('');
//       } else {
//         alert('Failed to delete trainer');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred while deleting the trainer');
//     }
//   };

//   return (
//     <div className="card border-0 shadow-lg rounded-4">
//       <div
//         className="card-header bg-white border-bottom px-2 py-3 d-flex justify-content-between align-items-center"
//         style={{ borderBottom: `2px solid ${primaryColor}` }}
//       >
//         <h5 className="mb-0 text-primary">
//           <i className="bi bi-person-dash-fill me-2"></i>Delete Trainer
//         </h5>
//         <span className="badge text-bg-light border" style={{ color: primaryColor, borderColor: primaryColor }}>
//           HR Admin
//         </span>
//       </div>

//       <div className="card-body px-4 py-5">
//         <form onSubmit={handleSubmit} className="row g-4">
//           <div className="col-md-6">
//             <label className="form-label" style={{ fontSize: '0.85rem' }}>Trainer ID</label>
//             <div className="input-group">
//               <span className="input-group-text"><i className="bi bi-person-badge-fill"></i></span>
//               <input
//                 type="text"
//                 className="form-control form-control-lg"
//                 value={tmId}
//                 onChange={(e) => setTmId(e.target.value)}
//                 placeholder="Enter Trainer ID"
//                 style={{ fontSize: '0.9rem' }}
//                 required
//               />
//             </div>
//           </div>

//           <div className="col-12 mt-3 d-flex justify-content-center">
//             <button
//               type="submit"
//               className="btn btn-danger btn-msz w-25 shadow"
//               style={{
//                 backgroundColor: '#dc3545',
//                 borderColor: '#dc3545',
//                 color: 'white',
//                 transition: 'background-color 0.3s ease',
//               }}
//               onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#c82333')}
//               onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#dc3545')}
//             >
//               <i className="bi bi-trash-fill me-2"></i>Delete Trainer
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default DeleteTrainer;
import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const DeleteTrainer = () => {
  const [tmId, setTmId] = useState('');
  const [trainerDetails, setTrainerDetails] = useState(null);
  const primaryColor = '#000048';

  const handleTrainerIdChange = async (e) => {
    const id = e.target.value;
    setTmId(id);

    if (id.trim()) {
      try {
        const res = await fetch(`http://52.43.62.125:8085/searchTrainer/${id}`)
        if (res.ok) {
          const data = await res.json();
          console.log(data)
          setTrainerDetails(data);
        } else {
          setTrainerDetails(null);
        }
      } catch (err) {
        console.error('Error fetching trainer details:', err);
        setTrainerDetails(null);
      }
    } else {
      setTrainerDetails(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!tmId.trim()) return alert('Trainer ID is required');

    try {
      const response = await fetch(`http://52.43.62.125:8081/deleteTrainer/${tmId}`, {
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
        setTmId('');
        setTrainerDetails(null);
      } else {
        alert('Failed to delete trainer');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while deleting the trainer');
    }
  };

  return (
    <div className="card border-0 shadow-lg rounded-4">
      <div
        className="card-header bg-white border-bottom px-2 py-3 d-flex justify-content-between align-items-center"
        style={{ borderBottom: `2px solid ${primaryColor}` }}
      >
        <h5 className="mb-0 text-primary">
          <i className="bi bi-person-dash-fill me-2"></i>Delete Trainer
        </h5>
        <span className="badge text-bg-light border" style={{ color: primaryColor, borderColor: primaryColor }}>
          HR Admin
        </span>
      </div>

      <div className="card-body px-4 py-5">
        <form onSubmit={handleSubmit} className="row g-4">
          <div className="col-md-6">
            <label className="form-label" style={{ fontSize: '0.85rem' }}>Trainer ID<span className='text-danger'>*</span></label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-person-badge-fill"></i></span>
              <input
                type="text"
                className="form-control form-control-lg"
                value={tmId}
                onChange={handleTrainerIdChange}
                placeholder="Enter Trainer ID"
                required
                style={{ fontSize: '0.9rem' }}
              />
            </div>
          </div>

          {trainerDetails && (
            <div className="col-12 mt-3">
              <div className="border rounded-3 bg-light p-3">
                <h6 className="text-primary mb-3">Trainer Details</h6>
                <p className="mb-1"><strong>Name:</strong> {trainerDetails.name}</p>
                <p className="mb-1"><strong>Email:</strong> {trainerDetails.email}</p>
                <p className="mb-1"><strong>Experience:</strong> {trainerDetails.experience} years</p>
                <p className="mb-1"><strong>Role:</strong> {trainerDetails.role}</p>
                <p className="mb-1"><strong>Type:</strong> {trainerDetails.mappedType}</p>
                {/* Add more fields as per your backend response */}
              </div>
            </div>
          )}

          <div className="col-12 mt-4 d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-danger w-25 shadow"
              style={{ transition: 'background-color 0.3s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#c82333')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#dc3545')}
            >
              <i className="bi bi-trash-fill me-2"></i>Delete Trainer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeleteTrainer;
