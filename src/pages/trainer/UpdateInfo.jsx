// import { useContext, useState, useEffect } from 'react';
// import Select from 'react-select'; // Keep this import for styling purposes or if other regular Selects are needed
// import AsyncSelect from 'react-select/async'; // Import AsyncSelect
// import { Usercontext } from '../../App';

// import 'bootstrap-icons/font/bootstrap-icons.css';

// const UpdateInfo = () => {
//   const { user } = useContext(Usercontext);
//   const [form, setForm] = useState({
//     tmId: user || '',
//     fullName: '',
//     email: '',
//     phone: '',
//     gender: '',
//     mappedTrainerType: '',
//     skills: []
//   });

//   const [message, setMessage] = useState('');
//   const [isError, setIsError] = useState(false);

//   // --- Start of new/modified skills logic ---
//   const allSkills = [
//     ".Net", ".Net 6", ".Net advanced features", "ABAP", "Abinitio", "Accessibility", "ADO.Net", "Adobe Target", "ADT", "Advanced C", "AEM topics", "After Effects", "AgencyPort", "Agile basics", "Amazon Connect", "Amazon DynamoDB concepts", "Amazon Relational Database Service (RDS)", "Analytics", "Android Basics and Advanced", "Android Interface guidelines for Mobile (Material design)", "Angular", "Animate CC", "Ansible", "ANT/NANT", "API Automation Testing", "Apigee", "App Stores (Public/Enterprise)", "AppDynamics Fundamentals", "Appian", "Apple Human Interface guidelines for Mobile (Cupertino)", "Application debugging concepts", "Application fundamentals", "Application Monitor", "Apps DBA", "Architectural patterns", "Ariba", "ARM Template", "Articulate Storyline", "AS400", "ASP.Net", "ASP.Net MVC 5", "Audacity / Audition", "Audience Manager", "Automation and analytics tools", "Automation basics", "Automation testing - Selenium", "Automation Tool : UFT", "Averisource", "AVM", "AWS", "AWS and Azure", "AWS and Cloud Computing Fundamentals", "AWS Developer", "AWS Elasticity & Management Tools", "AWS Essentials, DPP Masterclass and IBM Guardium", "AWS Fundamentals & Developer Associate", "AWS Identity and Access Management (IAM)", "AWS PaaS Services- SNS, SQS, SES", "Axway API", "Azure", "Azure Administrator", "Azure Backup", "Azure basics", "Azure CLI", "Azure IAM basics", "Azure IOT", "Azure Pipelines", "Azure Queue Storage", "Azure Service Bus", "B2B", "Bash Shell Scripting", "BDD", "BI", "BigData", "Blob storage", "Blueprism and RPA", "BootStrap4", "BPM products", "Brightedge", "C", "C# 10", "C++", "C4C", "Callidus", "Camilion", "Camunda", "Captivate", "Certificate Manager", "CI/CD", "CICS", "Cisco ASA", "CLLE", "Cloud Basics", "Cloud Computing", "Cloud Fundamentals", "Cloud Identity", "CLP", "CMS", "COBOL", "Cognos", "Compliance management", "Compliance wire LMS", "Components (nuget packages)", "CompTIA Security", "Computer Networks", "Concur", "Confluence Fundamentals", "Container Orchestration", "Container Orchestration thru Azure", "Content Management System", "Content QA - Manual Testing", "Cosmos", "CPI", "Creating brand identity", "CRM", "Cryptography Fundamentals", "CSC - Exceed", "CSC - PMSC", "CSoD", "CSS3", "Cucumber", "Cyber Security", "Cyber security basics", "Cyber Threat Intelligence", "CyberLife", "D365", "Data Obscure & Vormetric", "Data storage", "Data Structures", "Database Fundamentals", "DataStage", "Datastructures and Algorithm", "DB2", "Deep Learning", "Define", "Design Mindset", "Design Patterns and Principles", "Design Principles (Accessibility, Multi Language Support, Themes, Security, Performance, locale)", "Design Systems", "Designing and Implementing Microsoft DevOps Solutions", "Device features", "devices", "DevOps", "Devops Basics", "Digital Analytics", "Digital Marketing and Siebel", "Digital Overview", "Digital Overview, Security", "Docker", "Domain", "Domain GEB", "Domain Life", "DRUPAL", "Duck Creek", "DW Basics", "DW fundamentals", "eBao Generalsystem", "eBao Lifesystem", "eBaoTech General System", "eBiz", "EDM", "eLearning Services Overview & Induction", "Eloqua", "Email Security", "Empathy", "Endpoint & Email Security", "Endpoint and EDR, SIEM/SOC", "Engineering concepts", "Enterprise Mobile Apps", "Entity Framework Core 6", "EPM", "ETL Concepts", "Exigen", "Exigen GEB", "Facets", "FAST", "Finance HCM", "FINEOS", "Firewall", "Firewalls", "FNZ", "Functional Testing", "Fundamental & Types of Storage", "Fundamentals Java Programming", "Fundamentals of Cloud Computing", "Fundamentals of Linux and Windows", "Fusion middleware", "Gamification", "Gateway", "GCP (Google Cloud Platform)", "GCP Console & Cloud Shell", "GCP Projects & Infrastructure", "GDPR and Privacy", "Genesys Cloud", "Genius", "GIS", "Git", "Glacier", "Google Ads", "Google Analytics - Web", "Google Campaign Manager 360", "Google Compute Engine", "Google Data Analytics and Data Studio", "Google Display & Video 360", "Google Tag Management", "GRC : Risk Management", "Group EB", "Guidewire", "Health Care Domain Training", "Hibernate", "HR", "HTML5", "Hybris", "IBM BPM", "IBM Sterling", "Ideate", "IDS/IPS", "IG HUON", "IIB", "IICS", "Illustrator", "Incident Detection and Investigation", "Informatica", "Informatica DQ", "Informatica MDM", "Informatica Powercenter", "Infra Database and Data Models", "Ingenium", "Ingenium Specifics", "Insbridge", "InsuranceNow", "Insurity", "Introduction of Web Architecture and Technologies", "Introduction to immersive Medias", "Introduction to ML & AI", "Introduction to Mobile platforms", "IO Topics", "Ionic Framework", "IOS Basics and Advanced", "IOT CS Topics", "ISPF", "iTello", "ITIL", "IVM : Certified Ethical Hacker", "IVM : DAST, Penetration Testing", "IVM : Malware Analysis", "IVM : Overview", "IVM : Threat Monitoring and Penetration Testing", "J2EE", "Java & PI", "Java 8, Java 11, Java 12, Java 17", "JavaScript", "JBPM", "JCL", "JDBC", "JDE Functional", "JDE Technical", "Jenkins", "Jira", "JPA", "jQuery", "JSP", "JUnit", "KMS", "Kong", "Kronos work force management", "Kubernetes", "Lambda and API Gateway", "Laws of Design", "Life Claims", "Life Compensation", "Life New Business", "Life of a Graphic Designer", "Life of a Programmer", "Life of an Instructional Designer", "Lifecad", "LifeEngage", "Linux", "Linux Basics and Shell Script basics", "Linux Server Administration", "LMS", "Load Balancer", "Logging and Continuous Code Quality", "Magento", "Marketing Collaterals", "Marketo", "Maven", "Mean Stack", "Mern Stack", "Messaging & Collaboration", "Microservices", "Microservices with Spring CLoud", "Microsoft Azure", "Microsoft Azure Fundamentals", "Middleware Technologies", "MongoDB", "MQ", "MS AX", "MSCRM", "Mulesoft", "Multifactor Authentication (MFA)", "MySQL", "Netsuite Functional", "Netsuite Technical", "Network Essentials", "Networking Concepts and Protocols", "Networking Essentials ", "Node JS", "NUnit", "OBIEE", "ODI", "OIPA", "OMNI", "On Job Training- eDetailing & Web", "On the job training", "OneShield", "OpenText", "Oracle Cloud", "Oracle Digital technologies", "Oracle Fundamentals", "Oracle Integration", "Oracle PLSQL", "Oracle Python", "Oracle SQL", "OSP Peoplesoft", "PAM overview, Cyber Ark deep dive", "PE Topics", "Pega", "Performance Engineer", "Performance testing", "Photoshop", "PHP", "PI/PO", "PKI & Data discovery", "PLSQL", "POSTMAN", "PowerBI", "PowerShell", "Presentation", "Privileged Access Management", "ProductXpress", "Programmatic - DV360", "Programmatic / Display Marketing", "Prototype/Testing", "Proxy", "Python 3", "Python, Shell Scripting", "QlikSense", "QlikView", "QlikView and Autosys", "Ratabase", "React", "React JS", "React Native", "Reltio", "Reporting Concepts", "Responsive Web Design", "REST WS", "RestAPI", "RPG", "RPGLE", "RSA Archer : Audit Management", "RSA Archer : Field Types, Functionalities, DDE Services", "RSA Archer : Notifications and Schedules", "RSA Archer : Overview, Integrated Risk Management", "RSA Archer : Tools and Application Builder, Field Types", "Sailpoint/OKTA", "Salesforce", "SAP ABAB", "SAP ABAP", "SAP Analytics", "SAP Basis & Security", "SAP BO", "SAP BODS", "SAP BOIS", "SAP BW", "SAP BW on HANA", "SAP Fiori", "SAP Fundamentals", "SAP MDM", "SAP S/4HANA", "SAP TOSCA", "SAP UI5", "SAP WORKSOFT", "SAST", "SCM", "SDLC", "Security Testing", "Selenium", "Selenium Automation", "Selenium Frameworks, UFT Frameworks", "SEM", "SEMRush", "Sengage Cloud", "SEO", "Serverless logic", "Service Management", "Service Now", "Servlets", "SharePoint", "Shell Scripting", "Siebel", "SiteCore", "Sketches and Perspective Design", "SMM", "SOAP WS", "Software Engineering", "Software Support and Maintenance", "SoftwareAG", "SPA (Angular or React or Vue App) with Spring Boot", "Spark", "Splunk", "Spring", "Spring Core", "Spring Data JPA", "Spring MVC using Spring Boot", "Spring Rest", "Spring REST using Spring Boot 3", "SQL Server", "SQLRPGLE", "SSAS", "SSIS", "SSL/TLS Fundamentals", "SSRS", "Stibo", "Storage & Backup Fundamentals", "Storage - S3", "SuccessFactor", "Sumtotal", "SW Engineering", "Symphony framework", "Tableau", "Talend", "Teamcenter", "Technical Writing and Instructional Design", "Temenos", "Teradata", "Testing", "Theory of colors and understanding Folder structure", "TIBCO", "TSO", "Types of Storage", "Typescript", "UI & Scripting Technology", "UI Technology", "UI- SPA", "Unit testing", "Unix", "Unix and Shell Scripting", "Unix(Advanced)", "Unqork", "Unqork L&A", "Unqork Retirement", "UX-Design and tools", "V3", "Vantage", "Vantage GEB", "Varicent", "VBScript", "Versata", "Vertafore", "Virtualization/Hypervisor Fundamentals", "Visualization", "VPAS", "VSAM", "WAF", "Web API", "WebAPI Microservices", "Webservices", "Webstandards", "Windows Server 2016", "Windows Server Administration", "wmA", "Xamarin Introduction", "Xamarin.Android", "Xamarin.iOS", "XAML", "XML", "XSLT", "Zend framework"
//   ];

