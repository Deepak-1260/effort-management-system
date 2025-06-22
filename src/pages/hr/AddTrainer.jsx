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

 
import { useState } from 'react';
import Select from 'react-select';
import 'bootstrap-icons/font/bootstrap-icons.css';

const AddTrainer = () => {
  const [form, setForm] = useState({
    tmId: '',
    name: '',
    email: '',
    phoneNo: '',
    gender: '',
    experience: '',
    mappedTrainerType: '',
    role: 'Trainer',
    skills: [],
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const skillOptions = [
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'React', label: 'React' },
    { value: 'Node.js', label: 'Node.js' },
    { value: 'Python', label: 'Python' },
    { value: 'Java', label: 'Java' },
  ];

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
        gender: '',
        experience: '',
        mappedTrainerType: '',
        role: 'Trainer',
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
        <form onSubmit={handleSubmit} className="row g-4">
          {[
            { label: 'Trainer ID', name: 'tmId', icon: 'person-badge-fill' },
            { label: 'Full Name', name: 'name', icon: 'person-fill' },
            { label: 'Email', name: 'email', icon: 'envelope-fill', type: 'email' },
            { label: 'Phone Number', name: 'phoneNo', icon: 'telephone-fill', type: 'tel' },
            // { label: 'Gender', name: 'gender', icon: 'gender-ambiguous' },
            { label: 'Experience (Years)', name: 'experience', icon: 'bar-chart-fill', type: 'number' },
          ].map(({ label, name, icon, type = 'text' }) => (
            <div className="col-md-4" key={name}>
              <label className="form-label" style={{ fontSize: '0.85rem' }}>{label}</label>
              <div className="input-group">
                <span className="input-group-text"><i className={`bi bi-${icon}`}></i></span>
                <input
                  type={type}
                  name={name}
                  className="form-control form-control-lg"
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


          {/* Skills */}
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
          </div>

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
      </div>
    </div>
  );
};

export default AddTrainer;
 