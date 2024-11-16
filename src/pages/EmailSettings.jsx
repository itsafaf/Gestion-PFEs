import React, { useState } from "react";
import "./css/EmailSettings.css"; // Assuming a CSS file for styling

const EmailSettings = () => {
  const [emailSettings, setEmailSettings] = useState([
    { id: 1, type: "Project Proposal", sendDate: "2023-11-01", reminderDate: "2023-11-15", closingDate: "2023-11-30" },
    { id: 2, type: "Project Selection", sendDate: "2023-12-01", reminderDate: "2023-12-15", closingDate: "2023-12-31" },
    { id: 3, type: "Jury Assignment", sendDate: "2024-05-01", reminderDate: "2024-05-15", closingDate: "2024-05-31" },
  ]);

  const [newSetting, setNewSetting] = useState({
    type: "",
    sendDate: "",
    reminderDate: "",
    closingDate: "",
  });

  const handleAddSetting = () => {
    if (newSetting.type && newSetting.sendDate && newSetting.reminderDate && newSetting.closingDate) {
      setEmailSettings([...emailSettings, { ...newSetting, id: emailSettings.length + 1 }]);
      setNewSetting({ type: "", sendDate: "", reminderDate: "", closingDate: "" });
    }
  };

  const handleUpdateSetting = (id, field, value) => {
    setEmailSettings(
      emailSettings.map((setting) => (setting.id === id ? { ...setting, [field]: value } : setting))
    );
  };

  return (
    <div className="email-settings-container">
      <h2 className="email-settings-title">Email Settings</h2>
      <p className="email-settings-description">Manage automatic email schedules and reminders.</p>

      <div className="email-settings-table">
        <table>
          <thead>
            <tr>
              <th>Email Type</th>
              <th>Send Date</th>
              <th>Reminder Date</th>
              <th>Closing Date</th>
            </tr>
          </thead>
          <tbody>
            {emailSettings.map((setting) => (
              <tr key={setting.id}>
                <td>{setting.type}</td>
                <td>
                  <input
                    type="date"
                    value={setting.sendDate}
                    onChange={(e) => handleUpdateSetting(setting.id, "sendDate", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="date"
                    value={setting.reminderDate}
                    onChange={(e) => handleUpdateSetting(setting.id, "reminderDate", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="date"
                    value={setting.closingDate}
                    onChange={(e) => handleUpdateSetting(setting.id, "closingDate", e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="add-email-setting">
        <h3>Add New Email Setting</h3>
        <div className="form-group">
          <label>Email Type</label>
          <input
            type="text"
            value={newSetting.type}
            onChange={(e) => setNewSetting({ ...newSetting, type: e.target.value })}
            placeholder="Enter email type"
          />
        </div>
        <div className="form-group">
          <label>Send Date</label>
          <input
            type="date"
            value={newSetting.sendDate}
            onChange={(e) => setNewSetting({ ...newSetting, sendDate: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Reminder Date</label>
          <input
            type="date"
            value={newSetting.reminderDate}
            onChange={(e) => setNewSetting({ ...newSetting, reminderDate: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Closing Date</label>
          <input
            type="date"
            value={newSetting.closingDate}
            onChange={(e) => setNewSetting({ ...newSetting, closingDate: e.target.value })}
          />
        </div>
        <button
          className="add-setting-btn"
          onClick={handleAddSetting}
          disabled={
            !newSetting.type || !newSetting.sendDate || !newSetting.reminderDate || !newSetting.closingDate
          }
        >
          Add Email Setting
        </button>
      </div>
    </div>
  );
};

export default EmailSettings;
