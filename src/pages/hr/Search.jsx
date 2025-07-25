// import { useState } from 'react';
// import Select from 'react-select';
 
// const Search = () => {
//   const [filters, setFilters] = useState({
//     name: '',
//     minExp: '',
//     maxExp: '',
//     skills: [],
//     role: '',
//     mappedType: '',
//     gender: '',
//   });
 
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);
 
//   const skillOptions = [
//     { value: 'JavaScript', label: 'JavaScript' },
//     { value: 'React', label: 'React' },
//     { value: 'Node.js', label: 'Node.js' },
//     { value: 'Python', label: 'Python' },
//     { value: 'Java', label: 'Java' },
//   ];
 
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFilters((prev) => ({ ...prev, [name]: value }));
//   };
 
//   const handleSkillsChange = (selectedOptions) => {
//     setFilters((prev) => ({
//       ...prev,
//       skills: selectedOptions.map((option) => option.value),
//     }));
//   };
 
//   const handleSearch = async (e) => {
//     e.preventDefault();
//     setLoading(true);
 
//     try {
//       const params = new URLSearchParams();
 
//       Object.entries(filters).forEach(([key, value]) => {
//         if (Array.isArray(value)) {
//           value.forEach((v) => params.append(key, v)); // for skills array
//         } else if (value !== '') {
//           params.append(key, value);
//         }
//       });
 
//       const response = await fetch(`http://localhost:8081/search?${params.toString()}`);
 
//       if (!response.ok) {
//         throw new Error('Failed to fetch trainers');
//       }
 
//       const data = await response.json();
//       setResults(data);
//     } catch (error) {
//       console.error('Search error:', error);
//       alert('Error fetching trainers. Check console for details.');
//     } finally {
//       setLoading(false);
//     }
//   };
 
//   return (
//     <div className="container">
//       <h4 className="mb-4 text-primary">Search Trainers</h4>
 
//       <form onSubmit={handleSearch} className="row g-3">
//         <div className="col-md-4">
//           <label className="form-label">Name</label>
//           <input
//             type="text"
//             name="name"
//             className="form-control"
//             value={filters.name}
//             onChange={handleChange}
//           />
//         </div>
 
//         <div className="col-md-2">
//           <label className="form-label">Min Experience</label>
//           <input
//             type="number"
//             name="minExp"
//             className="form-control"
//             value={filters.minExp}
//             onChange={handleChange}
//           />
//         </div>
 
//         <div className="col-md-2">
//           <label className="form-label">Max Experience</label>
//           <input
//             type="number"
//             name="maxExp"
//             className="form-control"
//             value={filters.maxExp}
//             onChange={handleChange}
//           />
//         </div>
 
//         <div className="col-md-4">
//           <label className="form-label">Skills / Area of Work</label>
//           <Select
//             isMulti
//             name="skills"
//             options={skillOptions}
//             className="basic-multi-select"
//             classNamePrefix="select"
//             onChange={handleSkillsChange}
//             value={skillOptions.filter((option) => filters.skills.includes(option.value))}
//             placeholder="Select skills"
//           />
//         </div>
 
//         <div className="col-md-4">
//           <label className="form-label">Role</label>
//           <input
//             type="text"
//             name="role"
//             className="form-control"
//             value={filters.role}
//             onChange={handleChange}
//             placeholder="Trainer"
//           />
//         </div>
 
//         <div className="col-md-4">
//           <label className="form-label">Mapped Trainer Type</label>
//           <input
//             type="text"
//             name="mappedType"
//             className="form-control"
//             value={filters.mappedType}
//             onChange={handleChange}
//             placeholder="Internal / External"
//           />
//         </div>
 
//         <div className="col-md-4">
//           <label className="form-label">Gender</label>
//           <input
//             type="text"
//             name="gender"
//             className="form-control"
//             value={filters.gender}
//             onChange={handleChange}
//             placeholder="Male / Female / Other"
//           />
//         </div>
 
//         <div className="col-12">
//           <button type="submit" className="btn btn-primary" disabled={loading}>
//             {loading ? 'Searching...' : 'Search'}
//           </button>
//         </div>
//       </form>
 
//       {/* Results */}
//       <div className="mt-5">
//         <h5>Results:</h5>
//         {results.length === 0 ? (
//           <p>No trainers found.</p>
//         ) : (
//           <ul className="list-group">
//             {results.map((trainer, index) => (
//               <li key={index} className="list-group-item">
//                 <strong>{trainer.name}</strong> — {trainer.email} —{' '}
//                 {trainer.skills?.join(', ')}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };
 
