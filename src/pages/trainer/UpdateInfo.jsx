// import { useContext, useState } from 'react'
// import Select from 'react-select'; // Import React Select
// import { Usercontext } from '../../App'

// const UpdateInfo = () => {
//   const {user} = useContext(Usercontext);
//   const [form, setForm] = useState({
//     tmId: user || '', // simulate pre-filled TM ID
//     fullName: '',
//     email: '',
//     phone: '',
//     gender: '',
//     experience: '',
//     mappedTrainerType: '',
//     skills:[]
//   })


//   const skillOptions = [
//     { value: 'Java', label: 'Java' },
//     { value: 'Python', label: 'Python' },
//     { value: 'React', label: 'React' },
//     { value: 'Node.js', label: 'Node.js' },
//     { value: 'Spring Boot', label: 'Spring Boot' },
//     { value: 'AWS', label: 'AWS' }
//   ]; 
  


//   const handleSkillsChange = (selectedOptions) => {
//     setForm(prev => ({
//       ...prev,
//       skills: selectedOptions.map(option => option.value) // Extract only values
//     }));
//   };

  

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setForm(prev => ({ ...prev, [name]: value }))
//   }

//   const requestBody={
//     id:form.tmId,
//     name:form.fullName,
//     email:form.email,
//     phoneNumber:form.phone,
//     gender:form.gender,
//     experience:form.experience,
//     mappedType:form.mappedTrainerType,
//     skills:form.skills

//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()


//     fetch("http://localhost:8085/updateInfo",{
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(requestBody),
//     })
//     .then(res=>res.json())
//     .then(data=>{
//       console.log(data);
//       alert("Trainer Info has updated successfully")
//     })


//     // console.log('Updated Trainer Info:', form)
//     // alert('Trainer info updated successfully!')
//   }

//   return (
//     <div className="container">
//       <h4 className="mb-4 text-primary">Update Trainer Info</h4>

//       <form onSubmit={handleSubmit} className="row g-3">
//         <div className="col-md-4">
//           <label className="form-label">Trainer ID</label>
//           <input
//             type="text"
//             className="form-control"
//             name="tmId"
//             value={form.tmId}
//             readOnly
//           />
//         </div>

//         <div className="col-md-4">
//           <label className="form-label">Full Name</label>
//           <input
//             type="text"
//             className="form-control"
//             name="fullName"
//             value={form.fullName}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="col-md-4">
//           <label className="form-label">Email</label>
//           <input
//             type="email"
//             className="form-control"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="col-md-4">
//           <label className="form-label">Phone Number</label>
//           <input
//             type="tel"
//             className="form-control"
//             name="phone"
//             value={form.phone}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="col-md-4">
//           <label className="form-label">Gender</label>
//           <select
//             name="gender"
//             className="form-select"
//             value={form.gender}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select</option>
//             <option>Male</option>
//             <option>Female</option>
//             <option>Other</option>
//           </select>
//         </div>

//         <div className="col-md-4">
//           <label className="form-label">Experience (Years)</label>
//           <input
//             type="number"
//             className="form-control"
//             name="experience"
//             value={form.experience}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="col-md-6">
//           <label className="form-label">Mapped Trainer Type</label>
//           <select
//             name="mappedTrainerType"
//             className="form-select"
//             value={form.mappedTrainerType}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select</option>
//             <option>Internal</option>
//             <option>External</option>
//           </select>
//         </div>

//         {/* <div className="col-md-6">
//           <label className="form-label">Skills</label>
//           <textarea
//             name="skills"
//             className="form-control"
//             value={form.skills}

//             onChange={handleChange}
//             required
//           >
            
//           </textarea>
//         </div> */}
//         <div className="col-md-6">
//           <label className="form-label">Skills</label>
//           <Select
//             isMulti
//             name="skills"
//             options={skillOptions}
//             value={skillOptions.filter(option => form.skills.includes(option.value))} // Match selected values
//             onChange={handleSkillsChange}
//           />
//         </div>

//         <div className="col-12">
//           <button className="btn btn-success" type="submit">
//             Update Info
//           </button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default UpdateInfo
import { useContext, useState, useEffect } from 'react'; // Import useEffect
import Select from 'react-select'; // Import React Select
import { Usercontext } from '../../App'; // Assuming Usercontext is correctly defined

// Ensure Bootstrap Icons are imported (usually done in App.js or index.js, but included here for completeness)
import 'bootstrap-icons/font/bootstrap-icons.css';

