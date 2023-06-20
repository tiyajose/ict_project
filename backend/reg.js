const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());

// Handle POST request to '/register' endpoint
app.post('/register', (req, res) => {
  // Retrieve form data from the request body
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const phoneNumber = req.body.phoneNumber;
  const address = req.body.address;
  // Here, you can perform any necessary validation and data processing

  // Example response
  const responseData = {
    message: 'Registration successful',
    data: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      address: address
    }
  };

  // Send the response
  res.json(responseData);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
