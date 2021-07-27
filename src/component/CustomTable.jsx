import React from 'react';
import RowActions from './RowActions';

export default function CustomTable({ tableDefinition, employees, deleteEmployee }) {
  return (
    <table className="table">
      <tbody>
        <tr className="header-row">
          {tableDefinition.map(col => <th key={col.columnName} className="header-cell" name={col.columnName}>{col.displayName}</th>)}
          <th className="header-cell">Actions</th>
        </tr>
        {employees.map(employee => <tr key={employee.id} className="data-row">
          <td className="data-cell">
            <img height="200" src={employee.profilePhoto} alt="employee-profile-picture" />
          </td>
          <td className="data-cell">{employee.firstName}</td>
          <td className="data-cell">{employee.lastName}</td>
          <td className="data-cell">{employee.dob}</td>
          <td className="data-cell">{employee.designation}</td>
          <td className="data-cell">{employee.experience}</td>
          <td className="data-cell"><RowActions
            employeeId={employee.id}
            deleteEmployee={deleteEmployee}
          /></td>
        </tr>

        )}

      </tbody>
    </table>
  )
};
