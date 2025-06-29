// import { useState } from 'react';
// import Select from 'react-select';
 
 
// const AddTrainer = () => {
//   const [form, setForm] = useState({
//     tmId: '',
//     name: '',
//     email: '',
//     phoneNo: '',
//     gender: '',
//     experience: '',
//     mappedTrainerType: '',
//     password: '',
//     role: 'Trainer',
//     skills: [],
//   });
 
//   const skillOptions = [
//     { value: 'JavaScript', label: 'JavaScript' },
//     { value: 'React', label: 'React' },
//     { value: 'Node.js', label: 'Node.js' },
//     { value: 'Python', label: 'Python' },
//     { value: 'Java', label: 'Java' },
//   ];
 
//   const handleSkillsChange = (selectedOptions) => {
//     setForm((prev) => ({
//       ...prev,
//       skills: selectedOptions.map((option) => option.value),
//     }));
//   };
 
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };
 
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');
//   const [isSuccess, setIsSuccess] = useState(false);
 
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     console.log('Trainer Added:', form);
 
//     try {
//       const payload = {
//         id: form.tmId,
//         name: form.name,
//         email: form.email,
//         phoneNumber: form.phoneNo,
//         gender: form.gender,
//         experience: parseInt(form.experience, 10),
//         mappedType: form.mappedTrainerType,
//         password: form.password,
//         role: form.role,
//         skills: form.skills,
//       };
 
//       const response = await fetch('http://localhost:8081/addTrainer', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//       }).then(res=>res.text())
//       .then(data=>{


//         const result =data;
//         console.log(`${result} to ${form.email}`);
//         setMessage(`${result} to ${form.email}`);
//         setIsSuccess(true);
//         setForm({
//           tmId: '',
//           name: '',
//           email: '',
//           phoneNo: '',
//           gender: '',
//           experience: '',
//           mappedTrainerType: '',
//           password: '',
//           role: 'Trainer',
//           skills: [],
//         });
//       // } else {
//       //   const errorData = await response.text().catch(() => ({
//       //     message: 'Server responded with an error.',
//       //   }));
//         // setMessage(`Error: ${errorData.message || 'Failed to create trainer.'}`);
//         // setIsSuccess(false);
//       // }

//     })
//     } catch (error) {
//       setMessage(`Network error: ${error.message}`);
//       setIsSuccess(false);
//       console.error('Fetch error:', error);
//     } finally {
//       setLoading(false);
//     }
 
//     alert('Trainer added successfully!');
//   };
 
//   return (
//     <div className="card border-0 shadow-lg rounded-4">
//       <div className="card-header bg-white border-bottom d-flex justify-content-between align-items-center">
//         <h5 className="mb-0 text-primary">
//           <i className="bi bi-person-plus-fill me-2"></i>Add New Trainer
//         </h5>
//         <span className="badge bg-secondary-subtle text-dark">HR Admin</span>
//       </div>
 
//       <div className="card-body px-4 py-5">
//         {message && (
//           <div
//             className={`p-4 mb-6 rounded-lg text-sm font-medium ${
//               isSuccess ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
//             }`}
//           >
//             {message}
//           </div>
//         )}
//         <form onSubmit={handleSubmit} className="row g-4">
//           <div className="col-md-6">
//             <label className="form-label">Trainer ID</label>
//             <div className="input-group">
//               <span className="input-group-text">
//                 <i className="bi bi-person-badge-fill"></i>
//               </span>
//               <input
//                 type="text"
//                 className="form-control form-control-lg"
//                 name="tmId"
//                 value={form.tmId}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>
 
//           <div className="col-md-6">
//             <label className="form-label">Full Name</label>
//             <div className="input-group">
//               <span className="input-group-text">
//                 <i className="bi bi-person-fill"></i>
//               </span>
//               <input
//                 type="text"
//                 className="form-control form-control-lg"
//                 name="name"
//                 value={form.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>
 
//           <div className="col-md-6">
//             <label className="form-label">Email</label>
//             <div className="input-group">
//               <span className="input-group-text">
//                 <i className="bi bi-envelope-fill"></i>
//               </span>
//               <input
//                 type="email"
//                 className="form-control form-control-lg"
//                 name="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>
 
//           <div className="col-md-6">
//             <label className="form-label">Phone Number</label>
//             <div className="input-group">
//               <span className="input-group-text">
//                 <i className="bi bi-telephone-fill"></i>
//               </span>
//               <input
//                 type="tel"
//                 className="form-control form-control-lg"
//                 name="phoneNo"
//                 value={form.phoneNo}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>
 
//           <div className="col-md-4">
//             <label className="form-label">Gender</label>
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               name="gender"
//               value={form.gender}
//               onChange={handleChange}
//               required
//             />
//           </div>
 
//           <div className="col-md-4">
//             <label className="form-label">Experience (Years)</label>
//             <input
//               type="number"
//               className="form-control form-control-lg"
//               name="experience"
//               value={form.experience}
//               onChange={handleChange}
//               required
//             />
//           </div>
 
