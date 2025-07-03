// import { useState } from 'react';
// import * as XLSX from 'xlsx';
// import { utils, writeFile } from 'xlsx';

// import 'bootstrap-icons/font/bootstrap-icons.css';

// const AddCohort = () => {
//   const [validated, setValidated] = useState(false);
//   const [uploadMode, setUploadMode] = useState('single'); // 'single' or 'bulk'

//   const [formData, setForm] = useState({
//     cohortCode: '',
//     bussinessType: '',
//     gencCount: '',
//     location: '',
//     hr_id: ''
//   });


//   const downloadSampleExcel = () => {
//     const sampleData = [
//       {
//         cohortCode: '',
//         bussinessType: '',
//         gencCount: '',
//         location: '',
//         hr_id: ''
//       }
//     ];

//     const worksheet = utils.json_to_sheet(sampleData);
//     const workbook = utils.book_new();
//     utils.book_append_sheet(workbook, worksheet, 'Trainers');

//     writeFile(workbook, 'Trainer_Sample_Format.xlsx');
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSingleSubmit = async (e) => {
//     e.preventDefault();
//     setValidated(true);

//     const form = e.currentTarget;

//     // --- Custom validation for gencCount moved before form.checkValidity() ---
//     const gencCountValue = parseInt(formData.gencCount, 10);
//     if (gencCountValue < 1 || gencCountValue > 100) {
//       alert('Genc Count should be between 1 and 100');
      
//       return; // Stop the submission if validation fails
//     } else {
        
//     }
//     // --- End of custom validation ---

//     if (!form.checkValidity()) {
//       // This will catch other required fields not filled, etc.
//       return;
//     }

//     try {
//       const response = await fetch('http://52.88.246.113:8081/add-cohort', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       });

//       if (response.ok) {
//         alert('Cohort added successfully!');
//         setForm({
//           cohortCode: '',
//           bussinessType: '',
//           gencCount: '',
//           location: '',
//           hr_id: ''
//         });
//         setValidated(false);
//       } else {
//         const res = await response.text();
//         alert(`Failed to add: ${res}`);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred while adding the cohort');
//     }
//   };

//   const handleBulkUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onload = async (evt) => {
//       const bstr = evt.target.result;
//       const wb = XLSX.read(bstr, { type: 'binary' });
//       const sheetName = wb.SheetNames[0];
//       const sheet = wb.Sheets[sheetName];
//       const data = XLSX.utils.sheet_to_json(sheet);

//       const payload = data.map(row => ({
//         cohortCode: row.cohortCode,
//         bussinessType: row.bussinessType,
//         gencCount: parseInt(row.gencCount, 10),
//         location: row.location,
//         hr_id: row.hr_id
//       }));

//       try {
//         const res = await fetch('http://52.88.246.113:8081/bulk-add-cohorts', { // Assuming a bulk add endpoint
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(payload)
//         });

//         const result = await res.text();
//         console.log(result)
//         alert(result);
//       } catch (err) {
//         console.error('Bulk upload failed:', err);
//         alert('Failed to upload cohorts');
//       }
//     };
//     reader.readAsBinaryString(file);
//   };

//   return (
//     <div className="card border-0 shadow-lg rounded-4">
//       <div className="card-header bg-white border-bottom px-4 py-3 d-flex justify-content-between align-items-center">
//         <h5 className="mb-0 text-primary">
//           <i className="bi bi-journal-plus me-2"></i>Add New Cohort
//         </h5>
//         <span className="badge bg-secondary-subtle text-dark">HR Admin</span>
//       </div>

//       <div className="card-body px-4 py-5">
//         <div className="d-flex justify-content-center mb-4 gap-3">
//           <button
//             className={`btn ${uploadMode === 'single' ? 'btn-primary' : 'btn-outline-primary'}`}
//             onClick={() => setUploadMode('single')}
//           >
//             <i className="bi bi-journal-plus me-2"></i>Single Cohort Upload
//           </button>
//           <button
//             className={`btn ${uploadMode === 'bulk' ? 'btn-primary' : 'btn-outline-primary'}`}
//             onClick={() => setUploadMode('bulk')}
//           >
//             <i className="bi bi-upload me-2"></i>Bulk Upload
//           </button>
//         </div>

//         {uploadMode === 'bulk' && (
//           <div className="mb-4">
//             <button className="btn btn-outline-secondary mb-3" onClick={downloadSampleExcel}>
//               <i className="bi bi-download me-2"></i>Download Template
//             </button>
//             <br></br>
//             <label htmlFor="bulkUploadFile" className="form-label" style={{ fontSize: '0.85rem' }}>Upload Excel File</label>
//             <input
//               id="bulkUploadFile"
//               type="file"
//               accept=".xlsx, .xls"
//               onChange={handleBulkUpload}
//               className="form-control"
//             />
//           </div>
//         )}

//         {uploadMode === 'single' && (
//           <form onSubmit={handleSingleSubmit} className={`row g-4 ${validated ? 'was-validated' : ''}`} noValidate>
//             {[
//               { label: 'Cohort Code', icon: 'bi-code-slash', name: 'cohortCode', type: 'text', placeholder: 'e.g. GEN-COH-01' },
//               { label: 'Business Type', icon: 'bi-briefcase-fill', name: 'bussinessType', type: 'text', placeholder: 'e.g. BFSI, Retail' },
//               { label: 'Genc Count', icon: 'bi-people-fill', name: 'gencCount', type: 'number', placeholder: 'e.g. 50', min: '1', max: '100'},
//               { label: 'Location', icon: 'bi-geo-alt-fill', name: 'location', type: 'text', placeholder: 'e.g. Chennai' },
//               { label: 'HR ID', icon: 'bi-person-badge-fill', name: 'hr_id', type: 'text', placeholder: 'e.g. HR123' },
//             ].map((field, idx) => (
//               <div className="col-md-6" key={idx}>
//                 <label className="form-label" style={{ fontSize: '0.85rem' }}>{field.label}</label>
//                 <div className="input-group">
//                   <span className="input-group-text"><i className={`bi ${field.icon}`}></i></span>
//                   <input
//                     type={field.type}
//                     name={field.name}
//                     className="form-control form-control-lg"
//                     value={formData[field.name]}
//                     onChange={handleChange}
//                     required={field.name !== 'location'} // optional field
//                     placeholder={field.placeholder}
//                     style={{ fontSize: '0.9rem' }}
//                     min={field.min}
//                     max={field.max}
//                   />
//                 </div>
//               </div>
//             ))}

//             <div className="col-12 mt-5 d-flex justify-content-center ">
//               <button type="submit" className="btn btn-success btn-ms w-25 shadow">
//                 <i className="bi bi-check-circle-fill me-2"></i>Add Cohort
//               </button>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AddCohort;

import { useState, useEffect, useRef } from 'react'; // Import useEffect and useRef
import * as XLSX from 'xlsx';
import { utils, writeFile } from 'xlsx';

import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap CSS is imported
import { Modal, Button } from 'react-bootstrap'; // Import Modal and Button from react-bootstrap

// Internal ModalAlert Component (defined within AddCohort.jsx)
const ModalAlert = ({ show, message, onClose }) => {
  const timerRef = useRef(null);

  useEffect(() => {
    if (show) {
      // Clear any existing timer to prevent multiple timers if the modal is shown quickly
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      // Set a new timer to close the modal after 5 seconds
      timerRef.current = setTimeout(() => {
        onClose();
      }, 5000); // 5000 milliseconds = 5 seconds
    }

    // Cleanup function: clear the timer when the component unmounts or `show` becomes false
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [show, onClose]); // Re-run effect when `show` or `onClose` changes

  return (
    <Modal show={show} onHide={onClose} centered>
      {/* <Modal.Header closeButton>
        <Modal.Title>Notification</Modal.Title>
      </Modal.Header> */}
      <Modal.Body className="text-center">
        <p className="lead">{message}</p>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

// Main AddCohort Component
const AddCohort = () => {
  const [validated, setValidated] = useState(false);
  const [uploadMode, setUploadMode] = useState('single'); // 'single' or 'bulk'

  // State for the custom alert modal
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const [formData, setForm] = useState({
    cohortCode: '',
    bussinessType: '',
    gencCount: '',
    location: '',
    hr_id: ''
  });

  // Function to show the modal with a specific message
  const displayAlert = (message) => {
    setAlertMessage(message);
    setShowAlertModal(true);
  };

  // Function to hide the modal
  const hideAlert = () => {
    setShowAlertModal(false);
    setAlertMessage(''); // Clear message after hiding
  };

  const downloadSampleExcel = () => {
    const sampleData = [
      {
        cohortCode: '',
        bussinessType: '',
        gencCount: '',
        location: '',
        hr_id: ''
      }
    ];

    const worksheet = utils.json_to_sheet(sampleData);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, 'Trainers');

    writeFile(workbook, 'Trainer_Sample_Format.xlsx');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSingleSubmit = async (e) => {
    e.preventDefault();
    setValidated(true);

    const form = e.currentTarget;

    const gencCountValue = parseInt(formData.gencCount, 10);

    // Custom validation for gencCount moved before form.checkValidity()
    if (gencCountValue < 1 || gencCountValue > 500) {
      displayAlert('Genc Count should be between 1 and 500'); // Use modal
      return; // Stop the submission if validation fails
    }

    if (!form.checkValidity()) {
      return;
    }

    try {
      const response = await fetch('http://52.88.246.113:8081/add-cohort', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        displayAlert('Cohort added successfully!'); // Use modal
        setForm({
          cohortCode: '',
          bussinessType: '',
          gencCount: '',
          location: '',
          hr_id: ''
        });
        setValidated(false);
      } else {
        const res = await response.text();
        displayAlert(`Failed to add: ${res}`); // Use modal
      }
    } catch (error) {
      console.error('Error:', error);
      displayAlert('An error occurred while adding the cohort'); // Use modal
    }
  };

  const handleBulkUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      displayAlert('No file selected for upload.');
      return;
    }

    const reader = new FileReader();
    reader.onload = async (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: 'binary' });
      const sheetName = wb.SheetNames[0];
      const sheet = wb.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(sheet);

      const payload = data.map(row => ({
        cohortCode: row.cohortCode,
        bussinessType: row.bussinessType,
        gencCount: parseInt(row.gencCount, 10),
        location: row.location,
        hr_id: row.hr_id
      }));

      try {
        const res = await fetch('http://52.88.246.113:8081/bulk-add-cohorts', { // Assuming a bulk add endpoint
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const result = await res.text();
        console.log(result)
        displayAlert(result); // Use modal
      } catch (err) {
        console.error('Bulk upload failed:', err);
        displayAlert('Failed to upload cohorts'); // Use modal
      }
    };
    reader.readAsBinaryString(file);
  };

  return (
    <div className="card border-0 shadow-lg rounded-4">
      <div className="card-header bg-white border-bottom px-4 py-3 d-flex justify-content-between align-items-center">
        <h5 className="mb-0 text-primary">
          <i className="bi bi-journal-plus me-2"></i>Add New Cohort
        </h5>
        <span className="badge bg-secondary-subtle text-dark">HR Admin</span>
      </div>

      <div className="card-body px-4 py-5">
        <div className="d-flex justify-content-center mb-4 gap-3">
          <button
            className={`btn ${uploadMode === 'single' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setUploadMode('single')}
          >
            <i className="bi bi-journal-plus me-2"></i>Single Cohort Upload
          </button>
          <button
            className={`btn ${uploadMode === 'bulk' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setUploadMode('bulk')}
          >
            <i className="bi bi-upload me-2"></i>Bulk Upload
          </button>
        </div>

        {uploadMode === 'bulk' && (
          <div className="mb-4">
            <button className="btn btn-outline-secondary mb-3" onClick={downloadSampleExcel}>
              <i className="bi bi-download me-2"></i>Download Template
            </button>
            <br></br>
            <label htmlFor="bulkUploadFile" className="form-label" style={{ fontSize: '0.85rem' }}>Upload Excel File</label>
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
            {[
              { label: 'Cohort Code', icon: 'bi-code-slash', name: 'cohortCode', type: 'text', placeholder: 'e.g. GEN-COH-01' },
              { label: 'Business Type', icon: 'bi-briefcase-fill', name: 'bussinessType', type: 'text', placeholder: 'e.g. BFSI, Retail' },
              { label: 'Genc Count', icon: 'bi-people-fill', name: 'gencCount', type: 'number', placeholder: 'e.g. 50', min: '1', max: '100'},
              { label: 'Location', icon: 'bi-geo-alt-fill', name: 'location', type: 'text', placeholder: 'e.g. Chennai' },
              { label: 'HR ID', icon: 'bi-person-badge-fill', name: 'hr_id', type: 'text', placeholder: 'e.g. HR123' },
            ].map((field, idx) => (
              <div className="col-md-6" key={idx}>
                <label className="form-label" style={{ fontSize: '0.85rem' }}>{field.label}</label>
                <div className="input-group">
                  <span className="input-group-text"><i className={`bi ${field.icon}`}></i></span>
                  <input
                    type={field.type}
                    name={field.name}
                    className="form-control form-control-lg"
                    value={formData[field.name]}
                    onChange={handleChange}
                    required={field.name !== 'location'} // optional field
                    placeholder={field.placeholder}
                    style={{ fontSize: '0.9rem' }}
                    min={field.min}
                    max={field.max}
                  />
                </div>
              </div>
            ))}

            <div className="col-12 mt-5 d-flex justify-content-center ">
              <button type="submit" className="btn btn-success btn-ms w-25 shadow">
                <i className="bi bi-check-circle-fill me-2"></i>Add Cohort
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Render the ModalAlert component */}
      <ModalAlert
        show={showAlertModal}
        message={alertMessage}
        onClose={hideAlert}
      />
    </div>
  );
};

export default AddCohort;