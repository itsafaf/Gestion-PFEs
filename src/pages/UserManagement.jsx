import React, { useState } from 'react';
import './css/UserManagement.css'; // Assuming a CSS file for styling

const UserManagement = () => {
  const [users, setUsers] = useState({
    students: [],
    teachers: [],
    companies: [],
  });

  const [newUser, setNewUser] = useState({
    type: '',
    email: '',
    firstName: '',
    lastName: '',
    additionalInfo: '',
  });

  const handleFileUpload = (event, userType) => {
    const file = event.target.files[0];
    alert(`${userType} data would be imported from ${file.name}`);
  };

  const handleAddUser = () => {
    if (newUser.type && newUser.email && newUser.firstName && newUser.lastName) {
      setUsers((prevUsers) => ({
        ...prevUsers,
        [newUser.type]: [...prevUsers[newUser.type], newUser],
      }));
      setNewUser({ type: '', email: '', firstName: '', lastName: '', additionalInfo: '' });
    }
  };

  const handleDeleteUser = (userType, email) => {
    setUsers((prevUsers) => ({
      ...prevUsers,
      [userType]: prevUsers[userType].filter((user) => user.email !== email),
    }));
  };

  return (
    <div className="user-management-container">
      <h2 className="title">User Management</h2>

      <div className="tabs">
        {['students', 'teachers', 'companies'].map((userType) => (
          <div key={userType} className="tab">
            <h3 className="tab-title">{userType.charAt(0).toUpperCase() + userType.slice(1)}</h3>
            <input
              type="file"
              accept=".csv"
              onChange={(e) => handleFileUpload(e, userType)}
              className="file-input"
            />
            <button className="import-btn">Import {userType}</button>

            <table className="user-table">
              <thead>
                <tr>
                  <th>Email</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users[userType].map((user, index) => (
                  <tr key={index}>
                    <td>{user.email}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>
                      <button
                        className="delete-btn"
                        onClick={() => handleDeleteUser(userType, user.email)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>

      <div className="add-user-section">
        <h3 className="section-title">Add New User</h3>
        <div className="form">
          <label htmlFor="userType">User Type:</label>
          <select
            id="userType"
            value={newUser.type}
            onChange={(e) => setNewUser({ ...newUser, type: e.target.value })}
          >
            <option value="">Select Type</option>
            <option value="students">Student</option>
            <option value="teachers">Teacher</option>
            <option value="companies">Company</option>
          </select>

          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />

          <label htmlFor="firstName">First Name:</label>
          <input
            id="firstName"
            type="text"
            value={newUser.firstName}
            onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
          />

          <label htmlFor="lastName">Last Name:</label>
          <input
            id="lastName"
            type="text"
            value={newUser.lastName}
            onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
          />

          <label htmlFor="additionalInfo">Additional Info:</label>
          <input
            id="additionalInfo"
            type="text"
            value={newUser.additionalInfo}
            onChange={(e) => setNewUser({ ...newUser, additionalInfo: e.target.value })}
          />

          <button className="add-btn" onClick={handleAddUser}>
            Add User
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;