//           <div className="col-md-4">
//             <label className="form-label">Mapped Trainer Type</label>
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               name="mappedTrainerType"
//               value={form.mappedTrainerType}
//               onChange={handleChange}
//               required
//             />
//           </div>
 
//           <div className="col-md-12">
//             <label className="form-label">Skills</label>
//             <Select
//               isMulti
//               name="skills"
//               options={skillOptions}
//               className="basic-multi-select"
//               classNamePrefix="select"
//               onChange={handleSkillsChange}
//               value={skillOptions.filter((option) => form.skills.includes(option.value))}
//             />
//           </div>
 
//           {/* <div className="col-md-6">
//             <label className="form-label">Password</label>
//             <div className="input-group">
//               <span className="input-group-text">
//                 <i className="bi bi-lock-fill"></i>
//               </span>
//               <input
//                 type="password"
//                 className="form-control form-control-lg"
//                 name="password"
//                 value={form.password}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div> */}
 
//           <div className="col-md-6">
//             <label className="form-label">Role</label>
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               name="role"
//               value={form.role}
//               disabled
//             />
//           </div>
 
//           <div className="col-12 mt-4">
//             <button type="submit" disabled={loading} className="btn btn-primary btn-lg w-100 shadow">
//               <i className="bi bi-person-plus-fill me-2"></i>Add Trainer
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
 
// export default AddTrainer;
// import { useState } from 'react';
// import Select from 'react-select';
// import 'bootstrap-icons/font/bootstrap-icons.css';

// const AddTrainer = () => {
//   const [form, setForm] = useState({
//     tmId: '',
//     name: '',
//     email: '',
//     phoneNo: '',
//     gender: '',
//     experience: '',
//     mappedTrainerType: '',
//     role: 'Trainer',
//     skills: [],
//   });

//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');
//   const [isSuccess, setIsSuccess] = useState(false);

