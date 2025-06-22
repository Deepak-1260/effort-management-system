// import { useContext, useEffect, useState } from 'react'
// import { Usercontext } from '../../App'

// const LogEffort = () => {
  // const {user} = useContext(Usercontext);
  // const [form, setForm] = useState({
  //   tmId: user || '', // Should come from session/auth in real app
  //   cohortCode: '',
  //   mode:'Physical',
  //   reason: '',
  //   hours: '',
  //   date: '',
  //   topic: '',
  //   highlights: '',
  // })

  




  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   setForm(prev => ({ ...prev, [name]: value }))
  // }


  // const requestBody = {
  //   info: {
  //     iD: form.tmId,  // Ensure correct casing if needed in backend
  //     cohortCode: form.cohortCode,
  //     date: form.date
  //   },
  //   mode: form.mode, 
  //   reason: form.reason,
  //   effortHours: form.hours,
  //   topic: form.topic,
  //   highlights: form.highlights
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(form)

  //   fetch("http://localhost:8085/effortupdate",{
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(requestBody),
  //   })
  //   .then(res=>res.text())
  //   .then(data=>{
  //     console.log(data);
  //     alert(data)
  //   })

    
  // }

//   return (
//     <div className="container">
//       <h4 className="mb-4 text-primary">Log Effort</h4>

//       <form onSubmit={handleSubmit} className="row g-3">

//         <div className="col-md-4">
//           <label className="form-label">Trainer ID</label>
//           <input
//             type="text"
//             name="tmId"
//             className="form-control"
//             value={form.tmId}
//             readOnly
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

//         <div className="col-md-4">
//           <label className="form-label">Mode</label>
//           <select
//             name="mode"
//             className="form-select"
//             value={form.mode}
//             onChange={handleChange}
//             required
//           >
//             <option>Physical</option>
//             <option>Virtual</option>
//           </select>
//         </div>

        
//         <div className="col-md-6">
//           <label className="form-label">Reason</label>
//           <input
//             type="text"
//             name="reason"
//             className="form-control"
//             value={form.mode == "Virtual" ? form.reason : "NA"} // Display "NA" for Offline mode
//             onChange={handleChange}
//             required
//             disabled={form.mode !== "Virtual"} // Disable input when mode is not Virtual
//           />
//         </div>


//         <div className="col-md-6">
//           <label className="form-label">Effort Hours</label>
//           <input
//             type="number"
//             name="hours"
//             className="form-control"
//             value={form.hours}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="col-md-4">
//           <label className="form-label">Date</label>
//           <input
//             type="date"
//             name="date"
//             className="form-control"
//             value={form.date}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="col-md-8">
//           <label className="form-label">Topic</label>
//           <input
//             type="text"
//             name="topic"
//             className="form-control"
//             value={form.topic}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="col-12">
//           <label className="form-label">Highlights</label>
//           <textarea
//             name="highlights"
//             className="form-control"
//             rows="3"
//             value={form.highlights}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="col-12">
//           <button type="submit" className="btn btn-success">
//             Submit Effort
//           </button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default LogEffort

import { useContext, useState } from 'react';
import { Usercontext } from '../../App';
import 'bootstrap-icons/font/bootstrap-icons.css';

