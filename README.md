# Identity Reconciliation Service

## Overview

This project is a Node.js and Sequelize-based service for an e-commerce website (Zamazon.com) to reconcile and manage customer contact identities. It links multiple records with varying contact details to a single individual, ensuring accurate tracking of orders and customer data.

## Table of Contents

- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [API Endpoint](#api-endpoint)
- [Technologies Used](#technologies-used)
- [Known Issues](#known-issues)

## Features

- **Contact Identification**: Associates different contact records to a single user based on email or phone.
- **Primary and Secondary Contacts**: Determines and updates primary or secondary contact precedence based on new information.
- **Error Handling**: Proper error responses and logging for easier debugging.

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/SwaroopaNekkanti/identity-reconciliation.git
   cd identity-reconciliation
2.**Install Dependencies: Install the required npm packages.**:
       npm install
3.**Set Up the Database:**
          Ensure SQLite3 is installed.
          Run migrations to create tables:
                          npx sequelize-cli db:migrate
4.**Start the Server: Start the server on http://localhost:3000.**
            node server.js
   The server should now be running on http://localhost:3000.

### Explanation of Each Step:

- **Clone the Repository**: This section instructs users to clone your GitHub repository to their local machine. The command provided (`git clone`) is the standard way to copy a repository.
- **Navigate into the Directory**: After cloning, users are instructed to change into the project directory (`cd identity-reconciliation`).
- **Install Dependencies**: This step is essential for installing the required libraries and packages specified in your `package.json` file.
- **Set Up the Database**: This includes instructions on ensuring that SQLite3 is installed and how to run migrations.
- **Start the Server**: This final step explains how to start the server and where to access it.

This structure is user-friendly and ensures that anyone can follow the instructions to get your application running quickly.


   
