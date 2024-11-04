const { Sequelize } = require('sequelize');

// Create a new instance of Sequelize for SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // Path to your SQLite database file
});

// Test the database connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Export the Sequelize instance
module.exports = sequelize;