const LogEffort = () => {
  const {user} = useContext(Usercontext);
  const [form, setForm] = useState({
    tmId: user || '', // Should come from session/auth in real app
    cohortCode: '',
    mode:'Physical',
    reason: '',
    hours: '',
    date: '',
    topic: '',
    highlights: '',
  })

  




  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }


  const requestBody = {
    info: {
      iD: form.tmId,  // Ensure correct casing if needed in backend
      cohortCode: form.cohortCode,
      date: form.date
    },
    mode: form.mode, 
    reason: form.reason,
    effortHours: form.hours,
    topic: form.topic,
    highlights: form.highlights
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)

    fetch("http://localhost:8085/effortupdate",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
    .then(res=>res.text())
    .then(data=>{
      console.log(data);
      alert(data)
    })

    
  }

  return (
    <div className="card border-0 shadow-lg rounded-4" style={{ maxWidth: '850px', margin: '0 auto' }}>
      <div className="card-header bg-white border-bottom px-4 py-3 d-flex justify-content-between align-items-center">
        <h5 className="mb-0 text-primary" style={{ fontSize: '1.4rem' }}>
          <i className="bi bi-pencil-square me-2"></i>Log Effort
        </h5>
        <span className="badge bg-secondary-subtle text-dark">Trainer Effort</span>
      </div>

      <div className="card-body px-5 py-5">
        <form onSubmit={handleSubmit} className="row g-4">
          {[
            { name: 'tmId', label: 'Trainer ID', icon: 'person-badge-fill', readOnly: true, value: form.tmId, placeholder: '', col: 6 },
            { name: 'cohortCode', label: 'Cohort Code', icon: 'people-fill', value: form.cohortCode, placeholder: 'e.g. COHORT-XYZ', col: 6 },
            { name: 'hours', label: 'Effort Hours', icon: 'clock-fill', type: 'number', value: form.hours, placeholder: 'e.g. 8', col: 6 },
            { name: 'date', label: 'Date', icon: 'calendar-date-fill', type: 'date', value: form.date, placeholder: '', col: 6 },
          ].map(({ name, label, icon, type = 'text', readOnly, value, placeholder, col = 6 }) => (
            <div className={`col-md-${col}`} key={name}>
              <label className="form-label" style={{ fontSize: '0.85rem' }}>{label} <span className="text-danger">*</span></label>
              <div className="input-group">
                <span className="input-group-text"><i className={`bi bi-${icon}`}></i></span>
                <input
                  type={type}
                  name={name}
                  className="form-control form-control-lg"
                  value={value}
                  onChange={handleChange}
                  readOnly={readOnly}
                  required
                  style={{ fontSize: '0.9rem' }}
                  placeholder={placeholder}
                />
              </div>
            </div>
          ))}

          <div className="col-md-6">
            <label className="form-label" style={{ fontSize: '0.85rem' }}>Mode <span className="text-danger">*</span></label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-laptop-fill"></i></span>
              <select
                name="mode"
                className="form-select form-select-lg"
                value={form.mode}
                onChange={handleChange}
                required
                style={{ fontSize: '0.9rem' }}
              >
                <option value="Physical">Physical</option>
                <option value="Virtual">Virtual</option>
              </select>
            </div>
          </div>

          <div className="col-md-6">
            <label className="form-label" style={{ fontSize: '0.85rem' }}>Reason <span className="text-danger">*</span></label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-chat-dots-fill"></i></span>
              <input
                type="text"
                name="reason"
                className="form-control form-control-lg"
                value={form.mode === "Virtual" ? form.reason : "N/A"}
                onChange={handleChange}
                required={form.mode === "Virtual"}
                disabled={form.mode !== "Virtual"}
                style={{ fontSize: '0.9rem' }}
                placeholder={form.mode === "Virtual" ? "e.g. Technical issue" : "N/A"}
              />
            </div>
          </div>

          <div className="col-12">
            <label className="form-label" style={{ fontSize: '0.85rem' }}>Topic <span className="text-danger">*</span></label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-journal-text"></i></span>
              <input
                type="text"
                name="topic"
                className="form-control form-control-lg"
                value={form.topic}
                onChange={handleChange}
                required
                style={{ fontSize: '0.9rem' }}
                placeholder="e.g. Introduction to React Hooks"
              />
            </div>
          </div>

          <div className="col-12">
            <label className="form-label" style={{ fontSize: '0.85rem' }}>Highlights <span className="text-danger">*</span></label>
            <div className="input-group">
              <span className="input-group-text align-items-start pt-3 pb-5"><i className="bi bi-lightbulb-fill"></i></span>
              <textarea
                name="highlights"
                className="form-control form-control-lg"
                rows="3"
                value={form.highlights}
                onChange={handleChange}
                required
                style={{ fontSize: '0.9rem' }}
                placeholder="Key takeaways, achievements, or challenges..."
              />
            </div>
          </div>

          <div className="col-12 text-center mt-4 d-flex justify-content-center">
            <button type="submit" className="btn btn-success btn-lg w-25 shadow">
              <i className="bi bi-check-circle-fill me-2"></i>Submit Effort
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogEffort;