//   const skillOptions = [
//     { value: 'JavaScript', label: 'JavaScript' },
//     { value: 'React', label: 'React' },
//     { value: 'Node.js', label: 'Node.js' },
//     { value: 'Python', label: 'Python' },
//     { value: 'Java', label: 'Java' },
//   ];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSkillsChange = (selectedOptions) => {
//     setForm(prev => ({
//       ...prev,
//       skills: selectedOptions.map(option => option.value),
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const payload = {
//       id: form.tmId,
//       name: form.name,
//       email: form.email,
//       phoneNumber: form.phoneNo,
//       gender: form.gender,
//       experience: parseInt(form.experience, 10),
//       mappedType: form.mappedTrainerType,
//       role: form.role,
//       skills: form.skills,
//     };

//     try {
//       const response = await fetch('http://localhost:8081/addTrainer', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload),
//       });

//       const result = await response.text();
//       setMessage(`${result} to ${form.email}`);
//       setIsSuccess(true);
//       setForm({
//         tmId: '',
//         name: '',
//         email: '',
//         phoneNo: '',
//         gender: '',
//         experience: '',
//         mappedTrainerType: '',
//         password: '',
//         role: 'Trainer',
//         skills: [],
//       });
//       alert('Trainer added successfully!');
//     } catch (error) {
//       console.error('Fetch error:', error);
//       setMessage(`Network error: ${error.message}`);
//       setIsSuccess(false);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="card border-0 shadow-lg rounded-4">
//       <div className="card-header bg-white border-bottom px-2 py-3 d-flex justify-content-between align-items-center">
//         <h5 className="mb-0 text-primary">
//           <i className="bi bi-person-plus-fill me-2"></i>Add New Trainer
//         </h5>
//         <span className="badge bg-secondary-subtle text-dark">HR Admin</span>
//       </div>

//       <div className="card-body px-4 py-5">
//         {message && (
//           <div className={`p-3 rounded text-sm mb-4 ${isSuccess ? 'bg-success-subtle text-success-emphasis' : 'bg-danger-subtle text-danger-emphasis'}`}>
//             {message}
//           </div>
//         )}
//         <form onSubmit={handleSubmit} className="row g-4">
//           {[
//             { label: 'Trainer ID', name: 'tmId', icon: 'person-badge-fill' },
//             { label: 'Full Name', name: 'name', icon: 'person-fill' },
//             { label: 'Email', name: 'email', icon: 'envelope-fill', type: 'email' },
//             { label: 'Phone Number', name: 'phoneNo', icon: 'telephone-fill', type: 'tel' },
//             { label: 'Gender', name: 'gender', icon: 'gender-ambiguous' },
//             { label: 'Experience (Years)', name: 'experience', icon: 'bar-chart-fill', type: 'number' },
//             { label: 'Mapped Trainer Type', name: 'mappedTrainerType', icon: 'person-check-fill' },
//           ].map(({ label, name, icon, type = 'text' }) => (
//             <div className="col-md-4" key={name}>
//               <label className="form-label" style={{ fontSize: '0.85rem' }}>{label}</label>
//               <div className="input-group">
//                 <span className="input-group-text"><i className={`bi bi-${icon}`}></i></span>
//                 <input
//                   type={type}
//                   name={name}
//                   className="form-control form-control-lg"
//                   value={form[name]}
//                   onChange={handleChange}
//                   placeholder={label}
//                   style={{ fontSize: '0.9rem' }}
//                   required={name !== 'password'}
//                 />
//               </div>
//             </div>
//           ))}

//           <div className="col-md-4">
//             <label className="form-label" style={{ fontSize: '0.85rem' }}>Role</label>
//             <input
//               type="text"
//               name="role"
//               className="form-control form-control-lg"
//               value={form.role}
//               disabled
//               style={{ fontSize: '0.9rem' }}
//             />
//           </div>

//           <div className="col-md-12">
//             <label className="form-label" style={{ fontSize: '0.85rem' }}>Skills</label>
//             <Select
//               isMulti
//               name="skills"
//               options={skillOptions}
//               className="basic-multi-select"
//               classNamePrefix="select"
//               onChange={handleSkillsChange}
//               value={skillOptions.filter(option => form.skills.includes(option.value))}
//               placeholder="Select skills"
//               styles={{ placeholder: base => ({ ...base, fontSize: '0.9rem' }) }}
//             />
//           </div>

//           <div className="col-12 mt-4">
//             <button
//               type="submit"
//               className="btn btn-success btn-ms w-100 shadow"
//               disabled={loading}
//             >
//               <i className="bi bi-person-plus-fill me-2"></i>Add Trainer
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddTrainer;

 
// import { useState } from 'react';
// import Select from 'react-select';
// import * as XLSX from 'xlsx';
// import 'bootstrap-icons/font/bootstrap-icons.css';

// const AddTrainer = () => {
  
//   const [form, setForm] = useState({
//     tmId: '',
//     name: '',
//     email: '',
//     phoneNo: '',
//     gender: 'Male',
//     experience: '',
//     mappedTrainerType: '',
//     role: 'Trainer',
//     skills: [],
//   });

//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');
//   const [isSuccess, setIsSuccess] = useState(false);




//   const handleFileUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
  
//     const reader = new FileReader();
//     reader.onload = async (evt) => {
//       const bstr = evt.target.result;
//       const wb = XLSX.read(bstr, { type: 'binary' });
//       const sheetName = wb.SheetNames[0];
//       const sheet = wb.Sheets[sheetName];
//       const data = XLSX.utils.sheet_to_json(sheet);
  
//       // You may transform column names here if they differ
//       const payload = data.map(row => ({
//         id: row.id,
//         name: row.name,
//         email: row.email,
//         phoneNumber: row.phoneNumber,
//         gender: row.gender,
//         experience: parseInt(row.experience, 10),
//         mappedType: row.mappedType,
//         role: row.role,
//         skills: row.skills ? row.skills.split(',').map(s => s.trim()) : []
//       }));
//       console.log(payload)
//       try {
//         const res = await fetch('http://localhost:8081/bulkAddTrainers', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(payload)
//         });
  
//         const result = await res.text();
//         console.log(result)
//         alert(result);
//       } catch (err) {
//         console.error('Bulk upload failed:', err);
//         alert('Failed to upload trainers');
//       }
//     };
//     reader.readAsBinaryString(file);
//   };





//   const skillOptions = [
//     { value: 'JavaScript', label: 'JavaScript' },
//     { value: 'React', label: 'React' },
//     { value: 'Node.js', label: 'Node.js' },
//     { value: 'Python', label: 'Python' },
//     { value: 'Java', label: 'Java' },
//   ];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSkillsChange = (selectedOptions) => {
//     setForm(prev => ({
//       ...prev,
//       skills: selectedOptions.map(option => option.value),
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const payload = {
//       id: form.tmId,
//       name: form.name,
//       email: form.email,
//       phoneNumber: form.phoneNo,
//       gender: form.gender,
//       experience: parseInt(form.experience, 10),
//       mappedType: form.mappedTrainerType,
//       role: form.role,
//       skills: form.skills,
//     };

//     try {
//       const response = await fetch('http://localhost:8081/addTrainer', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload),
//       });

//       const result = await response.text();
//       setMessage(`${result} to ${form.email}`);
//       setIsSuccess(true);
//       setForm({
//         tmId: '',
//         name: '',
//         email: '',
//         phoneNo: '',
//         gender: '',
//         experience: '',
//         mappedTrainerType: '',
//         role: 'Trainer',
//         skills: [],
//       });
//       alert('Trainer added successfully!');
//     } catch (error) {
//       console.error('Fetch error:', error);
//       setMessage(`Network error: ${error.message}`);
//       setIsSuccess(false);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="card border-0 shadow-lg rounded-4">
//       <div className="card-header bg-white border-bottom px-2 py-3 d-flex justify-content-between align-items-center">
//         <h5 className="mb-0 text-primary">
//           <i className="bi bi-person-plus-fill me-2"></i>Add New Trainer
//         </h5>
//         <span className="badge bg-secondary-subtle text-dark">HR Admin</span>
//       </div>
      

//       <div className="card-body px-4 py-5">
//         {message && (
//           <div className={`p-3 rounded text-sm mb-4 ${isSuccess ? 'bg-success-subtle text-success-emphasis' : 'bg-danger-subtle text-danger-emphasis'}`}>
//             {message}
//           </div>
//         )}

//         <div className="mb-4">
//           <input
//             type="file"
//             accept=".xlsx, .xls"
//             onChange={handleFileUpload}
//             className="form-control"
//           />
//         </div>

//         <form onSubmit={handleFileUpload} className="row g-4">
//           {[
//             { label: 'Trainer ID', name: 'tmId', icon: 'person-badge-fill' },
//             { label: 'Full Name', name: 'name', icon: 'person-fill' },
//             { label: 'Email', name: 'email', icon: 'envelope-fill', type: 'email' },
//             { label: 'Phone Number', name: 'phoneNo', icon: 'telephone-fill', type: 'tel' },
//             // { label: 'Gender', name: 'gender', icon: 'gender-ambiguous' },
//             { label: 'Experience (Years)', name: 'experience', icon: 'bar-chart-fill', type: 'number' },
//           ].map(({ label, name, icon, type = 'text' }) => (
//             <div className="col-md-4" key={name}>
//               <label className="form-label" style={{ fontSize: '0.85rem' }}>{label}</label>
//               <div className="input-group">
//                 <span className="input-group-text"><i className={`bi bi-${icon}`}></i></span>
//                 <input
//                   type={type}
//                   name={name}
//                   className={`form-control form-control-lg ${form[name].trim() === '' && (name === 'tmId' || name === 'email') ? 'is-invalid' : ''}`}
//                   value={form[name]}
//                   onChange={handleChange}
//                   placeholder={label}
//                   style={{ fontSize: '0.9rem' }}
//                   required
//                 />
//               </div>
//             </div>
//           ))}

//           {/* Gender Radio button */}
//           <div className="col-md-4">
//             <label className="form-label" style={{ fontSize: '0.85rem' }}>Gender</label>
//             <div className="d-flex align-items-center gap-4 ps-2">
//               <div className="form-check">
//                 <input
//                   className="form-check-input"
//                   type="radio"
//                   name="gender"
//                   id="genderMale"
//                   value="Male"
//                   checked={form.gender === 'Male'}
//                   onChange={handleChange}
//                   required
//                 />
//                 <label className="form-check-label" htmlFor="genderMale">
//                   Male
//                 </label>
//               </div>
//               <div className="form-check">
//                 <input
//                   className="form-check-input"
//                   type="radio"
//                   name="gender"
//                   id="genderFemale"
//                   value="Female"
//                   checked={form.gender === 'Female'}
//                   onChange={handleChange}
//                   required
//                 />
//                 <label className="form-check-label" htmlFor="genderFemale">
//                   Female
//                 </label>
//               </div>
//             </div>
//           </div>
//           {/* Mapped Trainer Type Dropdown */}
//           <div className="col-md-4">
//             <label className="form-label" style={{ fontSize: '0.85rem' }}>Mapped Trainer Type</label>
//             <div className="input-group">
//               <span className="input-group-text"><i className="bi bi-person-check-fill"></i></span>
//               <select
//                 name="mappedTrainerType"
//                 className="form-select form-select-lg"
//                 value={form.mappedTrainerType}
//                 onChange={handleChange}
//                 required
//                 style={{ fontSize: '0.9rem' }}
//               >
//                 <option value="">Select</option>
//                 <option value="Internal">Internal</option>
//                 <option value="External">External</option>
//               </select>
//             </div>
//           </div>

//           {/* Role Dropdown */}
//           <div className="col-md-4">
//             <label className="form-label" style={{ fontSize: '0.85rem' }}>Role</label>
//             <div className="input-group">
//               <span className="input-group-text"><i className="bi bi-award-fill"></i></span>
//               <select
//                 name="role"
//                 className="form-select form-select-lg"
//                 value={form.role}
//                 onChange={handleChange}
//                 required
//                 style={{ fontSize: '0.9rem' }}
//               >
//                 <option value="Trainer">Trainer</option>
//                 <option value="Mentor">Mentor</option>
//                 <option value="Buddy Mentor">Buddy Mentor</option>
//               </select>
//             </div>
//           </div>


//           {/* Skills */}
//           <div className="col-md-4">
//             <label className="form-label" style={{ fontSize: '0.85rem' }}>Skills</label>
//             <Select
//               isMulti
//               name="skills"
//               options={skillOptions}
//               className="basic-multi-select"
//               classNamePrefix="select"
//               onChange={handleSkillsChange}
//               value={skillOptions.filter(option => form.skills.includes(option.value))}
//               placeholder="Select skills"
//               styles={{ placeholder: base => ({ ...base, fontSize: '0.9rem' }) }}
//             />
//           </div>

//           <div className="col-12 mt-4 d-flex justify-content-center">
//             <button
//               type="submit"
//               className="btn btn-success btn-ms w-25 shadow"
//               disabled={loading}
//             >
//               <i className="bi bi-person-plus-fill me-2"></i>Add Trainer
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddTrainer;
 
import { useState } from 'react';
import Select from 'react-select';
import * as XLSX from 'xlsx';
import { utils, writeFile } from 'xlsx';
import AsyncSelect from 'react-select/async';


import 'bootstrap-icons/font/bootstrap-icons.css';

const AddTrainer = () => {
  const [form, setForm] = useState({
    tmId: '',
    name: '',
    email: '',
    phoneNo: '',
    gender: 'Male',
    experience: '',
    mappedTrainerType: '',
    role: 'Trainer',
    skills: [],
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [uploadMode, setUploadMode] = useState('single'); // 'single' or 'bulk'


const downloadSampleExcel = () => {
  const sampleData = [
    {
      id: 'T001',
      name: 'John Doe',
      email: 'john.doe@example.com',
      phoneNumber: '9876543210',
      gender: 'Male',
      experience: 5,
      mappedType: 'Internal',
      role: 'Trainer',
      skills: 'JavaScript,React'
    }
  ];

  const worksheet = utils.json_to_sheet(sampleData);
  const workbook = utils.book_new();
  utils.book_append_sheet(workbook, worksheet, 'Trainers');

  writeFile(workbook, 'Trainer_Sample_Format.xlsx');
};

  const handleFileUpload = async (e) => {
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
        id: row.id,
        name: row.name,
        email: row.email,
        phoneNumber: row.phoneNumber,
        gender: row.gender,
        experience: parseInt(row.experience, 10),
        mappedType: row.mappedType,
        role: row.role,
        skills: row.skills ? row.skills.split(',').map(s => s.trim()) : []
      }));
      console.log(payload);
      try {
        const res = await fetch('http://localhost:8081/bulkAddTrainers', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const result = await res.text();
        console.log(result);
        alert(result);
      } catch (err) {
        console.error('Bulk upload failed:', err);
        alert('Failed to upload trainers');
      }
    };
    reader.readAsBinaryString(file);
  };

  const skillOptions = [
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'React', label: 'React' },
    { value: 'Node.js', label: 'Node.js' },
    { value: 'Python', label: 'Python' },
    { value: 'Java', label: 'Java' },
  ];

  const allSkills = [
    ".Net", ".Net 6", ".Net advanced features", "ABAP", "Abinitio", "Accessibility", "ADO.Net", "Adobe Target", "ADT", "Advanced C", "AEM topics", "After Effects", "AgencyPort", "Agile basics", "Amazon Connect", "Amazon DynamoDB concepts", "Amazon Relational Database Service (RDS)", "Analytics", "Android Basics and Advanced", "Android Interface guidelines for Mobile (Material design)", "Angular", "Animate CC", "Ansible", "ANT/NANT", "API Automation Testing", "Apigee", "App Stores (Public/Enterprise)", "AppDynamics Fundamentals", "Appian", "Apple Human Interface guidelines for Mobile (Cupertino)", "Application debugging concepts", "Application fundamentals", "Application Monitor", "Apps DBA", "Architectural patterns", "Ariba", "ARM Template", "Articulate Storyline", "AS400", "ASP.Net", "ASP.Net MVC 5", "Audacity / Audition", "Audience Manager", "Automation and analytics tools", "Automation basics", "Automation testing - Selenium", "Automation Tool : UFT", "Averisource", "AVM", "AWS", "AWS and Azure", "AWS and Cloud Computing Fundamentals", "AWS Developer", "AWS Elasticity & Management Tools", "AWS Essentials, DPP Masterclass and IBM Guardium", "AWS Fundamentals & Developer Associate", "AWS Identity and Access Management (IAM)", "AWS PaaS Services- SNS, SQS, SES", "Axway API", "Azure", "Azure Administrator", "Azure Backup", "Azure basics", "Azure CLI", "Azure IAM basics", "Azure IOT", "Azure Pipelines", "Azure Queue Storage", "Azure Service Bus", "B2B", "Bash Shell Scripting", "BDD", "BI", "BigData", "Blob storage", "Blueprism and RPA", "BootStrap4", "BPM products", "Brightedge", "C", "C# 10", "C++", "C4C", "Callidus", "Camilion", "Camunda", "Captivate", "Certificate Manager", "CI/CD", "CICS", "Cisco ASA", "CLLE", "Cloud Basics", "Cloud Computing", "Cloud Fundamentals", "Cloud Identity", "CLP", "CMS", "COBOL", "Cognos", "Compliance management", "Compliance wire LMS", "Components (nuget packages)", "CompTIA Security", "Computer Networks", "Concur", "Confluence Fundamentals", "Container Orchestration", "Container Orchestration thru Azure", "Content Management System", "Content QA - Manual Testing", "Cosmos", "CPI", "Creating brand identity", "CRM", "Cryptography Fundamentals", "CSC - Exceed", "CSC - PMSC", "CSoD", "CSS3", "Cucumber", "Cyber Security", "Cyber security basics", "Cyber Threat Intelligence", "CyberLife", "D365", "Data Obscure & Vormetric", "Data storage", "Data Structures", "Database Fundamentals", "DataStage", "Datastructures and Algorithm", "DB2", "Deep Learning", "Define", "Design Mindset", "Design Patterns and Principles", "Design Principles (Accessibility, Multi Language Support, Themes, Security, Performance, locale)", "Design Systems", "Designing and Implementing Microsoft DevOps Solutions", "Device features", "devices", "DevOps", "Devops Basics", "Digital Analytics", "Digital Marketing and Siebel", "Digital Overview", "Digital Overview, Security", "Docker", "Domain", "Domain GEB", "Domain Life", "DRUPAL", "Duck Creek", "DW Basics", "DW fundamentals", "eBao Generalsystem", "eBao Lifesystem", "eBaoTech General System", "eBiz", "EDM", "eLearning Services Overview & Induction", "Eloqua", "Email Security", "Empathy", "Endpoint & Email Security", "Endpoint and EDR, SIEM/SOC", "Engineering concepts", "Enterprise Mobile Apps", "Entity Framework Core 6", "EPM", "ETL Concepts", "Exigen", "Exigen GEB", "Facets", "FAST", "Finance HCM", "FINEOS", "Firewall", "Firewalls", "FNZ", "Functional Testing", "Fundamental & Types of Storage", "Fundamentals Java Programming", "Fundamentals of Cloud Computing", "Fundamentals of Linux and Windows", "Fusion middleware", "Gamification", "Gateway", "GCP (Google Cloud Platform)", "GCP Console & Cloud Shell", "GCP Projects & Infrastructure", "GDPR and Privacy", "Genesys Cloud", "Genius", "GIS", "Git", "Glacier", "Google Ads", "Google Analytics - Web", "Google Campaign Manager 360", "Google Compute Engine", "Google Data Analytics and Data Studio", "Google Display & Video 360", "Google Tag Management", "GRC : Risk Management", "Group EB", "Guidewire", "Health Care Domain Training", "Hibernate", "HR", "HTML5", "Hybris", "IBM BPM", "IBM Sterling", "Ideate", "IDS/IPS", "IG HUON", "IIB", "IICS", "Illustrator", "Incident Detection and Investigation", "Informatica", "Informatica DQ", "Informatica MDM", "Informatica Powercenter", "Infra Database and Data Models", "Ingenium", "Ingenium Specifics", "Insbridge", "InsuranceNow", "Insurity", "Introduction of Web Architecture and Technologies", "Introduction to IDE tools - Notepad++", "Introduction to immersive Medias", "Introduction to ML & AI", "Introduction to Mobile platforms", "IO Topics", "Ionic Framework", "IOS Basics and Advanced", "IOT CS Topics", "ISPF", "iTello", "ITIL", "IVM : Certified Ethical Hacker", "IVM : DAST, Penetration Testing", "IVM : Malware Analysis", "IVM : Overview", "IVM : Threat Monitoring and Penetration Testing", "J2EE", "Java & PI", "Java 8, Java 11, Java 12, Java 17", "JavaScript", "JBPM", "JCL", "JDBC", "JDE Functional", "JDE Technical", "Jenkins", "Jira", "JPA", "jQuery", "JSP", "JUnit", "KMS", "Kong", "Kronos work force management", "Kubernetes", "Lambda and API Gateway", "Laws of Design", "Life Claims", "Life Compensation", "Life New Business", "Life of a Graphic Designer", "Life of a Programmer", "Life of an Instructional Designer", "Lifecad", "LifeEngage", "Linux", "Linux Basics and Shell Script basics", "Linux Server Administration", "LMS", "Load Balancer", "Logging and Continuous Code Quality", "Magento", "Marketing Collaterals", "Marketo", "Maven", "Mean Stack", "Mern Stack", "Messaging & Collaboration", "Microservices", "Microservices with Spring CLoud", "Microsoft Azure", "Microsoft Azure Fundamentals", "Middleware Technologies", "MongoDB", "MQ", "MS AX", "MSCRM", "Mulesoft", "Multifactor Authentication (MFA)", "MySQL", "Netsuite Functional", "Netsuite Technical", "Network Essentials", "Networking Concepts and Protocols", "Networking Essentials ", "Node JS", "NUnit", "OBIEE", "ODI", "OIPA", "OMNI", "On Job Training- eDetailing & Web", "On the job training", "OneShield", "OpenText", "Oracle Cloud", "Oracle Digital technologies", "Oracle Fundamentals", "Oracle Integration", "Oracle PLSQL", "Oracle Python", "Oracle SQL", "OSP Peoplesoft", "PAM overview, Cyber Ark deep dive", "PE Topics", "Pega", "Performance Engineer", "Performance testing", "Photoshop", "PHP", "PI/PO", "PKI & Data discovery", "PLSQL", "POSTMAN", "PowerBI", "PowerShell", "Presentation", "Privileged Access Management", "ProductXpress", "Programmatic - DV360", "Programmatic / Display Marketing", "Prototype/Testing", "Proxy", "Python 3", "Python, Shell Scripting", "QlikSense", "QlikView", "QlikView and Autosys", "Ratabase", "React", "React JS", "React Native", "Reltio", "Reporting Concepts", "Responsive Web Design", "REST WS", "RestAPI", "RPG", "RPGLE", "RSA Archer : Audit Management", "RSA Archer : Field Types, Functionalities, DDE Services", "RSA Archer : Notifications and Schedules", "RSA Archer : Overview, Integrated Risk Management", "RSA Archer : Tools and Application Builder, Field Types", "Sailpoint/OKTA", "Salesforce", "SAP ABAB", "SAP ABAP", "SAP Analytics", "SAP Basis & Security", "SAP BO", "SAP BODS", "SAP BOIS", "SAP BW", "SAP BW on HANA", "SAP Fiori", "SAP Fundamentals", "SAP MDM", "SAP S/4HANA", "SAP TOSCA", "SAP UI5", "SAP WORKSOFT", "SAST", "SCM", "SDLC", "Security Testing", "Selenium", "Selenium Automation", "Selenium Frameworks, UFT Frameworks", "SEM", "SEMRush", "Sengage Cloud", "SEO", "Serverless logic", "Service Management", "Service Now", "Servlets", "SharePoint", "Shell Scripting", "Siebel", "SiteCore", "Sketches and Perspective Design", "SMM", "SOAP WS", "Software Engineering", "Software Support and Maintenance", "SoftwareAG", "SPA (Angular or React or Vue App) with Spring Boot", "Spark", "Splunk", "Spring", "Spring Core", "Spring Data JPA", "Spring MVC using Spring Boot", "Spring Rest", "Spring REST using Spring Boot 3", "SQL Server", "SQLRPGLE", "SSAS", "SSIS", "SSL/TLS Fundamentals", "SSRS", "Stibo", "Storage & Backup Fundamentals", "Storage - S3", "SuccessFactor", "Sumtotal", "SW Engineering", "Symphony framework", "Tableau", "Talend", "Teamcenter", "Technical Writing and Instructional Design", "Temenos", "Teradata", "Testing", "Theory of colors and understanding Folder structure", "TIBCO", "TSO", "Types of Storage", "Typescript", "UI & Scripting Technology", "UI Technology", "UI- SPA", "Unit testing", "Unix", "Unix and Shell Scripting", "Unix(Advanced)", "Unqork", "Unqork L&A", "Unqork Retirement", "UX-Design and tools", "V3", "Vantage", "Vantage GEB", "Varicent", "VBScript", "Versata", "Vertafore", "Virtualization/Hypervisor Fundamentals", "Visualization", "VPAS", "VSAM", "WAF", "Web API", "WebAPI Microservices", "Webservices", "Webstandards", "Windows Server 2016", "Windows Server Administration", "wmA", "Xamarin Introduction", "Xamarin.Android", "Xamarin.iOS", "XAML", "XML", "XSLT", "Zend framework"
  ];

  const filterSkills = (inputValue) => {
    return allSkills
      .filter(skill => skill.toLowerCase().includes(inputValue.toLowerCase()))
      .map(skill => ({ label: skill, value: skill }));
  };
  
  const loadSkillOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterSkills(inputValue));
    }, 300);
  };
  
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSkillsChange = (selectedOptions) => {
    setForm(prev => ({
      ...prev,
      skills: selectedOptions.map(option => option.value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      id: form.tmId,
      name: form.name,
      email: form.email,
      phoneNumber: form.phoneNo,
      gender: form.gender,
      experience: parseInt(form.experience, 10),
      mappedType: form.mappedTrainerType,
      role: form.role,
      skills: form.skills,
    };

    try {
      const response = await fetch('http://localhost:8081/addTrainer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.text();
      setMessage(`${result} to ${form.email}`);
      setIsSuccess(true);
      setForm({
        tmId: '',
        name: '',
        email: '',
        phoneNo: '',
        gender: 'Male', // Reset to default
        experience: '',
        mappedTrainerType: '',
        role: 'Trainer', // Reset to default
        skills: [],
      });
      alert('Trainer added successfully!');
    } catch (error) {
      console.error('Fetch error:', error);
      setMessage(`Network error: ${error.message}`);
      setIsSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card border-0 shadow-lg rounded-4">
      <div className="card-header bg-white border-bottom px-2 py-3 d-flex justify-content-between align-items-center">
        <h5 className="mb-0 text-primary">
          <i className="bi bi-person-plus-fill me-2"></i>Add New Trainer
        </h5>
        <span className="badge bg-secondary-subtle text-dark">HR Admin</span>
      </div>

      <div className="card-body px-4 py-5">
        {message && (
          <div className={`p-3 rounded text-sm mb-4 ${isSuccess ? 'bg-success-subtle text-success-emphasis' : 'bg-danger-subtle text-danger-emphasis'}`}>
            {message}
          </div>
        )}

        <div className="d-flex justify-content-center mb-4 gap-3">
          <button
            className={`btn ${uploadMode === 'single' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setUploadMode('single')}
          >
            <i className="bi bi-person-fill me-2"></i>Single Trainer Upload
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
              onChange={handleFileUpload}
              className="form-control"
            />
            
          </div>
          
        )}

        {uploadMode === 'single' && (
          <form onSubmit={handleSubmit} className="row g-4">
            {[
              { label: 'Trainer ID', name: 'tmId', icon: 'person-badge-fill' },
              { label: 'Full Name', name: 'name', icon: 'person-fill' },
              { label: 'Email', name: 'email', icon: 'envelope-fill', type: 'email' },
              { label: 'Phone Number', name: 'phoneNo', icon: 'telephone-fill', type: 'tel' },
              { label: 'Experience (Years)', name: 'experience', icon: 'bar-chart-fill', type: 'number' },
            ].map(({ label, name, icon, type = 'text' }) => (
              <div className="col-md-4" key={name}>
                <label className="form-label" style={{ fontSize: '0.85rem' }}>{label}</label>
                <div className="input-group">
                  <span className="input-group-text"><i className={`bi bi-${icon}`}></i></span>
                  <input
                    type={type}
                    name={name}
                    className={`form-control form-control-lg ${form[name].trim() === '' && (name === 'tmId' || name === 'email') ? 'is-invalid' : ''}`}
                    value={form[name]}
                    onChange={handleChange}
                    placeholder={label}
                    style={{ fontSize: '0.9rem' }}
                    required
                  />
                </div>
              </div>
            ))}

            {/* Gender Radio button */}
            <div className="col-md-4">
              <label className="form-label" style={{ fontSize: '0.85rem' }}>Gender</label>
              <div className="d-flex align-items-center gap-4 ps-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="genderMale"
                    value="Male"
                    checked={form.gender === 'Male'}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="genderMale">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="genderFemale"
                    value="Female"
                    checked={form.gender === 'Female'}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="genderFemale">
                    Female
                  </label>
                </div>
              </div>
            </div>
            {/* Mapped Trainer Type Dropdown */}
            <div className="col-md-4">
              <label className="form-label" style={{ fontSize: '0.85rem' }}>Mapped Trainer Type</label>
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-person-check-fill"></i></span>
                <select
                  name="mappedTrainerType"
                  className="form-select form-select-lg"
                  value={form.mappedTrainerType}
                  onChange={handleChange}
                  required
                  style={{ fontSize: '0.9rem' }}
                >
                  <option value="">Select</option>
                  <option value="Internal">Internal</option>
                  <option value="External">External</option>
                </select>
              </div>
            </div>

              <div className="col-md-4">
              <label className="form-label" style={{ fontSize: '0.85rem' }}>Skills</label>
              <AsyncSelect
                isMulti
                cacheOptions
                // defaultOptions
                loadOptions={loadSkillOptions}
                onChange={handleSkillsChange}
                value={form.skills.map(s => ({ label: s, value: s }))}
                placeholder="Type to search skills"
                styles={{ placeholder: base => ({ ...base, fontSize: '0.9rem' }) }}
              />
              </div>


            {/* Role Dropdown */}
            <div className="col-md-4">
              <label className="form-label" style={{ fontSize: '0.85rem' }}>Role</label>
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-award-fill"></i></span>
                <select
                  name="role"
                  className="form-select form-select-lg"
                  value={form.role}
                  onChange={handleChange}
                  required
                  style={{ fontSize: '0.9rem' }}
                >
                  <option value="Trainer">Trainer</option>
                  <option value="Mentor">Mentor</option>
                  <option value="Buddy Mentor">Buddy Mentor</option>
                </select>
              </div>
            </div>

            {/* Skills
            <div className="col-md-4">
              <label className="form-label" style={{ fontSize: '0.85rem' }}>Skills</label>
              <Select
                isMulti
                name="skills"
                options={skillOptions}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={handleSkillsChange}
                value={skillOptions.filter(option => form.skills.includes(option.value))}
                placeholder="Select skills"
                styles={{ placeholder: base => ({ ...base, fontSize: '0.9rem' }) }}
              />
            </div> */}

            

            <div className="col-12 mt-4 d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-success btn-ms w-25 shadow"
                disabled={loading}
              >
                <i className="bi bi-person-plus-fill me-2"></i>Add Trainer
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AddTrainer;