import './App.css';
import current_employee from './data/DummyData';
import CurrentEmployees from './components/CurrentEmployees';
import AddEmployee from './components/AddEmployee';
import { useState } from 'react';

function App() {
  const [employeesData, setEmployeesData] = useState(current_employee);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [formData, setFormData] = useState({
    firstname: '',
    last_name: '',
    age: '',
    position: '',
    contract: ''
  });

  // Handle the employee selection for editing
  const handleEditClick = (employee) => {
    setSelectedEmployee(employee);
    setFormData({
      firstname: employee.firstname,
      last_name: employee.last_name,
      age: employee.age,
      position: employee.position,
      contract: employee.contract
    });
  };

  const handleAddEmployee = (newEmployee) => {
    setEmployeesData([...employeesData, newEmployee]); // Add new employee to the list
  };

  const handleDeleteClick = (employeeToDelete) => {
    const updatedEmployees = employeesData.filter(
      (employee) => employee !== employeeToDelete
    );
    setEmployeesData(updatedEmployees);  // Update the state with the new list
  };

  // Handle input field changes for editing
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSaveChanges = () => {
    const updatedEmployees = employeesData.map((employee) =>
      employee === selectedEmployee
        ? { ...employee, ...formData }
        : employee
    );
    setEmployeesData(updatedEmployees);
    setSelectedEmployee(null); // Reset the selected employee
  };

  return (
    <div className="App">
      <h1>Management Data</h1>

      <AddEmployee handleAddEmployee={handleAddEmployee} />

      <ul>
        <h2>Employees</h2>
        <CurrentEmployees
          employeesData={employeesData}
          handleEditClick={handleEditClick}
          handleDeleteClick={handleDeleteClick}
        />
      </ul>

      {selectedEmployee && (
        <div>
          <h3>Edit Employee</h3>
          <form>
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
            <button type="button" onClick={handleSaveChanges}>Save Changes</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
