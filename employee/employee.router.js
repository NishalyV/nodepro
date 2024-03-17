const express = require('express');
const router = express.Router();
const employeeController = require('./employee.component');


// Route for displaying the form to add an employee
router.get('/', employeeController.getEmployees);

// Route for adding a new employee
router.post('/add_employee', employeeController.addEmployee);

// Route for updating an employee
router.patch('/:id', employeeController.updateEmployee);

// Route for deleting an employee
router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;
