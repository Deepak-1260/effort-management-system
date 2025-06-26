// import { useState } from 'react';
 
// const AllocateTrainer = () => {
//   const [form, setForm] = useState({
//     tmId: '',
//     areaOfWork: '',
//     cohortCode: ''
//   });
 
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm(prev => ({ ...prev, [name]: value }));
//   };
 
//   const handleSubmit = async (e) => {
//     e.preventDefault();
   
//     const payload = {
//       id: form.tmId,
//       areaWork: form.areaOfWork,
//       cohortCode: form.cohortCode
//     };
 
//     try {
//       const response = await fetch('http://localhost:8081/allocate', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(payload)
//       });
 
//       if (response.ok) {
//         console.log('Allocation Submitted:', payload);
//         alert(`Trainer ${form.tmId} (${form.areaOfWork}) allocated to ${form.cohortCode}`);
//         // Optionally, reset the form
//         setForm({
//           tmId: '',
//           areaOfWork: '',
//           cohortCode: ''
//         });
//       } else {
//         alert('Failed to allocate trainer');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred while allocating the trainer');
//     }
//   };
 
//   return (
//     <div className="container">
//       <h4 className="mb-4 text-primary">Allocate Trainer to Cohort</h4>
 
//       <form onSubmit={handleSubmit} className="row g-3">
//         <div className="col-md-4">
//           <label className="form-label">Trainer ID</label>
//           <input
//             type="text"
//             name="tmId"
//             className="form-control"
//             value={form.tmId}
//             onChange={handleChange}
//             required
//           />
//         </div>
 
//         <div className="col-md-4">
//           <label className="form-label">Area of Work</label>
//           <input
//             type="text"
//             name="areaOfWork"
//             className="form-control"
//             value={form.areaOfWork}
//             onChange={handleChange}
//             placeholder="e.g. Java, Python, DevOps"
//             required
//           />
//         </div>
 
//         <div className="col-md-4">
//           <label className="form-label">Cohort Code</label>
//           <input
//             type="text"
//             name="cohortCode"
//             className="form-control"
//             value={form.cohortCode}
//             onChange={handleChange}
//             required
//           />
//         </div>
 
//         <div className="col-12">
//           <button type="submit" className="btn btn-success">Allocate</button>
//         </div>
//       </form>
//     </div>
//   );
// };
 
// export default AllocateTrainer;
// import { useState } from 'react';
// import 'bootstrap-icons/font/bootstrap-icons.css';

// const AllocateTrainer = () => {
//   const [validated, setValidated] = useState(false);

//   const [form, setForm] = useState({
//     tmId: '',
//     areaOfWork: '',
//     cohortCode: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setValidated(true)

//     const payload = {
//       id: form.tmId,
//       areaWork: form.areaOfWork,
//       cohortCode: form.cohortCode
//     };

    
//     try {
//       const response = await fetch('http://localhost:8081/allocate', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload)
//       });

//       if (response.ok) {
//         alert(`Trainer ${form.tmId} (${form.areaOfWork}) allocated to ${form.cohortCode}`);
//         setForm({ tmId: '', areaOfWork: '', cohortCode: '' });
//         setValidated(false)
//       } else {
//         const res = await response.text();
//         alert(res);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred while allocating the trainer');
//     }
//   };

//   return (
//     <div className="card border-0 shadow-lg rounded-4">
//       <div className="card-header bg-white border-bottom px-2 py-3 d-flex justify-content-between align-items-center">
//         <h5 className="mb-0 text-primary">
//           <i className="bi bi-link-45deg me-2"></i>Allocate Trainer to Cohort
//         </h5>
//         <span className="badge bg-info-subtle text-dark">HR Admin</span>
//       </div>

//       <div className="card-body px-4 py-5">
//       <form onSubmit={handleSubmit} className={`row g-4 ${validated ? 'was-validated' : ''}`} noValidate>

