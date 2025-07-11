



import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Usercontext } from '../App';
import ResetPassword from './trainer/ResetPassword';

const Login = () => {
  const { user, setUser } = useContext(Usercontext);
  const [role, setRole] = useState('HR');
  const [username, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const cognizantBlue = '#0073B9';
  const cognizantLightBlue = '#EAF4FA';

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    const reqbody = { username, password, role };

    try {
      const response = await fetch('http://52.43.62.125:8082/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reqbody),
      });

      if (response.status === 401) {
        alert("Unauthorized: Incorrect credentials!");
        navigate("/");
        return;
      }

      const data = await response.text();
      if (data === "Failed") {
        alert("Incorrect Credentials");
      } else {
        setUser(username);
        navigate(role === 'HR' ? '/hr/dashboard' : '/trainer/dashboard');
      }
    } catch (err) {
      setError(err.message);
    }
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
        <h4 className="text-center mb-4" style={{ color: cognizantBlue, fontSize: '1.8rem' }}>Sign In</h4>

        <form onSubmit={handleLogin}>
          {error && <div className="alert alert-danger py-2 px-3" role="alert" style={{ fontSize: '0.95rem' }}>{error}</div>}

          <div className="mb-3">
            <label className="form-label" style={{ fontSize: '1rem' }}>Role</label>
            <select className="form-select form-select-lg" value={role} onChange={e => setRole(e.target.value)}>
              <option>HR</option>
              <option>Trainer</option>
              <option>Mentor</option>
              <option>Buddy Mentor</option>
              
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label" style={{ fontSize: '1rem' }}>ID</label>
            <input
              type="text"
              className="form-control form-control-lg"
              value={username}
              onChange={e => setId(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label" style={{ fontSize: '1rem' }}>Password</label>
            <input
              type="password"
              className="form-control form-control-lg"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="remember" />
              <label className="form-check-label" htmlFor="remember" style={{ fontSize: '0.95rem' }}>
                Remember Me
              </label>
            </div>
            <a href="/forgotpassword" className="text-decoration-none" style={{ color: cognizantBlue, fontSize: '0.95rem' }}>
              Forgot Password?
            </a>
          </div>

          <button className="w-100 btn btn-lg" type="submit" style={{ backgroundColor: cognizantBlue, borderColor: cognizantBlue, color: 'white', fontSize: '1.1rem' }}>
            Sign In
          </button>
        </form>

        {role === 'HR' && (
          <div className="text-center mt-3">
            <small style={{ fontSize: '0.95rem' }}>
              Don't have an account? <a href="/signup" className="text-decoration-none" style={{ color: cognizantBlue }}>Sign Up</a>
            </small>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
