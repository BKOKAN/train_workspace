import React from 'react';

export default function CurrentEmployees({ employeesData, handleEditClick, handleDeleteClick }) {
  return (
    <>
      {employeesData.map((employee, index) => (
        <li key={index}>
          <p>Name: {employee.firstname} {employee.last_name}</p>
          <p>Age: {employee.age}</p>
          <p>Position: {employee.position}</p>
          <p>Contract: {employee.contract}</p>
          
          <button onClick={() => handleEditClick(employee)}>Edit</button>
          
          <button onClick={() => handleDeleteClick(employee)}>Delete</button>
        </li>
      ))}
    </>
  );
}