//   const filterSkills = (inputValue) => {
//     return allSkills
//       .filter(skill => skill.toLowerCase().includes(inputValue.toLowerCase()))
//       .map(skill => ({ label: skill, value: skill }));
//   };

//   const loadSkillOptions = (inputValue, callback) => {
//     setTimeout(() => {
//       callback(filterSkills(inputValue));
//     }, 300);
//   };
//   // --- End of new/modified skills logic ---

//   useEffect(() => {
//     if (user) {
//       const fetchTrainerData = async () => {
//         try {
//           const response = await fetch(`http://52.88.246.113:8085/trainer/${user}`);
//           if (response.ok) {
//             const data = await response.json();
//             console.log("fetched data", data); // Log the fetched data for verification
//             setForm(prev => ({
//               ...prev,
//               fullName: data.name || '',
//               email: data.email || '',
//               phone: data.phoneNumber || '',
//               gender: data.gender || '',
//               mappedTrainerType: data.mappedType || '',
//               skills: data.skills || []
//             }));
//           } else {
//             console.warn(`Trainer data for ${user} not found or could not be fetched.`);
//             setForm(prev => ({ ...prev, fullName: '', email: '', phone: '', gender: '', mappedTrainerType: '', skills: [] }));
//           }
//         } catch (error) {
//           console.error("Error fetching trainer data:", error);
//           setMessage("Failed to load existing trainer data. Please try again later.");
//           setIsError(true);
//         }
//       };
//       fetchTrainerData();
//     }
//   }, [user]);

