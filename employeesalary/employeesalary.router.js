const express = require('express');
const router = express.Router();
const employeeSalaryController = require('./employeesalary.component');


// Route for adding a new employee
router.patch('/add_employee_salary/:id', employeeSalaryController.addEmployeeSalary);

// Route for deleting an employee
router.delete('/:id', employeeSalaryController.deleteEmployeeSalary);

module.exports = router;
