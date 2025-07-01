// import { useState } from 'react';
// import Select from 'react-select';
// import 'bootstrap-icons/font/bootstrap-icons.css';
 
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
//  // Define options for the Role dropdown
// //  const roleOptions = [
// //   { value: '', label: 'Select Role' }, // Optional: A default "Select Role" option
// //   { value: 'Trainer', label: 'Trainer' },
// //   { value: 'Mentor', label: 'Mentor' },
// //   { value: 'Buddy Mentor', label: 'Buddy Mentor' },
// // ];
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);
 
//   const primaryColor = '#000048';
//   const hoverColor = '#1a1a80';
 
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
//           value.forEach((v) => params.append(key, v));
//         } else if (value !== '') {
//           params.append(key, value);
//         }
//       });
 
//       const response = await fetch(`http://52.88.246.113:8081/search?${params.toString()}`);
//       if (!response.ok) throw new Error('Failed to fetch trainers');
 
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
//     <div className="card border-0 shadow-lg rounded-4">
//       <div
//         className="card-header bg-white border-bottom px-2 py-3 d-flex justify-content-between align-items-center"
//         style={{ borderBottom: `2px solid ${primaryColor}` }}
//       >
//         <h5 className="mb-0 text-primary">
//           <i className="bi bi-search me-2"></i>Search Trainers
//         </h5>
//         <span className="badge text-bg-light border" style={{ color: primaryColor, borderColor: primaryColor }}>
//           HR Panel
//         </span>
//       </div>
 
//       <div className="card-body px-4 py-5">
//         <form onSubmit={handleSearch} className="row g-4">
//           <div className="col-md-4">
//             <label className="form-label" style={{ fontSize: '0.85rem' }}>
//               <i className="bi bi-person-fill me-2"></i>Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               className="form-control"
//               value={filters.name}
//               onChange={handleChange}
//               style={{ fontSize: '0.9rem' }}
//               placeholder="Enter name"
//             />
//           </div>
 
//           {/* <div className="col-md-2">
//             <label className="form-label" style={{ fontSize: '0.85rem' }}>
//               <i className="bi bi-bar-chart-line me-2"></i>Min Exp
//             </label>
//             <input
//               type="number"
//               name="minExp"
//               className="form-control"
//               value={filters.minExp}
//               onChange={handleChange}
//               style={{ fontSize: '0.9rem' }}
//               placeholder="0"
//             />
//           </div>
 
//           <div className="col-md-2">
//             <label className="form-label" style={{ fontSize: '0.85rem' }}>
//               <i className="bi bi-bar-chart-line-fill me-2"></i>Max Exp
//             </label>
//             <input
//               type="number"
//               name="maxExp"
//               className="form-control"
//               value={filters.maxExp}
//               onChange={handleChange}
//               style={{ fontSize: '0.9rem' }}
//               placeholder="10"
//             />
//           </div> */}
 
//           <div className="col-md-4">
//             <label className="form-label" style={{ fontSize: '0.85rem' }}>
//               <i className="bi bi-tools me-2"></i>Skills
//             </label>
//             <Select
//               isMulti
//               name="skills"
//               options={skillOptions}
//               className="basic-multi-select"
//               classNamePrefix="select"
//               onChange={handleSkillsChange}
//               value={skillOptions.filter((option) => filters.skills.includes(option.value))}
//               placeholder="Select skills"
//               styles={{ placeholder: (base) => ({ ...base, fontSize: '0.9rem' }) }}
//             />
            
//           </div>
 
//            <div className="col-md-4">
//             <label className="form-label" style={{ fontSize: '0.85rem' }}>
//               <i className="bi bi-person-badge me-2"></i>Role
//             </label>
//             <select
//               name="role"
//               className="form-select"
//               value={filters.role}
//               onChange={handleChange}
//               style={{ fontSize: '0.9rem' }}
//             >
//               <option value="" selected>Select Role</option>
//               <option value="Trainer">Trainer</option>
//               <option value="Mentor">Mentor</option>
//               <option value="Buddy Mentor">Buddy Mentor</option>
//             </select>
//           </div>