//   const handleSkillsChange = (selectedOptions) => {
//     setForm(prev => ({
//       ...prev,
//       skills: selectedOptions ? selectedOptions.map(option => option.value) : []
//     }));
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm(prev => ({ ...prev, [name]: value }));
//   };

//   const requestBody = {
//     id: form.tmId,
//     name: form.fullName,
//     email: form.email,
//     phoneNumber: form.phone,
//     gender: form.gender,
//     // experience: form.experience, // Removed as per original file's commented out section
//     mappedType: form.mappedTrainerType,
//     skills: form.skills
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://52.88.246.113:8085/updateInfo", {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(requestBody),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log(data);
//         setMessage("Trainer Info has updated successfully!");
//         setIsError(false);
//       } else {
//         const errorData = await response.json();
//         console.error("Failed to update trainer info:", errorData);
//         setMessage(`Failed to update trainer info: ${errorData.message || response.statusText}. Please try again.`);
//         setIsError(true);
//       }
//     } catch (error) {
//       console.error("Error updating trainer info:", error);
//       setMessage("An unexpected error occurred. Please check your network connection and try again.");
//       setIsError(true);
//     }
//   };

//   const MessageBox = ({ message, isError, onClose }) => {
//     if (!message) return null;

//     const messageBoxStyle = {
//       position: 'fixed',
//       top: '20px',
//       left: '50%',
//       transform: 'translateX(-50%)',
//       padding: '15px 25px',
//       borderRadius: '8px',
//       color: 'white',
//       zIndex: 1060,
//       boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
//       backgroundColor: isError ? '#dc3545' : '#28a745',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'space-between',
//       gap: '15px',
//     };

