// import { useContext, useEffect, useState } from 'react'
// import { Usercontext } from '../../App'

// const Notification = () => {
//     const {user} = useContext(Usercontext)
//   const [efforts, setEfforts] = useState([])
//   const [selectedStatus,setSelectedStatus] = useState();

//   useEffect(() => {
//     fetch(`http://localhost:8085/approvalStatus/${user}`) // your backend URL
//       .then(res => res.json())
//       .then(data => {
//         console.log(user)
//         console.log(data)
//         setEfforts(data)
//       })
//       .catch(err => {
//         console.error('Failed to fetch efforts:', err)
//         alert('Error fetching pending efforts.')
//       })
//   }, [])

//   const handleAction = async (effortId, action) => {
//     try {
//       const res = await fetch(`http://localhost:5000/api/efforts/${effortId}/${action}`, {
//         method: 'POST',
//       })

//       if (!res.ok) throw new Error('Failed to update')

//       setEfforts(prev => prev.filter(e => e.id !== effortId)) // remove from list
//       alert(`Effort ${action}ed successfully`)
//     } catch (err) {
//       console.error(err)
//       alert(`Failed to ${action} effort`)
//     }
//   }

//   return (
//     <div className="container-fluid m-2 py-4 px-3 bg-light min-vh-100">

//       <div className=" m-2 row justify-content-center">
//         <div className="col-12 col-lg-10">
//           <h4 className="text-primary mb-4">Notifications</h4>

//           {efforts.length === 0 ? (
//             <div className="alert alert-info">No Notifications.</div>
//           ) : (
//             efforts.map(effort => (
//               <div key={effort.info.id} className={"card shadow-sm border-0 mb-4 "+ (effort.status === 'accept' 
//                 ? "mt-2 text-success bg-transparent py-2" 
//                 : effort.status === 'reject' 
//                 ? "mt-2 border-danger text-danger" 
//                 : effort.status === 'Pending' 
//                 ? "mt-2 border-warning text-warning" 
//                 : "")
//               } >
//                 <div className="card-body">
//                   <div className="d-flex justify-content-between align-items-center mb-2">
//                     <h6 className="mb-0 text-dark">
//                       {effort.info.id} <span className="text-muted">({effort.info.cohortCode})</span>
//                     </h6>

//                     <div className="">
//                         <span className="badge bg-secondary">{effort.info.date}</span><br/>
//                         <span className={"badge bg-secondary " + (effort.status === 'accept' ? " mt-2 text-white   px-2 py-2 " : "  mt-2 text-white  py-2 px-2 ")}>
//                         {effort.status}
//                         </span>
//                     </div>
                    
                  
//                   </div>

//                   <p className="mb-1"><strong>Topic:</strong> {effort.topic}</p>
//                   <p className="mb-1"><strong>Hours:</strong> {effort.effortHours}</p>
//                   <p className="mb-2"><strong>Highlights:</strong> {effort.highlights}</p>
//                   {   
//                     effort.status === 'reject'?(
                      
//                       <p className="mb-2"><strong>Remarks:</strong> {effort.remarks}</p>
                      

//                     ):(
//                       <></>
//                     )
//                   }

//                 </div>
//               </div>
            

//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Notification

import { useContext, useEffect, useState } from 'react'
import { Usercontext } from '../../App'

const Notification = () => {
  const { user } = useContext(Usercontext)
  const [efforts, setEfforts] = useState([])
  const [selectedStatus, setSelectedStatus] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [sortOrder, setSortOrder] = useState('asc')

  useEffect(() => {
    fetch(`http://localhost:8085/approvalStatus/${user}`)
      .then(res => res.json())
      .then(data => setEfforts(data))
      .catch(err => {
        console.error('Failed to fetch efforts:', err)
        alert('Error fetching pending efforts.')
      })
  }, [])

  const toggleSortOrder = () => {
    setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'))
  }

  const filteredEfforts = efforts.filter(effort => {
    return (
      (selectedStatus === '' || effort.status === selectedStatus) &&
      (selectedDate === '' || effort.info.date === selectedDate)
    )
  })

  const sortedEfforts = [...filteredEfforts].sort((a, b) => {
    const dateA = new Date(a.info.date)
    const dateB = new Date(b.info.date)
    return sortOrder === 'asc' ? dateA - dateB : dateB - dateA
  })

  const getUniqueDates = () => [...new Set(efforts.map(e => e.info.date))]

  return (
    <div className="container-fluid m-2 py-4 px-3 bg-light min-vh-100">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <h4 className="text-primary mb-4">Notifications</h4>

          <div className="row mb-3">
            <div className="col-md-6">
              <select
                className="form-select"
                value={selectedStatus}
                onChange={e => setSelectedStatus(e.target.value)}
              >
                <option value="">All </option>
                <option value="accept">Accepted</option>
                <option value="reject">Rejected</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
            <div className="col-md-6">
              <select
                className="form-select"
                value={selectedDate}
                onChange={e => setSelectedDate(e.target.value)}
              >
                <option value="">All Dates</option>
                {getUniqueDates().map(date => (
                  <option key={date} value={date}>{date}</option>
                ))}
              </select>
            </div>
          </div>

          {sortedEfforts.length === 0 ? (
            <div className="alert alert-info">No Notifications.</div>
          ) : (
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead className="table-primary">
                  <tr>
                    <th>ID</th>
                    <th>Cohort</th>
                    <th style={{ cursor: 'pointer' }} onClick={toggleSortOrder}>
                      Date {sortOrder === 'asc' ? '▲' : '▼'}
                    </th>
                    <th>Status</th>
                    <th>Topic</th>
                    <th>Hours</th>
                    <th>Highlights</th>
                    <th>Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedEfforts.map(effort => (
                    <tr key={effort.info.id}>
                      <td>{effort.info.id}</td>
                      <td>{effort.info.cohortCode}</td>
                      <td>{effort.info.date}</td>
                      <td className={`fw-bold ${
                        effort.status === 'accept'
                          ? 'text-success'
                          : effort.status === 'reject'
                          ? 'text-danger'
                          : 'text-warning'
                      }`}>
                        {effort.status}
                      </td>
                      <td>{effort.topic}</td>
                      <td>{effort.effortHours}</td>
                      <td>{effort.highlights}</td>
                      <td>{effort.status === 'reject' ? effort.remarks : '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Notification