//           <div className="col-md-4">
//             <label className="form-label" style={{ fontSize: '0.85rem' }}>Trainer ID</label>
//             <div className="input-group">
//               <span className="input-group-text"><i className="bi bi-person-badge-fill"></i></span>
//               <input
//                 type="text"
//                 name="tmId"
//                 className="form-control form-control-lg"
//                 value={form.tmId}
//                 onChange={handleChange}
//                 required
//                 style={{ fontSize: '0.9rem' }}
//                 placeholder="Trainer ID"
//               />
//             </div>
//           </div>

//           <div className="col-md-4">
//             <label className="form-label" style={{ fontSize: '0.85rem' }}>Area of Work</label>
//             <div className="input-group">
//               <span className="input-group-text"><i className="bi bi-tools"></i></span>
//               <input
//                 type="text"
//                 name="areaOfWork"
//                 className="form-control form-control-lg"
//                 value={form.areaOfWork}
//                 onChange={handleChange}
//                 required
//                 style={{ fontSize: '0.9rem' }}
//                 placeholder="training, mentor connect, evaluation"
//               />
//             </div>
//           </div>

//           <div className="col-md-4">
//             <label className="form-label" style={{ fontSize: '0.85rem' }}>Cohort Code</label>
//             <div className="input-group">
//               <span className="input-group-text"><i className="bi bi-code-slash"></i></span>
//               <input
//                 type="text"
//                 name="cohortCode"
//                 className="form-control form-control-lg"
//                 value={form.cohortCode}
//                 onChange={handleChange}
//                 required
//                 style={{ fontSize: '0.9rem' }}
//                 placeholder="Cohort Code"
//               />
//             </div>
//           </div>

//           <div className="col-12 mt-4 d-flex justify-content-center">
//             <button type="submit" className="btn btn-success btn-ms w-25 shadow">
//               <i className="bi bi-check2-circle me-2"></i>Allocate Trainer
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AllocateTrainer;
// import { useState, useEffect } from 'react';
// import 'bootstrap-icons/font/bootstrap-icons.css';

// const AllocateTrainer = () => {
//   const [validated, setValidated] = useState(false);
//   const [allocatedCohorts, setAllocatedCohorts] = useState([]);

//   const [form, setForm] = useState({
//     tmId: '',
//     areaOfWork: '',
//     cohortCode: ''
//   });

//   useEffect(() => {
//     const fetchAllocatedCohorts = async () => {
//       if (form.tmId.trim()) {
//         try {
//           console.log(form.tmId)
//           const res = await fetch(`http://localhost:8081/getAllocatedCohorts/${form.tmId}`);
//           if (res.ok) {
//             const data = await res.json();
//             console.log(data)
//             setAllocatedCohorts(data);
//           } else {
//             setAllocatedCohorts([]);
//           }
//         } catch (err) {
//           console.error('Failed to fetch cohorts:', err);
//           setAllocatedCohorts([]);
//         }
//       } else {
//         setAllocatedCohorts([]);
//       }
//     };

//     fetchAllocatedCohorts();
//   }, [form.tmId]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setValidated(true);

//     const payload = {
//       id: form.tmId,
//       areaWork: form.areaOfWork,
//       cohortCode: form.cohortCode
//     };

//     try {
//       const response = await fetch('http://localhost:8081/allocate', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload)
//       });

//       if (response.ok) {
//         alert(`Trainer ${form.tmId} (${form.areaOfWork}) allocated to ${form.cohortCode}`);
//         setForm({ tmId: '', areaOfWork: '', cohortCode: '' });
//         setAllocatedCohorts([]);
//         setValidated(false);
//       } else {
//         const res = await response.text();
//         alert(res);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred while allocating the trainer');
//     }
//   };

//   return (
//     <div className="card border-0 shadow-lg rounded-4">
//       <div className="card-header bg-white border-bottom px-2 py-3 d-flex justify-content-between align-items-center">
//         <h5 className="mb-0 text-primary">
//           <i className="bi bi-link-45deg me-2"></i>Allocate Trainer to Cohort
//         </h5>
//         <span className="badge bg-info-subtle text-dark">HR Admin</span>
//       </div>

//       <div className="card-body px-4 py-5">
//         <form onSubmit={handleSubmit} className={`row g-4 ${validated ? 'was-validated' : ''}`} noValidate>

