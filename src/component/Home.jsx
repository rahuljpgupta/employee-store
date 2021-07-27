import React, { Component } from 'react'
import CustomTable from './CustomTable';
import { tableDefinition, employeesData } from '../mockData';
import EmployeeFormModal from './EmployeeFormModal';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: employeesData,
            modalOpen: false,
        }
    }

    deleteEmployee = id => {
        const { employees } = this.state;
        const empIndex = employees.findIndex(emp => emp.id === id);
        const userConcent = window.confirm(`Do you want to delete ${employees[empIndex].firstName}?`);

        if(userConcent) {
            const employeesClone = [...employees];
            employeesClone.splice(empIndex, 1);
            this.setState({
                employees: employeesClone
            });
        }
    }

    handleAddEmployee = (formData) => {
        const { employees } = this.state;
        const employeesClone = [...employees];
            employeesClone.push({...formData, id: employees[employees.length - 1].id + 1});
            this.setState({
                employees: employeesClone
            });
    }
    render() {
        const { employees } = this.state;

        return (
            <> 
                <EmployeeFormModal
                    tableDefinition={tableDefinition}
                    handleAddEmployee={this.handleAddEmployee}
                />
                <CustomTable
                    tableDefinition={tableDefinition}
                    employees={employees}
                    deleteEmployee={this.deleteEmployee}
                />
                
            </>
        );
    }

}

export default Home;