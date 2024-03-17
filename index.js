const express = require('express');
const bodyParser = require('body-parser');
const employeeRoutes = require('./employee/employee.router');
const employeeSalaryRoutes = require('./employeesalary/employeesalary.router');

const app = express();
const PORT = 3000;

// Mock user database (replace this with your database logic)
const users = [
    { username: 'user1', password: 'password1' }
];

// Middleware to parse request body
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/login', (req, res) => {

    const { username, password } = req.body;
    // Check if username and password are provided
    if (!username || !password) {
        return res.status(400).send('Username and password are required');
    }

    // Check if user exists in the database
    const user = users.find(user => user.username === username && user.password === password);

    if (!user) {
        return res.status(401).send('Invalid username or password');
    }

    // If user exists, create a session (in this example, just a simple flag)
    req.session = { authenticated: true };
    return res.status(200).send('login success');
});
// Routes
app.use('/employees', employeeRoutes);
app.use('/employee_salary', employeeSalaryRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