//           <div className="col-md-4">
//             <label className="form-label" style={{ fontSize: '0.85rem' }}>Trainer ID</label>
//             <div className="input-group">
//               <span className="input-group-text"><i className="bi bi-person-badge-fill"></i></span>
//               <input
//                 type="text"
//                 name="tmId"
//                 className="form-control form-control-lg"
//                 value={form.tmId}
//                 onChange={handleChange}
//                 required
//                 style={{ fontSize: '0.9rem' }}
//                 placeholder="Trainer ID"
//               />
//             </div>
//           </div>

//           <div className="col-md-4">
//             <label className="form-label" style={{ fontSize: '0.85rem' }}>Area of Work</label>
//             <div className="input-group">
//               <span className="input-group-text"><i className="bi bi-tools"></i></span>
//               <input
//                 type="text"
//                 name="areaOfWork"
//                 className="form-control form-control-lg"
//                 value={form.areaOfWork}
//                 onChange={handleChange}
//                 required
//                 style={{ fontSize: '0.9rem' }}
//                 placeholder="training, mentor connect, evaluation"
//               />
//             </div>
//           </div>

//           <div className="col-md-4">
//             <label className="form-label" style={{ fontSize: '0.85rem' }}>Allocated Cohort Codes</label>
//             <div className="input-group">
//               <span className="input-group-text"><i className="bi bi-code-slash"></i></span>
//               <select
//                 name="cohortCode"
//                 className="form-select form-select-lg"
//                 value={form.cohortCode}
//                 onChange={handleChange}
//                 required
//                 style={{ fontSize: '0.9rem' }}
//               >
//                 <option value="">Select Cohort</option>
//                 {allocatedCohorts.map(code => (
//                   <option key={code} value={code}>{code}</option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           <div className="col-12 mt-4 d-flex justify-content-center">
//             <button type="submit" className="btn btn-success btn-ms w-25 shadow">
//               <i className="bi bi-check2-circle me-2"></i>Allocate Trainer
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AllocateTrainer;
import { useState, useEffect } from 'react';
import * as XLSX from 'xlsx'; // Import XLSX for bulk upload
import 'bootstrap-icons/font/bootstrap-icons.css';

