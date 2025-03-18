import React, { useState } from 'react';

export default function AddEmployee({ handleAddEmployee }) {
  const [formData, setFormData] = useState({
    firstname: '',
    last_name: '',
    age: '',
    position: '',
    contract: ''
  });

  // Handle input field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.firstname &&
      formData.last_name &&
      formData.age &&
      formData.position &&
      formData.contract
    ) {
      handleAddEmployee(formData); // Call the parent function to add the new employee
      setFormData({
        firstname: '',
        last_name: '',
        age: '',
        position: '',
        contract: ''
      }); // Reset the form after submission
    } else {
      alert('Please fill in all fields!');
    }
  };

  return (
    <div>
      <h3>Add New Employee</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Position</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Contract</label>
          <input
            type="text"
            name="contract"
            value={formData.contract}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}