// export default Search;
import { useState } from 'react';
import Select from 'react-select';
import 'bootstrap-icons/font/bootstrap-icons.css';
 
const Search = () => {
  const [filters, setFilters] = useState({
    name: '',
    minExp: '',
    maxExp: '',
    skills: [],
    role: '',
    mappedType: '',
    gender: '',
  });
 
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
 
  const primaryColor = '#000048';
  const hoverColor = '#1a1a80';
 
  const skillOptions = [
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'React', label: 'React' },
    { value: 'Node.js', label: 'Node.js' },
    { value: 'Python', label: 'Python' },
    { value: 'Java', label: 'Java' },
  ];
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };
 
  const handleSkillsChange = (selectedOptions) => {
    setFilters((prev) => ({
      ...prev,
      skills: selectedOptions.map((option) => option.value),
    }));
  };
 
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
 
    try {
      const params = new URLSearchParams();
      Object.entries(filters).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((v) => params.append(key, v));
        } else if (value !== '') {
          params.append(key, value);
        }
      });
 
      const response = await fetch(`http://52.43.62.125:8081/search?${params.toString()}`);
      if (!response.ok) throw new Error('Failed to fetch trainers');
 
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Search error:', error);
      alert('Error fetching trainers. Check console for details.');
    } finally {
      setLoading(false);
    }
  };
 
  return (
    <div className="card border-0 shadow-lg rounded-4">
      <div
        className="card-header bg-white border-bottom px-2 py-3 d-flex justify-content-between align-items-center"
        style={{ borderBottom: `2px solid ${primaryColor}` }}
      >
        <h5 className="mb-0 text-primary">
          <i className="bi bi-search me-2"></i>Search Trainers
        </h5>
        <span className="badge text-bg-light border" style={{ color: primaryColor, borderColor: primaryColor }}>
          HR Panel
        </span>
      </div>
 
      <div className="card-body px-4 py-5">
        <form onSubmit={handleSearch} className="row g-4">
          <div className="col-md-4">
            <label className="form-label" style={{ fontSize: '0.85rem' }}>
              <i className="bi bi-person-fill me-2"></i>Name
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={filters.name}
              onChange={handleChange}
              style={{ fontSize: '0.9rem' }}
              placeholder="Enter name"
            />
          </div>
 
          <div className="col-md-2">
            <label className="form-label" style={{ fontSize: '0.85rem' }}>
              <i className="bi bi-bar-chart-line me-2"></i>Min Exp
            </label>
            <input
              type="number"
              name="minExp"
              className="form-control"
              value={filters.minExp}
              onChange={handleChange}
              style={{ fontSize: '0.9rem' }}
              placeholder="0"
            />
          </div>
 
          <div className="col-md-2">
            <label className="form-label" style={{ fontSize: '0.85rem' }}>
              <i className="bi bi-bar-chart-line-fill me-2"></i>Max Exp
            </label>
            <input
              type="number"
              name="maxExp"
              className="form-control"
              value={filters.maxExp}
              onChange={handleChange}
              style={{ fontSize: '0.9rem' }}
              placeholder="10"
            />
          </div>
 
          <div className="col-md-4">
            <label className="form-label" style={{ fontSize: '0.85rem' }}>
              <i className="bi bi-tools me-2"></i>Skills / Area of Work
            </label>
            <Select
              isMulti
              name="skills"
              options={skillOptions}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={handleSkillsChange}
              value={skillOptions.filter((option) => filters.skills.includes(option.value))}
              placeholder="Select skills"
              styles={{ placeholder: (base) => ({ ...base, fontSize: '0.9rem' }) }}
            />
          </div>
 
          <div className="col-md-4">
            <label className="form-label" style={{ fontSize: '0.85rem' }}>
              <i className="bi bi-person-badge me-2"></i>Role
            </label>
            <input
              type="text"
              name="role"
              className="form-control"
              value={filters.role}
              onChange={handleChange}
              placeholder="Trainer"
              style={{ fontSize: '0.9rem' }}
            />
          </div>
 
          <div className="col-md-4">
            <label className="form-label" style={{ fontSize: '0.85rem' }}>
              <i className="bi bi-person-check-fill me-2"></i>Mapped Trainer Type
            </label>
            <input
              type="text"
              name="mappedType"
              className="form-control"
              value={filters.mappedType}
              onChange={handleChange}
              placeholder="Internal / External"
              style={{ fontSize: '0.9rem' }}
            />
          </div>
 
          <div className="col-md-4">
            <label className="form-label" style={{ fontSize: '0.85rem' }}>
              <i className="bi bi-gender-ambiguous me-2"></i>Gender
            </label>
            <input
              type="text"
              name="gender"
              className="form-control"
              value={filters.gender}
              onChange={handleChange}
              placeholder="Male / Female / Other"
              style={{ fontSize: '0.9rem' }}
            />
          </div>
 
          <div className="col-12 mt-3 d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-ms w-25 shadow"
              style={{
                backgroundColor: primaryColor,
                borderColor: primaryColor,
                color: 'white',
                transition: 'background-color 0.3s ease',
                marginTop:'30px'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = primaryColor)}
              disabled={loading}
            >
              <i className="bi bi-search me-2"></i>{loading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </form>
 
        
         
          {results.length >0 && (
            <div>
            <h6 className="text-secondary">Results:</h6>
            <ul className="list-group">
              {results.map((trainer, index) => (
                <li key={index} className="list-group-item">
                  <strong>{trainer.name}</strong> — {trainer.email} — {trainer.skills?.join(', ')}
                </li>
              ))}
            </ul>
            </div>
          )}
        </div>
      
    </div>
  );
};
 
