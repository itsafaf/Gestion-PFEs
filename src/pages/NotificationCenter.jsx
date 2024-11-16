import React, { useState } from "react";
import { FaCheckCircle, FaTimesCircle, FaExclamationCircle } from "react-icons/fa";
import Nav from "../components/Nav/Nav"; // Assuming your Nav component is already set up
import Footer from "../components/Footer/Footer"; // Assuming your Footer component is already set up
import "./css/NotificationCenter.css"; // Custom CSS for your styling

const NotificationCenter = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'info', message: 'Your project proposal has been approved', status: 'Pending', timestamp: '2023-06-10T09:00:00Z' },
    { id: 2, type: 'warning', message: 'Deadline for submitting progress report is approaching', status: 'Pending', timestamp: '2023-06-09T14:30:00Z' },
    { id: 3, type: 'success', message: 'You have been assigned to a new project', status: 'Read', timestamp: '2023-06-08T11:15:00Z' },
    { id: 4, type: 'error', message: 'Failed to upload document. Please try again.', status: 'Read', timestamp: '2023-06-07T16:45:00Z' },
  ]);

  const handleAction = (id, newStatus) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id ? { ...notif, status: newStatus } : notif
      )
    );
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit'
    });
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'info':
        return <FaCheckCircle className="text-info-foreground" />;
      case 'warning':
        return <FaExclamationCircle className="text-warning-foreground" />;
      case 'success':
        return <FaCheckCircle className="text-success-foreground" />;
      case 'error':
        return <FaTimesCircle className="text-error-foreground" />;
      default:
        return <FaExclamationCircle />;
    }
  };

  return (
    <div className="landing-page">
      <Nav />
      <section className="main-content">
        <h1 className="main-title">Notification Center</h1>
        <p className="main-subtitle">Stay updated with your project activities.</p>
      </section>

      <section className="card-container">
        <table className="notification-table">
          <thead>
            <tr>
              <th>Notification</th>
              <th>Status</th>
              <th>Timestamp</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {notifications.map((notif) => (
              <tr key={notif.id}>
                <td>
                  <div className="flex items-center">
                    {getNotificationIcon(notif.type)}
                    <span className="ml-2">{notif.message}</span>
                  </div>
                </td>
                <td>
                  <span className={`status-badge ${notif.status.toLowerCase()}`}>
                    {notif.status}
                  </span>
                </td>
                <td>{formatTimestamp(notif.timestamp)}</td>
                <td>
                  <button
                    className="cta-button"
                    onClick={() => handleAction(notif.id, "Read")}
                  >
                    Mark as Read
                  </button>
                  <button
                    className="cta-button reject"
                    onClick={() => handleAction(notif.id, "Deleted")}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <Footer />
    </div>
  );
};

export default NotificationCenter;
