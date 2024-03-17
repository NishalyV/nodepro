const nodemailer = require('nodemailer');
let employees = [];


// Controller function to get employees
exports.getEmployees = (req, res) => {
    res.json({ employees });
};

// Nodemailer configuration
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'your-email@gmail.com', // Your Gmail address
        pass: 'your-password' // Your Gmail password
    }
});

// Function to generate a random password
const generatePassword = () => {
    const length = 8;
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
};

// Controller function to add an employee
exports.addEmployee = (req, res) => {
    const { id, name, position } = req.body;

    if (!name || !position) {
        return res.status(400).send('Name and position are required');
    }
    // Generate a random password
    // const password = generatePassword();
    const newEmployee = { id, name, position };

    employees.push(newEmployee);
    // const mailOptions = {
    //     from: 'nishavenkat27@gmail.com',
    //     to: 'nishavenkat27@gmail.com',
    //     subject: 'Employee Creation Notification',
    //     text: `Hello ${name}, you have been added as an employee. Your password is: ${password}`
    // };

    // transporter.sendMail(mailOptions, (error, info) => {
    //     if (error) {
    //         console.error('Error sending email:', error);
    //         return res.status(500).send('Failed to send email');
    //     } else {
    // console.log('Email sent:', info.response);
    return res.status(200).send('Employee added successfully');
    //     }
    // });
};




// Controller function to update an employee
exports.updateEmployee = (req, res) => {
    const id = req.params.id - 1;
    const { name, position } = req.body;

    if (id >= 0 && id <= employees.length) {
        employees[id].name = name;
        employees[id].position = position;
        return res.json({ message: 'Employee updated successfully', employee: employees[id] });
    } else {
        return res.status(404).json({ error: 'Employee not found' });
    }
};

// Controller function to delete an employee
exports.deleteEmployee = (req, res) => {
    const id = req.params.id - 1;

    if (id >= 0 && id <= employees.length) {
        employees.splice(id, 1);
        return res.json({ message: 'Employee deleted successfully' });
    } else {
        return res.status(404).json({ error: 'Employee not found' });
    }
};
exports.Employee = employees;