const UpdateInfo = () => {
  const { user } = useContext(Usercontext); // Get user from context
  const [form, setForm] = useState({
    tmId: user || '', // Initialize with user from context, or empty string
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    experience: '',
    mappedTrainerType: '',
    skills: []
  });

  // State for the custom message box
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  // Options for the React Select component
  const skillOptions = [
    { value: 'Java', label: 'Java' },
    { value: 'Python', label: 'Python' },
    { value: 'React', label: 'React' },
    { value: 'Node.js', label: 'Node.js' },
    { value: 'Spring Boot', label: 'Spring Boot' },
    { value: 'AWS', label: 'AWS' }
  ];

  // Effect hook to fetch existing trainer data when the component mounts or user changes
  useEffect(() => {
    // Only attempt to fetch if 'user' (TM ID) is available
    if (user) {
      const fetchTrainerData = async () => {
        try {
          // Simulate fetching data from a backend endpoint
          // In a real application, replace with your actual API call
          const response = await fetch(`http://localhost:8085/trainer/${user}`); // Assuming an endpoint like /trainer/{tmId}
          if (response.ok) {
            const data = await response.json();
            // Update form state with fetched data, handling potential missing fields
            setForm(prev => ({
              ...prev,
              fullName: data.name || '', // Assuming backend sends 'name' not 'fullName'
              email: data.email || '',
              phone: data.phoneNumber || '', // Assuming backend sends 'phoneNumber' not 'phone'
              gender: data.gender || '',
              experience: data.experience || '',
              mappedTrainerType: data.mappedType || '', // Assuming backend sends 'mappedType'
              skills: data.skills || [] // Skills should be an array
            }));
          } else {
            // Log a warning if data for the specific user is not found
            console.warn(`Trainer data for ${user} not found or could not be fetched.`);
            // Optionally, clear existing form fields if data isn't found or is invalid
            setForm(prev => ({ ...prev, fullName: '', email: '', phone: '', gender: '', experience: '', mappedTrainerType: '', skills: [] }));
          }
        } catch (error) {
          console.error("Error fetching trainer data:", error);
          // Show error message to user
          setMessage("Failed to load existing trainer data. Please try again later.");
          setIsError(true);
        }
      };
      fetchTrainerData(); // Call the fetch function
    }
  }, [user]); // Re-run effect if 'user' changes

  // Handler for React Select component for skills
  const handleSkillsChange = (selectedOptions) => {
    setForm(prev => ({
      ...prev,
      // Map selected options to their 'value' (e.g., 'Java', 'Python')
      skills: selectedOptions ? selectedOptions.map(option => option.value) : []
    }));
  };

  // Generic handler for all other input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  // Request body for the API call
  const requestBody = {
    id: form.tmId,
    name: form.fullName,
    email: form.email,
    phoneNumber: form.phone,
    gender: form.gender,
    experience: form.experience,
    mappedType: form.mappedTrainerType,
    skills: form.skills
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await fetch("http://localhost:8085/updateInfo", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setMessage("Trainer Info has updated successfully!");
        setIsError(false);
      } else {
        const errorData = await response.json(); // Try to get error message from response body
        console.error("Failed to update trainer info:", errorData);
        setMessage(`Failed to update trainer info: ${errorData.message || response.statusText}. Please try again.`);
        setIsError(true);
      }
    } catch (error) {
      console.error("Error updating trainer info:", error);
      setMessage("An unexpected error occurred. Please check your network connection and try again.");
      setIsError(true);
    }
  };

  // Custom Message Box Component
  const MessageBox = ({ message, isError, onClose }) => {
    if (!message) return null; // Don't render if no message

    const messageBoxStyle = {
      position: 'fixed',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      padding: '15px 25px',
      borderRadius: '8px',
      color: 'white',
      zIndex: 1060, // Above most content
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
      backgroundColor: isError ? '#dc3545' : '#28a745', // Red for error, green for success
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '15px',
    };

    const closeButtonStyle = {
      background: 'none',
      border: 'none',
      color: 'white',
      fontSize: '1.2rem',
      cursor: 'pointer',
      padding: '0 5px',
    };

    return (
      <div style={messageBoxStyle}>
        <span>{message}</span>
        <button onClick={onClose} style={closeButtonStyle}>&times;</button>
      </div>
    );
  };

  return (
    // Outer container for centering the form card
    <div className="d-flex justify-content-center align-items-center vh-100">
      {/* Custom Message Box */}
      <MessageBox message={message} isError={isError} onClose={() => setMessage('')} />

      {/* Main Card Container for the form */}
      <div className="card border-0 shadow-lg rounded-4" style={{ maxWidth: '850px', width: '90%', margin: '0 auto' }}>
        {/* Card Header */}
        <div className="card-header bg-white border-bottom px-4 py-3 d-flex justify-content-between align-items-center">
          <h5 className="mb-0 text-primary" style={{ fontSize: '1.4rem' }}>
            <i className="bi bi-person-lines-fill me-2"></i>Update Trainer Information
          </h5>
          <span className="badge bg-secondary-subtle text-dark">Trainer Profile</span>
        </div>

        {/* Card Body containing the form */}
        <div className="card-body px-5 py-5">
          <form onSubmit={handleSubmit} className="row g-4">
            {/* Trainer ID */}
            <div className="col-md-6">
              <label className="form-label" style={{ fontSize: '0.85rem' }}>Trainer ID <span className="text-danger">*</span></label>
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-person-badge"></i></span>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="tmId"
                  value={form.tmId}
                  readOnly // Trainer ID should not be editable
                  style={{ fontSize: '0.9rem' }}
                />
              </div>
            </div>

            {/* Full Name */}
            <div className="col-md-6">
              <label className="form-label" style={{ fontSize: '0.85rem' }}>Full Name <span className="text-danger">*</span></label>
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-person"></i></span>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                  style={{ fontSize: '0.9rem' }}
                />
              </div>
            </div>

            {/* Email */}
            <div className="col-md-6">
              <label className="form-label" style={{ fontSize: '0.85rem' }}>Email <span className="text-danger">*</span></label>
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-envelope"></i></span>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  style={{ fontSize: '0.9rem' }}
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="col-md-6">
              <label className="form-label" style={{ fontSize: '0.85rem' }}>Phone Number <span className="text-danger">*</span></label>
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-phone"></i></span>
                <input
                  type="tel"
                  className="form-control form-control-lg"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  style={{ fontSize: '0.9rem' }}
                />
              </div>
            </div>

            {/* Gender */}
            <div className="col-md-6">
              <label className="form-label" style={{ fontSize: '0.85rem' }}>Gender <span className="text-danger">*</span></label>
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-gender-ambiguous"></i></span>
                <select
                  name="gender"
                  className="form-select form-select-lg"
                  value={form.gender}
                  onChange={handleChange}
                  required
                  style={{ fontSize: '0.9rem' }}
                >
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            {/* Experience */}
            <div className="col-md-6">
              <label className="form-label" style={{ fontSize: '0.85rem' }}>Experience (Years) <span className="text-danger">*</span></label>
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-award"></i></span>
                <input
                  type="number"
                  className="form-control form-control-lg"
                  name="experience"
                  value={form.experience}
                  onChange={handleChange}
                  required
                  style={{ fontSize: '0.9rem' }}
                />
              </div>
            </div>

            {/* Mapped Trainer Type */}
            <div className="col-md-6">
              <label className="form-label" style={{ fontSize: '0.85rem' }}>Mapped Trainer Type <span className="text-danger">*</span></label>
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-person-workspace"></i></span>
                <select
                  name="mappedTrainerType"
                  className="form-select form-select-lg"
                  value={form.mappedTrainerType}
                  onChange={handleChange}
                  required
                  style={{ fontSize: '0.9rem' }}
                >
                  <option value="">Select</option>
                  <option>Internal</option>
                  <option>External</option>
                </select>
              </div>
            </div>

            {/* Skills - Now takes full width */}
            <div className="col-md-6"> {/* Changed back to col-md-6 for better layout alignment with other fields */}
              <label className="form-label" style={{ fontSize: '0.85rem' }}>Skills <span className="text-danger">*</span></label>
              <div className="input-group">
                {/* Input group text for the icon, ensuring it aligns with React-Select */}
                <span className="input-group-text" style={{ borderRight: 'none', paddingRight: '0.5rem' }}>
                  <i className="bi bi-tools"></i>
                </span>
                <Select
                  isMulti // Allows multiple selections
                  name="skills"
                  options={skillOptions}
                  // Filter options to match the skills currently in form.skills array
                  value={skillOptions.filter(option => form.skills.includes(option.value))}
                  onChange={handleSkillsChange}
                  // Apply Bootstrap form-control-lg styles to React-Select
                  className="react-select-container form-control-lg p-0"
                  classNamePrefix="react-select"
                  styles={{
                    control: (base) => ({
                      ...base,
                      minHeight: '48px', // Matched Bootstrap's form-control-lg height
                      fontSize: '0.9rem', // Matched input font size
                      borderTopLeftRadius: '0', // Align with input-group-text rounded corner
                      borderBottomLeftRadius: '0', // Align with input-group-text rounded corner
                      borderColor: 'rgba(0, 0, 0, 0.175)', // Default Bootstrap border color
                      boxShadow: 'none', // Remove default react-select shadow
                      '&:hover': {
                        borderColor: 'rgba(0, 0, 0, 0.25)', // Hover border color
                      },
                    }),
                    valueContainer: (base) => ({
                        ...base,
                        paddingLeft: '0.75rem', // Match Bootstrap input padding
                    }),
                    placeholder: (base) => ({
                      ...base,
                      fontSize: '0.9rem',
                    }),
                    multiValueLabel: (base) => ({
                      ...base,
                      fontSize: '0.85rem', // Font size for selected tags
                    }),
                    option: (base) => ({
                      ...base,
                      fontSize: '0.9rem', // Font size for dropdown options
                    }),
                    // Style the `input-group-text` to be rounded on the left
                    // and match the height and border of the Select component
                    // This is handled by Bootstrap classes applied to `input-group-text`
                    // and then overriding `Select` control styles as done above.
                  }}
                  placeholder="Select skills"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="col-12 text-center mt-5 d-flex justify-content-center">
              <button type="submit" className="btn btn-success btn-lg w-50 shadow">
                <i className="bi bi-check-circle-fill me-2"></i>Update Information
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateInfo;