//     const closeButtonStyle = {
//       background: 'none',
//       border: 'none',
//       color: 'white',
//       fontSize: '1.2rem',
//       cursor: 'pointer',
//       padding: '0 5px',
//     };

//     return (
//       <div style={messageBoxStyle}>
//         <span>{message}</span>
//         <button onClick={onClose} style={closeButtonStyle}>&times;</button>
//       </div>
//     );
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100">
//       <MessageBox message={message} isError={isError} onClose={() => setMessage('')} />

//       <div className="card border-0 shadow-lg rounded-4" style={{ maxWidth: '850px', width: '90%', margin: '0 auto' }}>
//         <div className="card-header bg-white border-bottom px-4 py-3 d-flex justify-content-between align-items-center">
//           <h5 className="mb-0 text-primary" style={{ fontSize: '1.4rem' }}>
//             <i className="bi bi-person-lines-fill me-2"></i>Update Trainer Information
//           </h5>
//           <span className="badge bg-secondary-subtle text-dark">Trainer Profile</span>
//         </div>

//         <div className="card-body px-5 py-5">
//           <form onSubmit={handleSubmit} className="row g-4">
//             <div className="col-md-6">
//               <label className="form-label" style={{ fontSize: '0.85rem' }}>Trainer ID </label>
//               <div className="input-group">
//                 <span className="input-group-text"><i className="bi bi-person-badge"></i></span>
//                 <input
//                   type="text"
//                   className="form-control form-control-lg"
//                   name="tmId"
//                   value={form.tmId}
//                   readOnly
//                   style={{
//                     fontSize: '0.9rem',
//                     backgroundColor: '#e9ecef',
//                     color: '#6c757d',
//                     cursor: 'not-allowed'
//                   }}
//                 />
//               </div>
//             </div>

//             <div className="col-md-6">
//               <label className="form-label" style={{ fontSize: '0.85rem' }}>Full Name <span className="text-danger">*</span></label>
//               <div className="input-group">
//                 <span className="input-group-text"><i className="bi bi-person"></i></span>
//                 <input
//                   type="text"
//                   className="form-control form-control-lg"
//                   name="fullName"
//                   value={form.fullName}
//                   onChange={handleChange}
//                   required
//                   style={{ fontSize: '0.9rem' }}
//                 />
//               </div>
//             </div>

//             <div className="col-md-6">
//               <label className="form-label" style={{ fontSize: '0.85rem' }}>Email <span className="text-danger">*</span></label>
//               <div className="input-group">
//                 <span className="input-group-text"><i className="bi bi-envelope"></i></span>
//                 <input
//                   type="email"
//                   className="form-control form-control-lg"
//                   name="email"
//                   value={form.email}
//                   onChange={handleChange}
//                   required
//                   style={{ fontSize: '0.9rem' }}
//                 />
//               </div>
//             </div>

//             <div className="col-md-6">
//               <label className="form-label" style={{ fontSize: '0.85rem' }}>Phone Number <span className="text-danger">*</span></label>
//               <div className="input-group">
//                 <span className="input-group-text"><i className="bi bi-phone"></i></span>
//                 <input
//                   type="tel"
//                   className="form-control form-control-lg"
//                   name="phone"
//                   value={form.phone}
//                   onChange={handleChange}
//                   required
//                   style={{ fontSize: '0.9rem' }}
//                 />
//               </div>
//             </div>

//             <div className="col-md-6">
//               <label className="form-label" style={{ fontSize: '0.85rem' }}>Gender <span className="text-danger">*</span></label>
//               <div className="input-group">
//                 <span className="input-group-text"><i className="bi bi-gender-ambiguous"></i></span>
//                 <select
//                   name="gender"
//                   className="form-select form-select-lg"
//                   value={form.gender}
//                   onChange={handleChange}
//                   required
//                   style={{ fontSize: '0.9rem' }}
//                 >
//                   <option value="" disabled>Select</option>
//                   <option>Male</option>
//                   <option>Female</option>
//                   <option>Other</option>
//                 </select>
//               </div>
//             </div>

//             <div className="col-md-6">
//               <label className="form-label" style={{ fontSize: '0.85rem' }}>Mapped Trainer Type <span className="text-danger">*</span></label>
//               <div className="input-group">
//                 <span className="input-group-text"><i className="bi bi-person-workspace"></i></span>
//                 <select
//                   name="mappedTrainerType"
//                   className="form-select form-select-lg"
//                   value={form.mappedTrainerType}
//                   onChange={handleChange}
//                   required
//                   style={{ fontSize: '0.9rem' }}
//                 >
//                   <option value="" disabled>Select</option>
//                   <option>Internal</option>
//                   <option>External</option>
//                 </select>
//               </div>
//             </div>

