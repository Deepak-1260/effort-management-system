import { useState } from 'react';

const Signup = () => {
  const [form, setForm] = useState({
    hrId: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // New state to manage password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const cognizantBlue = '#0073B9';
  const cognizantLightBlue = '#EAF4FA';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = (field) => {
    if (field === 'password') {
      setShowPassword(prev => !prev);
    } else if (field === 'confirmPassword') {
      setShowConfirmPassword(prev => !prev);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!strongPasswordRegex.test(form.password)) {
      alert('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.');
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    const payload = {
      username: form.hrId,
      email: form.email,
      password: form.password,
      role: 'HR'
    };

    fetch("http://52.88.246.113:8082/registerHR", {
    // fetch("http://localhost:8082/registerHR", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then(res => res.text())
      .then(data => {
        console.log(data);
        if (data === "HR Registerd successfully") {
          alert('HR Signup successful');  
          setForm({
              hrId: '',
              email: '',
              password: '',
              confirmPassword: '',
              }); 
        } else {
          alert(`HR Signup Failed: ${data}`);
        }
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: cognizantLightBlue }}>
      <div
        className="card shadow p-4"
        style={{
          minWidth: 450,
          maxWidth: 550,
          margin: '30px',
          padding: '40px',
          border: '1px solid #ccc',
          borderRadius: '10px'
        }}
      >
        <h4 className="text-center mb-4" style={{ color: cognizantBlue, fontSize: '1.8rem' }}>HR Signup</h4>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" style={{ fontSize: '1rem' }}>HR ID</label>
            <input
              type="text"
              className="form-control form-control-lg"
              name="hrId"
              value={form.hrId}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label" style={{ fontSize: '1rem' }}>Email</label>
            <input
              type="email"
              className="form-control form-control-lg"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password Input with Toggle */}
          <div className="mb-3">
            <label className="form-label" style={{ fontSize: '1rem' }}>Password</label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control form-control-lg"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => togglePasswordVisibility('password')}
                style={{ borderColor: '#ccc' }}
              >
                <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
              </button>
            </div>
          </div>

          {/* Confirm Password Input with Toggle */}
          <div className="mb-3">
            <label className="form-label" style={{ fontSize: '1rem' }}>Confirm Password</label>
            <div className="input-group">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="form-control form-control-lg"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => togglePasswordVisibility('confirmPassword')}
                style={{ borderColor: '#ccc' }}
              >
                <i className={`bi ${showConfirmPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
              </button>
            </div>
          </div>

          <button type="submit" className="w-100 btn btn-lg" style={{ backgroundColor: cognizantBlue, borderColor: cognizantBlue, color: 'white', fontSize: '1.1rem' }}>
            Create HR Account
          </button>
        </form>

        <div className="text-center mt-3">
          <small style={{ fontSize: '0.95rem' }}>
            Already have an account? <a href="/" className="text-decoration-none" style={{ color: cognizantBlue }}>Sign In</a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Signup;
