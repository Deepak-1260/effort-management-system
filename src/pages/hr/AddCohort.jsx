// import { useState } from 'react';
 
// const AddCohort = () => {
//   const [formData, setForm] = useState({
//     cohortCode: '',
//     bussinessType: '',
//     gencCount: '',
//     location: '',
//     hr_id: ''
//   });
 
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm(prev => ({ ...prev, [name]: value }));
//   };
 
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:8081/add-cohort', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });
//       if (response.ok) {
//         console.log('Cohort added:', formData);
//         alert('Cohort added successfully!');
//         // Optionally, reset the form
//         setForm({
//           cohortCode: '',
//           bussinessType: '',
//           gencCount: '',
//           location: '',
//           hr_id: ''
//         });
//       } else {
//         alert('Failed to add cohort');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred while adding the cohort');
//     }
//   };
 
//   return (
//     <div className="container">
//       <h4 className="mb-4 text-primary">Add New Cohort</h4>
 
//       <form onSubmit={handleSubmit} className="row g-3">
//         <div className="col-md-6">
//           <label className="form-label">Cohort Code</label>
//           <input
//             type="text"
//             name="cohortCode"
//             className="form-control"
//             value={formData.cohortCode}
//             onChange={handleChange}
//             required
//           />
//         </div>
 
//         <div className="col-md-6">
//           <label className="form-label">Business Type:</label>
//           <input
//             type="text"
//             name="bussinessType"
//             value={formData.bussinessType}
//             onChange={handleChange}
//             required
//           />
//         </div>
 
//         <div className="col-md-6">
//           <label className="form-label">Genc Count:</label>
//           <input
//             type="number"
//             name="gencCount"
//             value={formData.gencCount}
//             onChange={handleChange}
//             required
//           />
//         </div>
 
//         <div className="col-md-6">
//           <label className="form-label">Location:</label>
//           <input
//             type="text"
//             name="location"
//             value={formData.location}
//             onChange={handleChange}
//           />
//         </div>
 
//         <div className="col-md-6">
//           <label className="form-label">HR ID:</label>
//           <input
//             type="text"
//             name="hr_id"
//             value={formData.hr_id}
//             onChange={handleChange}
//           />
//         </div>
 
//         <div className="col-12">
//           <button type="submit" className="btn btn-success">Add Cohort</button>
//         </div>
//       </form>
//     </div>
//   );
// };
 
// export default AddCohort;
// import { useState } from 'react';
// import 'bootstrap-icons/font/bootstrap-icons.css';

// const AddCohort = () => {
//   const [validated, setValidated] = useState(false);

//   const [formData, setForm] = useState({
//     cohortCode: '',
//     bussinessType: '',
//     gencCount: '',
//     location: '',
//     hr_id: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setValidated(true);
//     const form = e.currentTarget;
//     if (!form.checkValidity()) {
//       return;
//     }
//     try {
//       const response = await fetch('http://localhost:8081/add-cohort', {
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
//         setValidated(false)
//       } else {
//         const res = await response.text();
//         alert(`Failed to add : ${res}`);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred while adding the cohort');
//     }
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
//       <form onSubmit={handleSubmit} className={`row g-4 ${validated ? 'was-validated' : ''}`} noValidate>

//           {[
//             { label: 'Cohort Code', icon: 'bi-code-slash', name: 'cohortCode', type: 'text', placeholder: 'e.g. GEN-COH-01' },
//             { label: 'Business Type', icon: 'bi-briefcase-fill', name: 'bussinessType', type: 'text', placeholder: 'e.g. BFSI, Retail' },
//             { label: 'Genc Count', icon: 'bi-people-fill', name: 'gencCount', type: 'number', placeholder: 'e.g. 50' },
//             { label: 'Location', icon: 'bi-geo-alt-fill', name: 'location', type: 'text', placeholder: 'e.g. Chennai' },
//             { label: 'HR ID', icon: 'bi-person-badge-fill', name: 'hr_id', type: 'text', placeholder: 'e.g. HR123' },
//           ].map((field, idx) => (
//             <div className="col-md-6" key={idx}>
//               <label className="form-label" style={{ fontSize: '0.85rem' }}>{field.label}</label>
//               <div className="input-group">
//                 <span className="input-group-text"><i className={`bi ${field.icon}`}></i></span>
//                 <input
//                   type={field.type}
//                   name={field.name}
//                   className="form-control form-control-lg"
                  
//                   value={formData[field.name]}
//                   onChange={handleChange}
//                   required={field.name !== 'location'} // optional field
//                   placeholder={field.placeholder}
//                   style={{ fontSize: '0.9rem' }}
//                 />
//               </div>
//             </div>
//           ))}

//           <div className="col-12 mt-5 d-flex justify-content-center ">
//               <button type="submit" className="btn btn-success btn-ms w-25 shadow">
//                 <i className="bi bi-check-circle-fill me-2"></i>Update Information
//               </button>
//             </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddCohort;

import { useState } from 'react';
import * as XLSX from 'xlsx';
import { utils, writeFile } from 'xlsx';

import 'bootstrap-icons/font/bootstrap-icons.css';

const AddCohort = () => {
  const [validated, setValidated] = useState(false);
  const [uploadMode, setUploadMode] = useState('single'); // 'single' or 'bulk'

  const [formData, setForm] = useState({
    cohortCode: '',
    bussinessType: '',
    gencCount: '',
    location: '',
    hr_id: ''
  });


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
    if (!form.checkValidity()) {
      return;
    }
    try {
      const response = await fetch('http://localhost:8081/add-cohort', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Cohort added successfully!');
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
        alert(`Failed to add: ${res}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while adding the cohort');
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

      const payload = data.map(row => ({
        cohortCode: row.cohortCode,
        bussinessType: row.bussinessType,
        gencCount: parseInt(row.gencCount, 10),
        location: row.location,
        hr_id: row.hr_id
      }));

      try {
        const res = await fetch('http://localhost:8081/bulk-add-cohorts', { // Assuming a bulk add endpoint
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const result = await res.text();
        console.log(result)
        alert(result);
      } catch (err) {
        console.error('Bulk upload failed:', err);
        alert('Failed to upload cohorts');
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
              { label: 'Genc Count', icon: 'bi-people-fill', name: 'gencCount', type: 'number', placeholder: 'e.g. 50' },
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
    </div>
  );
};

export default AddCohort;