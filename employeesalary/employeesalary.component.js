let employees = require("../employee/employee.component").Employee;

// Controller function to add an employee
exports.addEmployeeSalary = (req, res) => {
    const id = req.params.id - 1;
    const { salary } = req.body;

    if (!salary) {
        return res.status(400).send('Salary are required');
    }
    if (id >= 0 && id <= employees.length) {
        employees[id] = {
            ...employees[id],
            salary: salary
        }
        return res.json({ message: 'Employee salary added successfully', employee: employees[id] });
    } else {
        return res.status(404).json({ error: 'Employee not found' });
    }
};


// Controller function to delete an employee
exports.deleteEmployeeSalary = (req, res) => {
    const id = req.params.id - 1;

    if (id >= 0 && id <= employees.length) {
        const emp = employees[id]
        delete emp.salary;
        return res.json({ message: 'Employee salary deleted successfully' });
    } else {
        return res.status(404).json({ error: 'Employee not found' });
    }
};
