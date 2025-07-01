import React, { useState } from 'react';
import axios from 'axios';
import { FaUserTie, FaUserGraduate, FaCalendarAlt, FaDownload, FaFileExcel, FaArrowRight } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// --- FILTER OPTIONS CONFIGURATION ---
const FILTER_OPTIONS = [
    { type: 'hrId', label: 'HR ID', icon: <FaUserTie /> },
    { type: 'trainerId', label: 'Trainer ID', icon: <FaUserGraduate /> },
    { type: 'dateRange', label: 'Date Range', icon: <FaCalendarAlt /> },
    { type: 'monthYear', label: 'Month & Year', icon: <FaCalendarAlt /> },
    { type: 'trainerDateRange', label: 'Trainer + Date Range', icon: <FaUserGraduate /> },
    { type: 'trainerMonthYear', label: 'Trainer + Month & Year', icon: <FaUserGraduate /> },
    { type: 'hrDateRange', label: 'HR + Date Range', icon: <FaUserTie /> },
    { type: 'hrMonthYear', label: 'HR + Month & Year', icon: <FaUserTie /> },
];

// --- MAIN COMPONENT ---
const DownloadData = () => {
    const [filterType, setFilterType] = useState('');
    const [hrId, setHrId] = useState('');
    const [trainerId, setTrainerId] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [loading, setLoading] = useState(false);

    // Reset all input fields
    const resetInputs = () => {
        setHrId('');
        setTrainerId('');
        setStartDate('');
        setEndDate('');
        setMonth('');
        setYear('');
    };

    // Handle filter selection
    const handleFilterSelection = (type) => {
        setFilterType(type);
        resetInputs();
    };

    // Construct download URL
    const getDownloadUrl = () => {

        const BASE_URL = 'http://localhost:8081'; // Using a base URL for cleaner routes
        switch (filterType) {
            case 'hrId':
                return `${BASE_URL}/download/${hrId}`;
            case 'trainerId':
                return `${BASE_URL}/downloadByTrainerId/${trainerId}`;
            case 'dateRange':
                return `${BASE_URL}/effortBetweenDates?startDate=${startDate}&endDate=${endDate}`;
            case 'monthYear':
                return `${BASE_URL}/effortByMonthAndYear?month=${month}&year=${year}`;
            case 'trainerDateRange':
                return `${BASE_URL}/effortIdBasedOnRange?Id=${trainerId}&startDate=${startDate}&endDate=${endDate}`;
            case 'trainerMonthYear':
                return `${BASE_URL}/effortIdBasedOnMonth?Id=${trainerId}&month=${month}&year=${year}`;
            case 'hrDateRange':
                return `${BASE_URL}/effortHrBasedOnRange?hrId=${hrId}&startDate=${startDate}&endDate=${endDate}`;
            case 'hrMonthYear':
                return `${BASE_URL}/effortHrBasedOnMonth?hrId=${hrId}&month=${month}&year=${year}`;
            default:
                return '';
        }
    };

    // Handle the download process
    const handleDownload = async () => {
        const url = getDownloadUrl();
        if (!url || (filterType.includes('hr') && !hrId) || (filterType.includes('trainer') && !trainerId) || (filterType.includes('DateRange') && (!startDate || !endDate)) || (filterType.includes('MonthYear') && (!month || !year))) {
            toast.warn('Please select a filter and fill all required fields.');
            return;
        }

        setLoading(true);
        try {
            const response = await axios.get(url, { responseType: 'blob' });
            console.log(response)
            const blob = new Blob([response.data], {
                type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            });

            const downloadUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.setAttribute('download', 'EffortData.xlsx');
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(downloadUrl);

            toast.success('✅ Download started successfully!');
        } catch (err) {
            toast.error('❌ Download failed. Please check your inputs.');
            console.error('Download error:', err);
        } finally {
            setLoading(false);
        }
    };
    
    // Render input fields based on filter type
    const renderInputs = () => {
        const showHrId = filterType === 'hrId' || filterType.includes('hr');
        const showTrainerId = filterType === 'trainerId' || filterType.includes('trainer');
        const showDateRange = filterType.includes('DateRange') || filterType === 'dateRange';
        const showMonthYear = filterType.includes('MonthYear') || filterType === 'monthYear';

        return (
            <div className={`input-fields-container ${filterType ? 'visible' : ''}`}>
                <div className="row g-3">
                    {showHrId && (
                        <div className="col-12">
                            <label className="form-label">HR ID</label>
                            <input type="text" className="form-control" placeholder="Enter HR ID" value={hrId} onChange={(e) => setHrId(e.target.value)} />
                        </div>
                    )}
                    {showTrainerId && (
                        <div className="col-12">
                             <label className="form-label">Trainer ID</label>
                            <input type="text" className="form-control" placeholder="Enter Trainer ID" value={trainerId} onChange={(e) => setTrainerId(e.target.value)} />
                        </div>
                    )}
                    {showDateRange && (
                        <>
                            <div className="col-md-6">
                                <label className="form-label">Start Date</label>
                                <input type="date" className="form-control" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                            </div>
                            <div className="col-md-6">
                                 <label className="form-label">End Date</label>
                                <input type="date" className="form-control" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                            </div>
                        </>
                    )}
                    {showMonthYear && (
                        <>
                            <div className="col-md-6">
                                <label className="form-label">Month</label>
                                <input type="text" className="form-control" placeholder="e.g., 06" value={month} onChange={(e) => setMonth(e.target.value)} />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Year</label>
                                <input type="text" className="form-control" placeholder="e.g., 2025" value={year} onChange={(e) => setYear(e.target.value)} />
                            </div>
                        </>
                    )}
                </div>
            </div>
        );
    };

    return (
        <>
            {/* --- STYLES --- */}
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />

            <style>
                {`
                    :root {
                        --primary-color: #000048;
                        --primary-hover:rgb(209, 185, 240);
                        --light-gray: #f3f4f6;
                        --medium-gray: #e5e7eb;
                        --dark-gray: #4b5563;
                        --text-color: #1f2937;
                        --card-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
                        --border-radius: 0.75rem;
                    }
                    body {
                        font-family: 'Poppins', sans-serif;
                        background-color: var(--light-gray);
                        color: var(--text-color);
                    }
                    .download-container {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        min-height: 100vh;
                        padding: 2rem;
                    }
                    .download-card {
                        background-color: white;
                        border-radius: var(--border-radius);
                        box-shadow: var(--card-shadow);
                        overflow: hidden;
                        width: 100%;
                        max-width: 900px;
                    }
                    .card-header-custom {
                        background: linear-gradient(90deg,#000048,rgb(39, 4, 99));
                        color: white;
                        padding: 1.5rem;
                        display: flex;
                        align-items: center;
                        gap: 1rem;
                    }
                    .card-header-custom h2 {
                        margin: 0;
                        font-weight: 600;
                        font-size: 1.5rem;
                    }
                    .main-content {
                        display: grid;
                        grid-template-columns: 1fr;
                    }
                    @media (min-width: 768px) {
                        .main-content {
                            grid-template-columns: 1fr 1fr;
                        }
                    }
                    .filter-section {
                        padding: 2rem;
                        border-bottom: 1px solid var(--medium-gray);
                    }
                     @media (min-width: 768px) {
                        .filter-section {
                           border-right: 1px solid var(--medium-gray);
                           border-bottom: none;
                        }
                    }
                    .filter-title {
                        font-weight: 600;
                        margin-bottom: 1.5rem;
                        color: var(--text-color);
                    }
                    .filter-options-grid {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 1rem;
                    }
                    .filter-button {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        gap: 0.5rem;
                        padding: 1rem;
                        border-radius: var(--border-radius);
                        border: 2px solid var(--medium-gray);
                        transition: all 0.2s ease-in-out;
                        background-color: white;
                        color: var(--dark-gray);
                        text-align: center;
                        font-weight: 500;
                    }
                    .filter-button:hover {
                        border-color: var(--primary-color);
                        color: var(--primary-color);
                        transform: translateY(-2px);
                    }
                    .filter-button.active {
                        background-color: #e0e7ff;
                        border-color: var(--primary-color);
                        color: var(--primary-color);
                        font-weight: 600;
                    }
                    .filter-button .icon {
                        font-size: 1.5rem;
                    }
                    .input-section {
                        padding: 2rem;
                    }
                    .input-fields-container {
                        opacity: 0;
                        transform: translateY(10px);
                        transition: opacity 0.4s ease, transform 0.4s ease;
                        min-height: 200px;
                    }
                    .input-fields-container.visible {
                        opacity: 1;
                        transform: translateY(0);
                    }
                    .form-label {
                        font-weight: 500;
                        margin-bottom: 0.5rem;
                        font-size: 0.875rem;
                    }
                    .form-control {
                        border-radius: 0.5rem;
                        padding: 0.75rem 1rem;
                        border: 1px solid var(--medium-gray);
                    }
                    .form-control:focus {
                        border-color: var(--primary-color);
                        box-shadow: 0 0 0 2px #c7d2fe;
                    }
                    .btn-download {
                        background: linear-gradient(90deg, #4f46e5,rgb(39, 99, 168));
                        color: white;
                        border: none;
                        padding: 0.85rem 2rem;
                        border-radius: 0.5rem;
                        font-weight: 600;
                        transition: all 0.3s ease;
                        display: inline-flex;
                        align-items: center;
                        gap: 0.75rem;
                    }
                    .btn-download:hover {
                        transform: translateY(-3px);
                        box-shadow: 0 4px 10px rgba(79, 70, 229, 0.4);
                    }
                    .btn-download:disabled {
                        background: var(--medium-gray);
                        cursor: not-allowed;
                    }
                `}
            </style>

            {/* --- COMPONENT JSX --- */}
            <div className="download-container">
                <div className="download-card">
                    <div className="card-header-custom">
                        <FaFileExcel size={32} />
                        <h2>Download Effort Data</h2>
                    </div>
                    <div className="main-content">
                        <div className="filter-section">
                            <h3 className="filter-title">Choose a Filter</h3>
                            <div className="filter-options-grid">
                                {FILTER_OPTIONS.map(({ type, label, icon }) => (
                                    <button
                                        key={type}
                                        className={`filter-button ${filterType === type ? 'active' : ''}`}
                                        onClick={() => handleFilterSelection(type)}
                                    >
                                        <div className="icon">{icon}</div>
                                        <span>{label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="input-section">
                            <h3 className="filter-title">Enter Details</h3>
                            {renderInputs()}
                             <div className="text-center mt-4 ">
                                <button
                                    className="btn-download "
                                    onClick={handleDownload}
                                    disabled={loading || !filterType}
                                >
                                    {loading ? '🔄 Downloading...' : (
                                        <>
                                            <FaDownload /> Download Excel
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer position="bottom-right" autoClose={4000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
        </>
    );
};

export default DownloadData;