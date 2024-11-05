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


## Testing the API with Postman

You can use [Postman](https://www.postman.com/downloads/) to test the `POST /identify` API endpoint for identity reconciliation.

### Steps to Test with Postman

1. **Open Postman**:
   - Download and open the Postman application if you haven't already.

2. **Create a New Request**:
   - Click on **New** > **Request**.
   - Name the request (e.g., "Identify Contact") and save it to a collection if desired.

3. **Set the Request Type and URL**:
   - Set the request type to `POST`.
   - Enter the URL: `http://localhost:3000/identify`

4. **Configure the Request Body**:
   - In the "Body" tab, select **raw** and choose **JSON** from the dropdown.
   - Enter the JSON payload as shown below:
     ```json
     {
       "email": "user@example.com",
       "phoneNumber": "1234567890"
     }
     ```

5. **Send the Request**:
   - Click **Send** to submit the request.

6. **View the Response**:
   - You should receive a JSON response with the following format if the server is running correctly:
     ```json
     {
       "primaryContactId": 1,
       "emails": ["user@example.com"],
       "phoneNumbers": ["1234567890"],
       "secondaryContactIds": []
     }
     ```

This confirms that your API is working as expected. You can adjust the request body to test with different email and phone numbers, observing how the service reconciles contacts.



   