//             {/* Skills - Now using AsyncSelect with search and suggestion */}
//             <div className="col-md-6">
//               <label className="form-label" style={{ fontSize: '0.85rem' }}>Skills <span className="text-danger">*</span></label>
//               <div className="input-group">
//                 <span className="input-group-text" style={{ borderRight: 'none', paddingRight: '0.5rem' }}>
//                   <i className="bi bi-tools"></i>
//                 </span>
//                 <AsyncSelect
//                   isMulti // Allows multiple selections
//                   name="skills"
//                   cacheOptions
//                   loadOptions={loadSkillOptions} // Function to load suggestions
//                   onChange={handleSkillsChange}
//                   // Map the current form.skills array to the format React-Select expects for 'value'
//                   value={form.skills.map(s => ({ label: s, value: s }))}
//                   className="react-select-container form-control-lg p-0"
//                   classNamePrefix="react-select"
//                   styles={{
//                     control: (base) => ({
//                       ...base,
//                       minHeight: '48px',
//                       fontSize: '0.9rem',
//                       borderTopLeftRadius: '0',
//                       borderBottomLeftRadius: '0',
//                       borderColor: 'rgba(0, 0, 0, 0.175)',
//                       boxShadow: 'none',
//                       '&:hover': {
//                         borderColor: 'rgba(0, 0, 0, 0.25)',
//                       },
//                     }),
//                     valueContainer: (base) => ({
//                       ...base,
//                       paddingLeft: '0.75rem',
//                     }),
//                     placeholder: (base) => ({
//                       ...base,
//                       fontSize: '0.9rem',
//                     }),
//                     multiValueLabel: (base) => ({
//                       ...base,
//                       fontSize: '0.85rem',
//                     }),
//                     option: (base) => ({
//                       ...base,
//                       fontSize: '0.9rem',
//                     }),
//                   }}
//                   placeholder="Type to search skills"
//                   required // Make skills field mandatory
//                 />
//               </div>
//             </div>

//             <div className="col-12 text-center mt-5 d-flex justify-content-center">
//               <button type="submit" className="btn btn-success btn-lg w-50 shadow">
//                 <i className="bi bi-check-circle-fill me-2"></i>Update Information
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpdateInfo;



import { useContext, useState, useEffect } from 'react';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import { Usercontext } from '../../App';

import 'bootstrap-icons/font/bootstrap-icons.css';

