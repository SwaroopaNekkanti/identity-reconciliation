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
   