//           <div className="col-md-4">
//             <label className="form-label" style={{ fontSize: '0.85rem' }}>
//               <i className="bi bi-person-check-fill me-2"></i>Mapped Trainer Type
//             </label>
//             {/* <input
//               type="text"
//               name="mappedType"
//               className="form-control"
//               value={filters.mappedType}
//               onChange={handleChange}
//               placeholder="Internal / External"
//               style={{ fontSize: '0.9rem' }}
//             /> */}
//             <select
//               name="mappedType"
//               className="form-select"
//               value={filters.mappedType}
//               onChange={handleChange}
//               style={{ fontSize: '0.9rem' }}
//             >
//               <option value="" selected>Select </option>
//               <option value="Internal">Internal</option>
//               <option value="External">External</option>
//             </select>
//           </div>
 
//           <div className="col-md-4">
//             <label className="form-label" style={{ fontSize: '0.85rem' }}>
//               <i className="bi bi-gender-ambiguous me-2"></i>Gender
//             </label>
//             {/* <input
//               type="text"
//               name="gender"
//               className="form-control"
//               value={filters.gender}
//               onChange={handleChange}
//               placeholder="Male / Female / Other"
//               style={{ fontSize: '0.9rem' }}
//             /> */}
//             <select
//               name="gender"
//               className="form-select"
//               value={filters.gender}
//               onChange={handleChange}
//               style={{ fontSize: '0.9rem' }}
//             >
//               <option value="" selected>Select </option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//             </select>
//           </div>
 
//           <div className="col-12 mt-3 d-flex justify-content-center">
//             <button
//               type="submit"
//               className="btn btn-ms w-25 shadow"
//               style={{
//                 backgroundColor: primaryColor,
//                 borderColor: primaryColor,
//                 color: 'white',
//                 transition: 'background-color 0.3s ease',
//                 marginTop:'30px'
//               }}
//               onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
//               onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = primaryColor)}
//               disabled={loading}
//             >
//               <i className="bi bi-search me-2"></i>{loading ? 'Searching...' : 'Search'}
//             </button>
//           </div>
//         </form>
 
        
         
//           {results.length >0 && (
//             <div>
//             <h6 className="text-secondary">Results:</h6>
//             <ul className="list-group">
//               {results.map((trainer, index) => (
//                 <li key={index} className="list-group-item">
//                   <strong>{trainer.name}</strong> — {trainer.email} — {trainer.skills?.join(', ')}
//                 </li>
//               ))}
//             </ul>
//             </div>
//           )}
//         </div>
      
//     </div>
//   );
// };
 
// export default Search;
 
