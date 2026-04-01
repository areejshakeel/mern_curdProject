import React, { useEffect, useState } from "react";
import "./modal.css";

const CustomModal = ({ isOpen, onClose, title, data, onSave }) => {
  const [formData, setFormData] = useState({});

  // populate fields when modal opens
  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">

        <h3>{title}</h3>

        {/* FORM */}
        <div className="modal-body">

          <label>User Name</label>
          <input
            name="userName"
            value={formData.userName || ""}
            onChange={handleChange}
          />

          <label>Email</label>
          <input
            name="email"
            value={formData.email || ""}
            onChange={handleChange}
          />

          <label>Phone</label>
          <input
            name="phone"
            value={formData.phone || ""}
            onChange={handleChange}
          />

          <label>
            <input
              type="checkbox"
              name="isAdmin"
              checked={formData.isAdmin || false}
              onChange={handleChange}
            />
            Admin
          </label>

        </div>

        {/* ACTIONS */}
        <div className="modal-actions">
          <button className="cancel" onClick={onClose}>
            Cancel
          </button>

          <button className="save" onClick={handleSubmit}>
            Save
          </button>
        </div>

      </div>
    </div>
  );
};

export default CustomModal;