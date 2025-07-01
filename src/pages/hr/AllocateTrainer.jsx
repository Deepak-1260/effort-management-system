import { useState, useEffect } from 'react';
import * as XLSX from 'xlsx'; // Import XLSX for bulk upload
import { utils, writeFile } from 'xlsx';

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


const downloadSampleExcel = () => {
  const sampleData = [
    {
      tmId: '',
    areaOfWork: '',
    cohortCode: ''
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
      const response = await fetch('http://52.88.246.113:8081/allocate', {
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
        const res = await fetch('http://52.88.246.113:8081/bulkAllocateTrainers', { // New endpoint for bulk allocation
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
            <button className="btn btn-outline-secondary mb-3" onClick={downloadSampleExcel}>
              <i className="bi bi-download me-2"></i>Download Template
            </button>
            <br></br>  
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
                {/* <input
                  type="text"
                  name="areaOfWork"
                  className="form-control form-control-lg"
                  value={form.areaOfWork}
                  onChange={handleChange}
                  required
                  style={{ fontSize: '0.9rem' }}
                  placeholder="training, mentor connect, evaluation"
                /> */}
                <select
                  name="areaOfWork"
                  className="form-select form-select-lg"
                  value={form.areaOfWork}
                  onChange={handleChange}
                  required
                  style={{ fontSize: '0.9rem' }}
                >
                  <option value="" disabled>Select</option>
                  <option value="Training">Training</option>
                  <option value="Evaluation">Evaluation</option>
                  <option value="Mentor Connect">Mentor Connect</option>
                </select>
              </div>
            </div>

            

          <div className="col-md-4">
            <label className="form-label" style={{ fontSize: '0.85rem' }}>Cohort Code</label>
             <div className="input-group">
              <span className="input-group-text"><i className="bi bi-code-slash"></i></span>
               <input
                type="text"
                name="cohortCode"
                className="form-control form-control-lg"
                 value={form.cohortCode}
                 onChange={handleChange}
                required
                style={{ fontSize: '0.9rem' }}
                placeholder="Cohort Code"
              />
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