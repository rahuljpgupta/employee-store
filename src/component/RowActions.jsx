import React from 'react';

export default function RowActions({ deleteEmployee, employeeId }) {
  return (
    <>
      <button className="buttons">Edit</button>
      <button className="buttons" onClick={() => deleteEmployee(employeeId)}>Delete</button>
    </>
  )
};