import { useState } from 'react';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
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

    // Full list of skills from AddTrainer component
    const allSkills = [
        ".Net", ".Net 6", ".Net advanced features", "ABAP", "Abinitio", "Accessibility", "ADO.Net", "Adobe Target", "ADT", "Advanced C", "AEM topics", "After Effects", "AgencyPort", "Agile basics", "Amazon Connect", "Amazon DynamoDB concepts", "Amazon Relational Database Service (RDS)", "Analytics", "Android Basics and Advanced", "Android Interface guidelines for Mobile (Material design)", "Angular", "Animate CC", "Ansible", "ANT/NANT", "API Automation Testing", "Apigee", "App Stores (Public/Enterprise)", "AppDynamics Fundamentals", "Appian", "Apple Human Interface guidelines for Mobile (Cupertino)", "Application debugging concepts", "Application fundamentals", "Application Monitor", "Apps DBA", "Architectural patterns", "Ariba", "ARM Template", "Articulate Storyline", "AS400", "ASP.Net", "ASP.Net MVC 5", "Audacity / Audition", "Audience Manager", "Automation and analytics tools", "Automation basics", "Automation testing - Selenium", "Automation Tool : UFT", "Averisource", "AVM", "AWS", "AWS and Azure", "AWS and Cloud Computing Fundamentals", "AWS Developer", "AWS Elasticity & Management Tools", "AWS Essentials, DPP Masterclass and IBM Guardium", "AWS Fundamentals & Developer Associate", "AWS Identity and Access Management (IAM)", "AWS PaaS Services- SNS, SQS, SES", "Axway API", "Azure", "Azure Administrator", "Azure Backup", "Azure basics", "Azure CLI", "Azure IAM basics", "Azure IOT", "Azure Pipelines", "Azure Queue Storage", "Azure Service Bus", "B2B", "Bash Shell Scripting", "BDD", "BI", "BigData", "Blob storage", "Blueprism and RPA", "BootStrap4", "BPM products", "Brightedge", "C", "C# 10", "C++", "C4C", "Callidus", "Camilion", "Camunda", "Captivate", "Certificate Manager", "CI/CD", "CICS", "Cisco ASA", "CLLE", "Cloud Basics", "Cloud Computing", "Cloud Fundamentals", "Cloud Identity", "CLP", "CMS", "COBOL", "Cognos", "Compliance management", "Compliance wire LMS", "Components (nuget packages)", "CompTIA Security", "Computer Networks", "Concur", "Confluence Fundamentals", "Container Orchestration", "Container Orchestration thru Azure", "Content Management System", "Content QA - Manual Testing", "Cosmos", "CPI", "Creating brand identity", "CRM", "Cryptography Fundamentals", "CSC - Exceed", "CSC - PMSC", "CSoD", "CSS3", "Cucumber", "Cyber Security", "Cyber security basics", "Cyber Threat Intelligence", "CyberLife", "D365", "Data Obscure & Vormetric", "Data storage", "Data Structures", "Database Fundamentals", "DataStage", "Datastructures and Algorithm", "DB2", "Deep Learning", "Define", "Design Mindset", "Design Patterns and Principles", "Design Principles (Accessibility, Multi Language Support, Themes, Security, Performance, locale)", "Design Systems", "Designing and Implementing Microsoft DevOps Solutions", "Device features", "devices", "DevOps", "Devops Basics", "Digital Analytics", "Digital Marketing and Siebel", "Digital Overview", "Digital Overview, Security", "Docker", "Domain", "Domain GEB", "Domain Life", "DRUPAL", "Duck Creek", "DW Basics", "DW fundamentals", "eBao Generalsystem", "eBao Lifesystem", "eBaoTech General System", "eBiz", "EDM", "eLearning Services Overview & Induction", "Eloqua", "Email Security", "Empathy", "Endpoint & Email Security", "Endpoint and EDR, SIEM/SOC", "Engineering concepts", "Enterprise Mobile Apps", "Entity Framework Core 6", "EPM", "ETL Concepts", "Exigen", "Exigen GEB", "Facets", "FAST", "Finance HCM", "FINEOS", "Firewall", "Firewalls", "FNZ", "Functional Testing", "Fundamental & Types of Storage", "Fundamentals Java Programming", "Fundamentals of Cloud Computing", "Fundamentals of Linux and Windows", "Fusion middleware", "Gamification", "Gateway", "GCP (Google Cloud Platform)", "GCP Console & Cloud Shell", "GCP Projects & Infrastructure", "GDPR and Privacy", "Genesys Cloud", "Genius", "GIS", "Git", "Glacier", "Google Ads", "Google Analytics - Web", "Google Campaign Manager 360", "Google Compute Engine", "Google Data Analytics and Data Studio", "Google Display & Video 360", "Google Tag Management", "GRC : Risk Management", "Group EB", "Guidewire", "Health Care Domain Training", "Hibernate", "HR", "HTML5", "Hybris", "IBM BPM", "IBM Sterling", "Ideate", "IDS/IPS", "IG HUON", "IIB", "IICS", "Illustrator", "Incident Detection and Investigation", "Informatica", "Informatica DQ", "Informatica MDM", "Informatica Powercenter", "Infra Database and Data Models", "Ingenium", "Ingenium Specifics", "Insbridge", "InsuranceNow", "Insurity", "Introduction of Web Architecture and Technologies", "Introduction to immersive Medias", "Introduction to ML & AI", "Introduction to Mobile platforms", "IO Topics", "Ionic Framework", "IOS Basics and Advanced", "IOT CS Topics", "ISPF", "iTello", "ITIL", "IVM : Certified Ethical Hacker", "IVM : DAST, Penetration Testing", "IVM : Malware Analysis", "IVM : Overview", "IVM : Threat Monitoring and Penetration Testing", "J2EE", "Java & PI", "Java 8, Java 11, Java 12, Java 17", "JavaScript", "JBPM", "JCL", "JDBC", "JDE Functional", "JDE Technical", "Jenkins", "Jira", "JPA", "jQuery", "JSP", "JUnit", "KMS", "Kong", "Kronos work force management", "Kubernetes", "Lambda and API Gateway", "Laws of Design", "Life Claims", "Life Compensation", "Life New Business", "Life of a Graphic Designer", "Life of a Programmer", "Life of an Instructional Designer", "Lifecad", "LifeEngage", "Linux", "Linux Basics and Shell Script basics", "Linux Server Administration", "LMS", "Load Balancer", "Logging and Continuous Code Quality", "Magento", "Marketing Collaterals", "Marketo", "Maven", "Mean Stack", "Mern Stack", "Messaging & Collaboration", "Microservices", "Microservices with Spring CLoud", "Microsoft Azure", "Microsoft Azure Fundamentals", "Middleware Technologies", "MongoDB", "MQ", "MS AX", "MSCRM", "Mulesoft", "Multifactor Authentication (MFA)", "MySQL", "Netsuite Functional", "Netsuite Technical", "Network Essentials", "Networking Concepts and Protocols", "Networking Essentials ", "Node JS", "NUnit", "OBIEE", "ODI", "OIPA", "OMNI", "On Job Training- eDetailing & Web", "On the job training", "OneShield", "OpenText", "Oracle Cloud", "Oracle Digital technologies", "Oracle Fundamentals", "Oracle Integration", "Oracle PLSQL", "Oracle Python", "Oracle SQL", "OSP Peoplesoft", "PAM overview, Cyber Ark deep dive", "PE Topics", "Pega", "Performance Engineer", "Performance testing", "Photoshop", "PHP", "PI/PO", "PKI & Data discovery", "PLSQL", "POSTMAN", "PowerBI", "PowerShell", "Presentation", "Privileged Access Management", "ProductXpress", "Programmatic - DV360", "Programmatic / Display Marketing", "Prototype/Testing", "Proxy", "Python 3", "Python, Shell Scripting", "QlikSense", "QlikView", "QlikView and Autosys", "Ratabase", "React", "React JS", "React Native", "Reltio", "Reporting Concepts", "Responsive Web Design", "REST WS", "RestAPI", "RPG", "RPGLE", "RSA Archer : Audit Management", "RSA Archer : Field Types, Functionalities, DDE Services", "RSA Archer : Notifications and Schedules", "RSA Archer : Overview, Integrated Risk Management", "RSA Archer : Tools and Application Builder, Field Types", "Sailpoint/OKTA", "Salesforce", "SAP ABAB", "SAP ABAP", "SAP Analytics", "SAP Basis & Security", "SAP BO", "SAP BODS", "SAP BOIS", "SAP BW", "SAP BW on HANA", "SAP Fiori", "SAP Fundamentals", "SAP MDM", "SAP S/4HANA", "SAP TOSCA", "SAP UI5", "SAP WORKSOFT", "SAST", "SCM", "SDLC", "Security Testing", "Selenium", "Selenium Automation", "Selenium Frameworks, UFT Frameworks", "SEM", "SEMRush", "Sengage Cloud", "SEO", "Serverless logic", "Service Management", "Service Now", "Servlets", "SharePoint", "Shell Scripting", "Siebel", "SiteCore", "Sketches and Perspective Design", "SMM", "SOAP WS", "Software Engineering", "Software Support and Maintenance", "SoftwareAG", "SPA (Angular or React or Vue App) with Spring Boot", "Spark", "Splunk", "Spring", "Spring Core", "Spring Data JPA", "Spring MVC using Spring Boot", "Spring Rest", "Spring REST using Spring Boot 3", "SQL Server", "SQLRPGLE", "SSAS", "SSIS", "SSL/TLS Fundamentals", "SSRS", "Stibo", "Storage & Backup Fundamentals", "Storage - S3", "SuccessFactor", "Sumtotal", "SW Engineering", "Symphony framework", "Tableau", "Talend", "Teamcenter", "Technical Writing and Instructional Design", "Temenos", "Teradata", "Testing", "Theory of colors and understanding Folder structure", "TIBCO", "TSO", "Types of Storage", "Typescript", "UI & Scripting Technology", "UI Technology", "UI- SPA", "Unit testing", "Unix", "Unix and Shell Scripting", "Unix(Advanced)", "Unqork", "Unqork L&A", "Unqork Retirement", "UX-Design and tools", "V3", "Vantage", "Vantage GEB", "Varicent", "VBScript", "Versata", "Vertafore", "Virtualization/Hypervisor Fundamentals", "Visualization", "VPAS", "VSAM", "WAF", "Web API", "WebAPI Microservices", "Webservices", "Webstandards", "Windows Server 2016", "Windows Server Administration", "wmA", "Xamarin Introduction", "Xamarin.Android", "Xamarin.iOS", "XAML", "XML", "XSLT", "Zend framework"
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
        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    const handleSkillsChange = (selectedOptions) => {
        setFilters((prev) => ({
            ...prev,
            skills: selectedOptions ? selectedOptions.map(option => option.value) : [],
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

            const response = await fetch(`http://52.88.246.113:8081/search?${params.toString()}`);
            if (!response.ok) throw new Error('Failed to fetch trainers');

            const data = await response.json();
            setResults(data);
        } catch (error) {
            console.error('Search error:', error);
            console.log('Error fetching trainers. Check console for details.');
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

                    <div className="col-md-4">
                        <label className="form-label" style={{ fontSize: '0.85rem' }}>
                            <i className="bi bi-tools me-2"></i>Skills
                        </label>
                        <AsyncSelect
                            isMulti={true}
                            cacheOptions
                            loadOptions={loadSkillOptions}
                            onChange={handleSkillsChange}
                            value={filters.skills.map(s => ({ label: s, value: s }))}
                            placeholder="Type to search skills"
                            styles={{ placeholder: base => ({ ...base, fontSize: '0.9rem' }) }}
                        />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label" style={{ fontSize: '0.85rem' }}>
                            <i className="bi bi-person-badge me-2"></i>Role
                        </label>
                        <select
                            name="role"
                            className="form-select"
                            value={filters.role}
                            onChange={handleChange}
                            style={{ fontSize: '0.9rem' }}
                        >
                            <option value="" selected>Select Role</option>
                            <option value="Trainer">Trainer</option>
                            <option value="Mentor">Mentor</option>
                            <option value="Buddy Mentor">Buddy Mentor</option>
                        </select>
                    </div>

                    <div className="col-md-4">
                        <label className="form-label" style={{ fontSize: '0.85rem' }}>
                            <i className="bi bi-person-check-fill me-2"></i>Mapped Trainer Type
                        </label>
                        <select
                            name="mappedType"
                            className="form-select"
                            value={filters.mappedType}
                            onChange={handleChange}
                            style={{ fontSize: '0.9rem' }}
                        >
                            <option value="" disabled selected>Select </option>
                            <option value="Internal">Internal</option>
                            <option value="External">External</option>
                        </select>
                    </div>

                    <div className="col-md-4">
                        <label className="form-label" style={{ fontSize: '0.85rem' }}>
                            <i className="bi bi-gender-ambiguous me-2"></i>Gender
                        </label>
                        <select
                            name="gender"
                            className="form-select"
                            value={filters.gender}
                            onChange={handleChange}
                            style={{ fontSize: '0.9rem' }}
                        >
                            <option value="" disabled selected>Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
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

                {results.length > 0 && (
                    <div className="mt-5">
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