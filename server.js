const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const Contact = require('./models/contact'); // Adjust the path if necessary

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Endpoint for identifying contacts
app.post('/identify', async (req, res) => {
  const { email, phoneNumber } = req.body;

  console.log('Incoming request body:', req.body); // Log the incoming request body

  try {
    // Find existing contact
    let contact = await Contact.findOne({ where: { email, phoneNumber } });

    if (!contact) {
      // If no contact found, create a new primary contact
      contact = await Contact.create({
        email,
        phoneNumber,
        linkedId: null,
        linkPrecedence: 'primary',
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    } else {
      // If contact found, handle secondary contact logic
      // Implement your logic to link or create secondary contacts here
    }

    return res.status(200).json({
      primaryContactId: contact.id,
      emails: [contact.email],
      phoneNumbers: [contact.phoneNumber],
      secondaryContactIds: [], // Populate based on your logic
    });
  } catch (error) {
    console.error('Error occurred:', error); // Log the complete error
    return res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
