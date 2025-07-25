
import { useContext, useEffect, useState } from 'react';
import { Usercontext } from '../../App';
import 'bootstrap-icons/font/bootstrap-icons.css';

const LogEffort = () => {
  const { user } = useContext(Usercontext);
  const [validated, setValidated] = useState(false);
  const [cohortOptions, setCohortOptions] = useState([]);

  const [form, setForm] = useState({
    tmId: user || '',
    cohortCode: '',
    mode: 'Offline',
    reason: '',
    hours: '',
    date: '',
    topic: '',
    highlights: '',
  });

  useEffect(() => {
    const fetchCohorts = async () => {
      if (form.tmId) {
        try {
          const res = await fetch(`http://52.43.62.125:8081/getAllocatedCohorts/${form.tmId}`);
          if (res.ok) {
            const data = await res.json();
            setCohortOptions(data); // Expecting a string array
          } else {
            setCohortOptions([]);
          }
        } catch (err) {
          console.error('Error fetching cohorts:', err);
          setCohortOptions([]);
        }
      }
    };
  
    fetchCohorts();
  }, [form.tmId]);
  

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const requestBody = {
    info: {
      iD: form.tmId,
      cohortCode: form.cohortCode,
      date: form.date,
    },
    mode: form.mode,
    reason: form.reason,
    effortHours: form.hours,
    topic: form.topic,
    highlights: form.highlights,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    if (!formElement.checkValidity()) {
      setValidated(true);
      return;
    }

    try {
      const res = await fetch('http://52.43.62.125:8085/effortupdate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
      const data = await res.text();
      alert(data);
      setForm({
        tmId: user || '',
        cohortCode: '',
        mode: 'Physical',
        reason: '',
        hours: '',
        date: '',
        topic: '',
        highlights: '',
      });
      setValidated(false);
    } catch (err) {
      console.error('Submission error:', err);
      alert('Failed to log effort.');
    }
  };

  return (
    <div className="card border-0 shadow-lg rounded-4" style={{ maxWidth: '850px', margin: '0 auto' }}>
      <div className="card-header bg-white border-bottom px-4 py-3 d-flex justify-content-between align-items-center">
        <h5 className="mb-0 text-primary" style={{ fontSize: '1.4rem' }}>
          <i className="bi bi-pencil-square me-2"></i>Log Effort
        </h5>
        <span className="badge bg-secondary-subtle text-dark">Trainer Effort</span>
      </div>

      <div className="card-body px-5 py-5">
        <form
          onSubmit={handleSubmit}
          className={`row g-4 needs-validation ${validated ? 'was-validated' : ''}`}
          noValidate
        >

          {[
            { name: 'tmId', label: 'Trainer ID', icon: 'person-badge-fill', readOnly: true, required: false },
            { name: 'cohortCode', label: 'Cohort Code', icon: 'people-fill', type: 'select' },
            { name: 'hours', label: 'Effort Hours', icon: 'clock-fill', type: 'number' },
            { name: 'date', label: 'Date', icon: 'calendar-date-fill', type: 'date' }
          ].map(({ name, label, icon, type = 'text', readOnly = false, required = true }) => (
            <div className="col-md-6" key={name}>
              <label className="form-label" style={{ fontSize: '0.85rem' }}>
                {label} {required && <span className="text-danger">*</span>}
              </label>
              <div className="input-group has-validation">
                <span className="input-group-text"><i className={`bi bi-${icon}`}></i></span>
                {name === 'cohortCode' ? (
                  <select
                    name={name}
                    className="form-select form-select-lg"
                    value={form[name]}
                    onChange={handleChange}
                    required
                    style={{ fontSize: '0.9rem' }}
                  >
                    <option value="">Select Cohort</option>
                    {cohortOptions.map(code => (
                      <option key={code} value={code}>{code}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={type}
                    name={name}
                    className="form-control form-control-lg"
                    value={form[name]}
                    onChange={handleChange}
                    readOnly={readOnly}
                    required={required}
                    style={{
                      fontSize: '0.9rem',
                      backgroundColor: name === 'tmId' ? '#e9ecef' : undefined,
                      color: name === 'tmId' ? '#6c757d' : undefined,
                      cursor: name === 'tmId' ? 'not-allowed' : undefined
                    }}
                  />
                )}
                {required && name !== 'tmId' && (
                  <div className="invalid-feedback">{label} is required.</div>
                )}
              </div>
            </div>
          ))}

          

          <div className="col-md-6">
            <label className="form-label" style={{ fontSize: '0.85rem' }}>Mode <span className="text-danger">*</span></label>
            <div className="input-group has-validation">
              <span className="input-group-text"><i className="bi bi-laptop-fill"></i></span>
              <select
                name="mode"
                className="form-select form-select-lg"
                value={form.mode}
                onChange={handleChange}
                required
                style={{ fontSize: '0.9rem' }}
              >
                <option value="Offline">Offline</option>
                <option value="Online">Online</option>
              </select>
              <div className="invalid-feedback">Mode is required.</div>
            </div>
          </div>

                  <div className="col-md-6">
          <label className="form-label" style={{ fontSize: '0.85rem' }}>
            Reason {form.mode === 'Online' && <span className="text-danger">*</span>}
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text"><i className="bi bi-chat-dots-fill"></i></span>
            <select
              name="reason"
              className="form-select form-select-lg"
              value={form.reason}
              onChange={handleChange}
              required={form.mode === 'Online'}
              disabled={form.mode !== 'Online' && true}
              style={{ fontSize: '0.9rem' }}
            >
              {form.mode === 'Online' ? (
                <>
                  <option value="">Select Reason</option>
                  <option value="Forgot / misplaced access card">Forgot / misplaced access card</option>
                  <option value="Working from home">Working from home</option>
                  <option value="Training in external location">Training in external location</option>
                  <option value="Corporate event / team outing">Corporate event / team outing</option>
                  <option value="Working from client location">Working from client location</option>
                </>
              ) : (
                <option value="NA">N/A</option>
              )}
            </select>
            {form.mode === 'Online' && (
              <div className="invalid-feedback">Reason is required for Virtual mode.</div>
            )}
          </div>
        </div>



          <div className="col-12">
            <label className="form-label" style={{ fontSize: '0.85rem' }}>Topic <span className="text-danger">*</span></label>
            <div className="input-group has-validation">
              <span className="input-group-text"><i className="bi bi-journal-text"></i></span>
              <input
                type="text"
                name="topic"
                className="form-control form-control-lg"
                value={form.topic}
                onChange={handleChange}
                required
                placeholder="e.g. Introduction to React Hooks"
                style={{ fontSize: '0.9rem' }}
              />
              <div className="invalid-feedback">Topic is required.</div>
            </div>
          </div>

          <div className="col-12">
            <label className="form-label" style={{ fontSize: '0.85rem' }}>Highlights <span className="text-danger">*</span></label>
            <div className="input-group has-validation">
              <span className="input-group-text align-items-start pt-3 pb-5"><i className="bi bi-lightbulb-fill"></i></span>
              <textarea
                name="highlights"
                className="form-control form-control-lg"
                rows="3"
                value={form.highlights}
                onChange={handleChange}
                required
                placeholder="Key takeaways, achievements, or challenges..."
                style={{ fontSize: '0.9rem' }}
              />
              <div className="invalid-feedback">Highlights are required.</div>
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
