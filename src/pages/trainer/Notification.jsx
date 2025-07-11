
import { useContext, useEffect, useState } from 'react'
import { Usercontext } from '../../App'

const Notification = () => {
  const { user } = useContext(Usercontext)
  const [efforts, setEfforts] = useState([])
  const [selectedStatus, setSelectedStatus] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [sortOrder, setSortOrder] = useState('asc')

  useEffect(() => {
    fetch(`http://52.43.62.125:8085/approvalStatus/${user}`)
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