export default Search;
 
 



 
 
// import { useState } from 'react'
 
// const Search = () => {
//   const [filters, setFilters] = useState({
//     name: '',
//     minExp: '',
//     maxExp: '',
//     skills: '',
//     role: '',
//     mappedType: '',
//     gender: '',
//   })
 
//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFilters(prev => ({ ...prev, [name]: value }))
//   }
 
//   const handleSearch = (e) => {
//     e.preventDefault()
 
//     // Remove empty fields
//     const cleanPayload = Object.fromEntries(
//       Object.entries(filters).filter(([_, v]) => v !== '')
//     )
 
//     console.log('Search Filters:', cleanPayload)
 
//     // Optionally, make API call with filters here
//     // axios.get('/api/search', { params: cleanPayload })
 
//     alert('Search initiated — check console for payload')
//   }
 
//   return (
//     <div className="container">
//       <h4 className="mb-4 text-primary">Search Trainers</h4>
 
//       <form onSubmit={handleSearch} className="row g-3">
//         <div className="col-md-4">
//           <label className="form-label">Name</label>
//           <input
//             type="text"
//             name="name"
//             className="form-control"
//             value={filters.name}
//             onChange={handleChange}
//           />
//         </div>
 
//         <div className="col-md-2">
//           <label className="form-label">Min Experience</label>
//           <input
//             type="number"
//             name="minExp"
//             className="form-control"
//             value={filters.minExp}
//             onChange={handleChange}
//           />
//         </div>
 
//         <div className="col-md-2">
//           <label className="form-label">Max Experience</label>
//           <input
//             type="number"
//             name="maxExp"
//             className="form-control"
//             value={filters.maxExp}
//             onChange={handleChange}
//           />
//         </div>
 
//         <div className="col-md-4">
//           <label className="form-label">Skills / Area of Work</label>
//           <input
//             type="text"
//             name="skills"
//             className="form-control"
//             value={filters.skills}
//             onChange={handleChange}
//             placeholder="e.g. Java, Python"
//           />
//         </div>
 
//         <div className="col-md-4">
//           <label className="form-label">Role</label>
//           <input
//             type="text"
//             name="role"
//             className="form-control"
//             value={filters.role}
//             onChange={handleChange}
//             placeholder="Trainer"
//           />
//         </div>
 
//         <div className="col-md-4">
//           <label className="form-label">Mapped Trainer Type</label>
//           <input
//             type="text"
//             name="mappedType"
//             className="form-control"
//             value={filters.mappedType}
//             onChange={handleChange}
//             placeholder="Internal / External"
//           />
//         </div>
 
//         <div className="col-md-4">
//           <label className="form-label">Gender</label>
//           <input
//             type="text"
//             name="gender"
//             className="form-control"
//             value={filters.gender}
//             onChange={handleChange}
//             placeholder="Male / Female / Other"
//           />
//         </div>
 
//         <div className="col-12">
//           <button type="submit" className="btn btn-primary">Search</button>
//         </div>
//       </form>
//     </div>
//   )
// }
 
// export default Search
 
 