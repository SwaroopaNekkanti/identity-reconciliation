const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Adjust the path based on your project structure

// Define the Contact model
class Contact extends Model {}

// Initialize the Contact model
Contact.init({
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: true, // Phone number can be null
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true, // Email can be null
  },
  linkedId: {
    type: DataTypes.INTEGER,
    allowNull: true, // Linked ID can be null
  },
  linkPrecedence: {
    type: DataTypes.STRING,
    allowNull: false, // Link precedence cannot be null
    validate: {
      isIn: [['primary', 'secondary']], // Only allow 'primary' or 'secondary'
    },
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false, // Created at cannot be null
    defaultValue: DataTypes.NOW, // Set default value to now
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false, // Updated at cannot be null
    defaultValue: DataTypes.NOW, // Set default value to now
  },
  deletedAt: {
    type: DataTypes.DATE,
    allowNull: true, // Deleted at can be null
  },
}, {
  sequelize, // Pass the sequelize instance
  modelName: 'Contact', // Name of the model
  timestamps: true, // Automatically manage createdAt and updatedAt
  paranoid: true, // Enable soft deletes (deletedAt)
});

// Export the Contact model
module.exports = Contact;