const AllocateTrainer = () => {
  const [validated, setValidated] = useState(false);
  const [allocatedCohorts, setAllocatedCohorts] = useState([]);
  const [uploadMode, setUploadMode] = useState('single'); // 'single' or 'bulk'

  const [form, setForm] = useState({
    tmId: '',
    areaOfWork: '',
    cohortCode: ''
  });

  useEffect(() => {
    const fetchAllocatedCohorts = async () => {
      if (form.tmId.trim() && uploadMode === 'single') { // Only fetch for single mode
        try {
          console.log(form.tmId);
          const res = await fetch(`http://localhost:8081/getAllocatedCohorts/${form.tmId}`);
          if (res.ok) {
            const data = await res.json();
            console.log(data);
            setAllocatedCohorts(data);
          } else {
            setAllocatedCohorts([]);
          }
        } catch (err) {
          console.error('Failed to fetch cohorts:', err);
          setAllocatedCohorts([]);
        }
      } else {
        setAllocatedCohorts([]); // Clear if no tmId or in bulk mode
      }
    };

    fetchAllocatedCohorts();
  }, [form.tmId, uploadMode]); // Add uploadMode to dependency array

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSingleSubmit = async (e) => {
    e.preventDefault();
    setValidated(true);
    const currentForm = e.currentTarget;
    if (!currentForm.checkValidity()) {
      return;
    }

    const payload = {
      id: form.tmId,
      areaWork: form.areaOfWork,
      cohortCode: form.cohortCode
    };

    try {
      const response = await fetch('http://localhost:8081/allocate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        alert(`Trainer ${form.tmId} (${form.areaOfWork}) allocated to ${form.cohortCode}`);
        setForm({ tmId: '', areaOfWork: '', cohortCode: '' });
        setValidated(false);
      } else {
        const res = await response.text();
        alert(res);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while allocating the trainer');
    }
  };

  const handleBulkUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: 'binary' });
      const sheetName = wb.SheetNames[0];
      const sheet = wb.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(sheet);

      // Map the Excel data to match the expected payload for bulk allocation
      const payload = data.map(row => ({
        id: row.trainerId, // Assuming Excel column is 'trainerId'
        areaWork: row.areaOfWork, // Assuming Excel column is 'areaOfWork'
        cohortCode: row.cohortCode // Assuming Excel column is 'cohortCode'
      }));

      console.log("Bulk upload payload:", payload); // For debugging

      try {
        const res = await fetch('http://localhost:8081/bulkAllocateTrainers', { // New endpoint for bulk allocation
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const result = await res.text();
        alert(result);
      } catch (err) {
        console.error('Bulk allocation failed:', err);
        alert('Failed to bulk allocate trainers');
      }
    };
    reader.readAsBinaryString(file);
  };

  return (
    <div className="card border-0 shadow-lg rounded-4">
      <div className="card-header bg-white border-bottom px-2 py-3 d-flex justify-content-between align-items-center">
        <h5 className="mb-0 text-primary">
          <i className="bi bi-link-45deg me-2"></i>Allocate Trainer to Cohort
        </h5>
        <span className="badge bg-info-subtle text-dark">HR Admin</span>
      </div>

      <div className="card-body px-4 py-5">
        <div className="d-flex justify-content-center mb-4 gap-3">
          <button
            className={`btn ${uploadMode === 'single' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => {
              setUploadMode('single');
              setValidated(false); // Reset validation when switching modes
              setForm({ tmId: '', areaOfWork: '', cohortCode: '' }); // Clear form
            }}
          >
            <i className="bi bi-person-fill me-2"></i>Single Allocation
          </button>
          <button
            className={`btn ${uploadMode === 'bulk' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => {
              setUploadMode('bulk');
              setValidated(false); // Reset validation when switching modes
              setForm({ tmId: '', areaOfWork: '', cohortCode: '' }); // Clear form
            }}
          >
            <i className="bi bi-upload me-2"></i>Bulk Allocation
          </button>
        </div>

        {uploadMode === 'bulk' && (
          <div className="mb-4">
            <label htmlFor="bulkUploadFile" className="form-label" style={{ fontSize: '0.85rem' }}>Upload Excel File for Bulk Allocation</label>
            <input
              id="bulkUploadFile"
              type="file"
              accept=".xlsx, .xls"
              onChange={handleBulkUpload}
              className="form-control"
            />
          </div>
        )}

        {uploadMode === 'single' && (
          <form onSubmit={handleSingleSubmit} className={`row g-4 ${validated ? 'was-validated' : ''}`} noValidate>

            <div className="col-md-4">
              <label className="form-label" style={{ fontSize: '0.85rem' }}>Trainer ID</label>
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-person-badge-fill"></i></span>
                <input
                  type="text"
                  name="tmId"
                  className="form-control form-control-lg"
                  value={form.tmId}
                  onChange={handleChange}
                  required
                  style={{ fontSize: '0.9rem' }}
                  placeholder="Trainer ID"
                />
              </div>
            </div>

            <div className="col-md-4">
              <label className="form-label" style={{ fontSize: '0.85rem' }}>Area of Work</label>
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-tools"></i></span>
                <input
                  type="text"
                  name="areaOfWork"
                  className="form-control form-control-lg"
                  value={form.areaOfWork}
                  onChange={handleChange}
                  required
                  style={{ fontSize: '0.9rem' }}
                  placeholder="training, mentor connect, evaluation"
                />
              </div>
            </div>

            <div className="col-md-4">
              <label className="form-label" style={{ fontSize: '0.85rem' }}>Allocated Cohort Codes</label>
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-code-slash"></i></span>
                <select
                  name="cohortCode"
                  className="form-select form-select-lg"
                  value={form.cohortCode}
                  onChange={handleChange}
                  required
                  style={{ fontSize: '0.9rem' }}
                >
                  <option value="">Select Cohort</option>
                  {allocatedCohorts.map(code => (
                    <option key={code} value={code}>{code}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="col-12 mt-4 d-flex justify-content-center">
              <button type="submit" className="btn btn-success btn-ms w-25 shadow">
                <i className="bi bi-check2-circle me-2"></i>Allocate Trainer
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AllocateTrainer;