const UpdateInfo = () => {
  const { user } = useContext(Usercontext);
  const [form, setForm] = useState({
    tmId: user || '',
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    mappedTrainerType: '',
    skills: []
  });

  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const allSkills = [
    ".Net", ".Net 6", ".Net advanced features", "ABAP", "Abinitio", "Accessibility", "ADO.Net", "Adobe Target", "ADT", "Advanced C", "AEM topics", "After Effects", "AgencyPort", "Agile basics", "Amazon Connect", "Amazon DynamoDB concepts", "Amazon Relational Database Service (RDS)", "Analytics", "Android Basics and Advanced", "Android Interface guidelines for Mobile (Material design)", "Angular", "Animate CC", "Ansible", "ANT/NANT", "API Automation Testing", "Apigee", "App Stores (Public/Enterprise)", "AppDynamics Fundamentals", "Appian", "Apple Human Interface guidelines for Mobile (Cupertino)", "Application debugging concepts", "Application fundamentals", "Application Monitor", "Apps DBA", "Architectural patterns", "Ariba", "ARM Template", "Articulate Storyline", "AS400", "ASP.Net", "ASP.Net MVC 5", "Audacity / Audition", "Audience Manager", "Automation and analytics tools", "Automation basics", "Automation testing - Selenium", "Automation Tool : UFT", "Averisource", "AVM", "AWS", "AWS and Azure", "AWS and Cloud Computing Fundamentals", "AWS Developer", "AWS Elasticity & Management Tools", "AWS Essentials, DPP Masterclass and IBM Guardium", "AWS Fundamentals & Developer Associate", "AWS Identity and Access Management (IAM)", "AWS PaaS Services- SNS, SQS, SES", "Axway API", "Azure", "Azure Administrator", "Azure Backup", "Azure basics", "Azure CLI", "Azure IAM basics", "Azure IOT", "Azure Pipelines", "Azure Queue Storage", "Azure Service Bus", "B2B", "Bash Shell Scripting", "BDD", "BI", "BigData", "Blob storage", "Blueprism and RPA", "BootStrap4", "BPM products", "Brightedge", "C", "C# 10", "C++", "C4C", "Callidus", "Camilion", "Camunda", "Captivate", "Certificate Manager", "CI/CD", "CICS", "Cisco ASA", "CLLE", "Cloud Basics", "Cloud Computing", "Cloud Fundamentals", "Cloud Identity", "CLP", "CMS", "COBOL", "Cognos", "Compliance management", "Compliance wire LMS", "Components (nuget packages)", "CompTIA Security", "Computer Networks", "Concur", "Confluence Fundamentals", "Container Orchestration", "Container Orchestration thru Azure", "Content Management System", "Content QA - Manual Testing", "Cosmos", "CPI", "Creating brand identity", "CRM", "Cryptography Fundamentals", "CSC - Exceed", "CSC - PMSC", "CSoD", "CSS3", "Cucumber", "Cyber Security", "Cyber security basics", "Cyber Threat Intelligence", "CyberLife", "D365", "Data Obscure & Vormetric", "Data storage", "Data Structures", "Database Fundamentals", "DataStage", "Datastructures and Algorithm", "DB2", "Deep Learning", "Define", "Design Mindset", "Design Patterns and Principles", "Design Principles (Accessibility, Multi Language Support, Themes, Security, Performance, locale)", "Design Systems", "Designing and Implementing Microsoft DevOps Solutions", "Device features", "devices", "DevOps", "Devops Basics", "Digital Analytics", "Digital Marketing and Siebel", "Digital Overview", "Digital Overview, Security", "Docker", "Domain", "Domain GEB", "Domain Life", "DRUPAL", "Duck Creek", "DW Basics", "DW fundamentals", "eBao Generalsystem", "eBao Lifesystem", "eBaoTech General System", "eBiz", "EDM", "eLearning Services Overview & Induction", "Eloqua", "Email Security", "Empathy", "Endpoint & Email Security", "Endpoint and EDR, SIEM/SOC", "Engineering concepts", "Enterprise Mobile Apps", "Entity Framework Core 6", "EPM", "ETL Concepts", "Exigen", "Exigen GEB", "Facets", "FAST", "Finance HCM", "FINEOS", "Firewall", "Firewalls", "FNZ", "Functional Testing", "Fundamental & Types of Storage", "Fundamentals Java Programming", "Fundamentals of Cloud Computing", "Fundamentals of Linux and Windows", "Fusion middleware", "Gamification", "Gateway", "GCP (Google Cloud Platform)", "GCP Console & Cloud Shell", "GCP Projects & Infrastructure", "GDPR and Privacy", "Genesys Cloud", "Genius", "GIS", "Git", "Glacier", "Google Ads", "Google Analytics - Web", "Google Campaign Manager 360", "Google Compute Engine", "Google Data Analytics and Data Studio", "Google Display & Video 360", "Google Tag Management", "GRC : Risk Management", "Group EB", "Guidewire", "Health Care Domain Training", "Hibernate", "HR", "HTML5", "Hybris", "IBM BPM", "IBM Sterling", "Ideate", "IDS/IPS", "IG HUON", "IIB", "IICS", "Illustrator", "Incident Detection and Investigation", "Informatica", "Informatica DQ", "Informatica MDM", "Informatica Powercenter", "Infra Database and Data Models", "Ingenium", "Ingenium Specifics", "Insbridge", "InsuranceNow", "Insurity", "Introduction of Web Architecture and Technologies", "Introduction to immersive Medias", "Introduction to ML & AI", "Introduction to Mobile platforms", "IO Topics", "Ionic Framework", "IOS Basics and Advanced", "IOT CS Topics", "ISPF", "iTello", "ITIL", "IVM : Certified Ethical Hacker", "IVM : DAST, Penetration Testing", "IVM : Malware Analysis", "IVM : Overview", "IVM : Threat Monitoring and Penetration Testing", "J2EE", "Java & PI", "Java 8, Java 11, Java 12, Java 17", "JavaScript", "JBPM", "JCL", "JDBC", "JDE Functional", "JDE Technical", "Jenkins", "Jira", "JPA", "jQuery", "JSP", "JUnit", "KMS", "Kong", "Kronos work force management", "Kubernetes", "Lambda and API Gateway", "Laws of Design", "Life Claims", "Life Compensation", "Life New Business", "Life of a Graphic Designer", "Life of a Programmer", "Life of an Instructional Designer", "Lifecad", "LifeEngage", "Linux", "Linux Basics and Shell Script basics", "Linux Server Administration", "LMS", "Load Balancer", "Logging and Continuous Code Quality", "Magento", "Marketing Collaterals", "Marketo", "Maven", "Mean Stack", "Mern Stack", "Messaging & Collaboration", "Microservices", "Microservices with Spring CLoud", "Microsoft Azure", "Microsoft Azure Fundamentals", "Middleware Technologies", "MongoDB", "MQ", "MS AX", "MSCRM", "Mulesoft", "Multifactor Authentication (MFA)", "MySQL", "Netsuite Functional", "Netsuite Technical", "Network Essentials", "Networking Concepts and Protocols", "Networking Essentials ", "Node JS", "NUnit", "OBIEE", "ODI", "OIPA", "OMNI", "On Job Training- eDetailing & Web", "On the job training", "OneShield", "OpenText", "Oracle Cloud", "Oracle Digital technologies", "Oracle Fundamentals", "Oracle Integration", "Oracle PLSQL", "Oracle Python", "Oracle SQL", "OSP Peoplesoft", "PAM overview, Cyber Ark deep dive", "PE Topics", "Pega", "Performance Engineer", "Performance testing", "Photoshop", "PHP", "PI/PO", "PKI & Data discovery", "PLSQL", "POSTMAN", "PowerBI", "Programmatic - DV360", "Programmatic / Display Marketing", "Prototype/Testing", "Proxy", "Python 3", "Python, Shell Scripting", "QlikSense", "QlikView", "QlikView and Autosys", "Ratabase", "React", "React JS", "React Native", "Reltio", "Reporting Concepts", "Responsive Web Design", "REST WS", "RestAPI", "RPG", "RPGLE", "RSA Archer : Audit Management", "RSA Archer : Field Types, Functionalities, DDE Services", "RSA Archer : Notifications and Schedules", "RSA Archer : Overview, Integrated Risk Management", "RSA Archer : Tools and Application Builder, Field Types", "Sailpoint/OKTA", "Salesforce", "SAP ABAB", "SAP ABAP", "SAP Analytics", "SAP Basis & Security", "SAP BO", "SAP BODS", "SAP BOIS", "SAP BW", "SAP BW on HANA", "SAP Fiori", "SAP Fundamentals", "SAP MDM", "SAP S/4HANA", "SAP TOSCA", "SAP UI5", "SAP WORKSOFT", "SAST", "SCM", "SDLC", "Security Testing", "Selenium", "Selenium Automation", "Selenium Frameworks, UFT Frameworks", "SEM", "SEMRush", "Sengage Cloud", "SEO", "Serverless logic", "Service Management", "Service Now", "Servlets", "SharePoint", "Shell Scripting", "Siebel", "SiteCore", "Sketches and Perspective Design", "SMM", "SOAP WS", "Software Engineering", "Software Support and Maintenance", "SoftwareAG", "SPA (Angular or React or Vue App) with Spring Boot", "Spark", "Splunk", "Spring", "Spring Core", "Spring Data JPA", "Spring MVC using Spring Boot", "Spring Rest", "Spring REST using Spring Boot 3", "SQL Server", "SQLRPGLE", "SSAS", "SSIS", "SSL/TLS Fundamentals", "SSRS", "Stibo", "Storage & Backup Fundamentals", "Storage - S3", "SuccessFactor", "Sumtotal", "SW Engineering", "Symphony framework", "Tableau", "Talend", "Teamcenter", "Technical Writing and Instructional Design", "Temenos", "Teradata", "Testing", "Theory of colors and understanding Folder structure", "TIBCO", "TSO", "Types of Storage", "Typescript", "UI & Scripting Technology", "UI Technology", "UI- SPA", "Unit testing", "Unix", "Unix and Shell Scripting", "Unix(Advanced)", "Unqork", "Unqork L&A", "Unqork Retirement", "UX-Design and tools", "V3", "Vantage", "Vantage GEB", "Varicent", "VBScript", "Versata", "Vertafore", "Virtualization/Hypervisor Fundamentals", "Visualization", "VPAS", "VSAM", "WAF", "Web API", "WebAPI Microservices", "Webservices", "Webstandards", "Windows Server 2016", "Windows Server Administration", "wmA", "Xamarin Introduction", "Xamarin.Android", "Xamarin.iOS", "XAML", "XML", "XSLT", "Zend framework"
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

  useEffect(() => {
    if (user) {
      const fetchTrainerData = async () => {
        try {
          const response = await fetch(`http://52.88.246.113:8085/trainer/${user}`);
          if (response.ok) {
            const data = await response.json();
            console.log("fetched data", data);
            setForm(prev => ({
              ...prev,
              fullName: data.name || '',
              email: data.email || '',
              phone: data.phoneNumber || '',
              gender: data.gender || '',
              mappedTrainerType: data.mappedType || '',
              skills: data.skills || []
            }));
          } else {
            console.warn(`Trainer data for ${user} not found or could not be fetched.`);
            setForm(prev => ({ ...prev, fullName: '', email: '', phone: '', gender: '', mappedTrainerType: '', skills: [] }));
          }
        } catch (error) {
          console.error("Error fetching trainer data:", error);
          setMessage("Failed to load existing trainer data. Please try again later.");
          setIsError(true);
        }
      };
      fetchTrainerData();
    }
  }, [user]);

  const handleSkillsChange = (selectedOptions) => {
    setForm(prev => ({
      ...prev,
      skills: selectedOptions ? selectedOptions.map(option => option.value) : []
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const requestBody = {
    id: form.tmId,
    name: form.fullName,
    email: form.email,
    phoneNumber: form.phone,
    gender: form.gender,
    mappedType: form.mappedTrainerType,
    skills: form.skills
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://52.88.246.113:8085/updateInfo", {
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
        const errorData = await response.json();
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

  const MessageBox = ({ message, isError, onClose }) => {
    if (!message) return null;

    const messageBoxStyle = {
      position: 'fixed',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      padding: '15px 25px',
      borderRadius: '8px',
      color: 'white',
      zIndex: 1060,
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
      backgroundColor: isError ? '#dc3545' : '#28a745',
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
    <div className="d-flex justify-content-center align-items-center vh-100">
      <MessageBox message={message} isError={isError} onClose={() => setMessage('')} />

      <div className="card border-0 shadow-lg rounded-4" style={{ maxWidth: '850px', width: '90%', margin: '0 auto' }}>
        <div className="card-header bg-white border-bottom px-4 py-3 d-flex justify-content-between align-items-center">
          <h5 className="mb-0 text-primary" style={{ fontSize: '1.4rem' }}>
            <i className="bi bi-person-lines-fill me-2"></i>Update Trainer Information
          </h5>
          <span className="badge bg-secondary-subtle text-dark">Trainer Profile</span>
        </div>

        <div className="card-body px-5 py-5">
          <form onSubmit={handleSubmit} className="row g-4">
            <div className="col-md-6">
              <label className="form-label" style={{ fontSize: '0.85rem' }}>Trainer ID </label>
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-person-badge"></i></span>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="tmId"
                  value={form.tmId}
                  readOnly
                  style={{
                    fontSize: '0.9rem',
                    backgroundColor: '#e9ecef',
                    color: '#6c757d',
                    cursor: 'not-allowed'
                  }}
                />
              </div>
            </div>

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
                  <option value="" disabled>Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

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
                  <option value="" disabled>Select</option>
                  <option>Internal</option>
                  <option>External</option>
                </select>
              </div>
            </div>

            {/* Skills - Now using AsyncSelect with search and suggestion */}
            {/* <div className="col-md-6">
              <label className="form-label" style={{ fontSize: '0.85rem' }}>Skills <span className="text-danger">*</span></label>
              <div className="input-group">
                <span className="input-group-text" style={{ borderRight: 'none', paddingRight: '0.5rem' }}>
                  <i className="bi bi-tools"></i>
                </span>
                <AsyncSelect
                  isMulti 
                  name="skills"
                  cacheOptions
                  loadOptions={loadSkillOptions} // Function to load suggestions
                  onChange={handleSkillsChange}
                  // Map the current form.skills array to the format React-Select expects for 'value'
                  value={form.skills.map(s => ({ label: s, value: s }))}
                  className="react-select-container"
                  classNamePrefix="react-select"
                  styles={{
                    control: (base) => ({
                      ...base,
                      minHeight: '48px',
                      fontSize: '0.9rem',
                      borderTopLeftRadius: '0',
                      borderBottomLeftRadius: '0',
                      borderColor: 'rgba(0, 0, 0, 0.175)',
                      boxShadow: 'none',
                      '&:hover': {
                        borderColor: 'rgba(0, 0, 0, 0.25)',
                      },
                      
                      flex: 1, 
                    }),
                    valueContainer: (base) => ({
                      ...base,
                      paddingLeft: '0.75rem',
                      
                      display: 'flex',
                      flexWrap: 'wrap', 
                      alignItems: 'center',
                      minHeight: '38px',         
                      overflow: 'hidden', 
                    }),
                    input: (base) => ({
                      ...base,
                      width: '100%', 
                     
                      minWidth: '170px',
                      
                      flex: 1, 
                    }),
                    placeholder: (base) => ({
                      ...base,
                      fontSize: '0.9rem',
                      whiteSpace: 'nowrap', 
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }),
                    multiValue: (base) => ({
                      ...base,
                      
                    }),
                    multiValueLabel: (base) => ({
                      ...base,
                      fontSize: '0.85rem',
                    }),
                    option: (base) => ({
                      ...base,
                      fontSize: '0.9rem',
                    }),
                  }}
                  placeholder="Type to search skills"
                  required 
                />
              </div>
            </div> */}
            <div className="col-md-6">
            <label className="form-label" style={{ fontSize: '0.85rem' }}>Skills</label>
            <AsyncSelect
              isMulti
              cacheOptions
              loadOptions={loadSkillOptions}
              onChange={handleSkillsChange}
              value={form.skills.map(s => ({ label: s, value: s }))}
              placeholder="Type to search skills"
              styles={{ placeholder: base => ({ ...base, fontSize: '0.9rem' }) }}
            />
          </div>

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