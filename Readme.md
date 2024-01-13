---

# Project Name

Welcome to E-Com, a robust API-driven e-commerce platform designed for simplicity and flexibility. This project focuses on delivering a seamless experience for managing products and variants through a set of well-defined RESTful API endpoints.

##Features

- **Product Management:** Create, update, delete, and retrieve detailed product information.
- **Variant Support:** Easily handle products with multiple variants, each with its own set of attributes.
- **Search Functionality:** Efficiently search for products based on names, descriptions, or variant names.
- **Postman Collection:** Simplify testing with a pre-configured Postman collection included in the project.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running the Project](#running-the-project)
  - [Environment Variables](#environment-variables)
  - [Start the Server](#start-the-server)
- [Interacting with the API](#interacting-with-the-api)
  - [API Endpoints](#api-endpoints)
- [Architectural Decisions](#architectural-decisions)
- [Assumptions](#assumptions)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

Follow the instructions in the [Getting Started](#getting-started) section to set up and run the project on your local machine. Explore the [API Endpoints](#api-endpoints) to understand how to interact with the API and leverage the provided Postman collection for testing.

### Prerequisites

Make sure you have the following installed:

- Npm
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [MongoDB Atlas Account](https://www.mongodb.com/cloud/atlas)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sam23599/E-Com
   ```

2. Navigate to the project directory:

   ```bash
   cd your-project
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Running the Project

### Environment Variables

Update the `.env` file in the root directory with the following content:

   ```env
   MONGO_URI=your-mongodb-atlas-connection-string
   ```

Replace `your-mongodb-atlas-connection-string` with your MongoDB Atlas connection string.

### Start the Server

Run the following command to start the server:

```bash
npm start
```

Your API will be running at `http://localhost:7100` or the port you specified.

## Interacting with the API

### API Endpoints

- **Create Product:**
  - Endpoint: `POST /products`
  - Request Payload: JSON representing the product details.
  - Response: Status 201 Created with the created product details.

- **Update Product:**
  - Endpoint: `PUT /products/{productId}`
  - Request Payload: JSON representing the updated product details.
  - Response: Status 200 OK with the updated product details.

- **Delete Product:**
  - Endpoint: `DELETE /products/{productId}`
  - Response: Status 200 No Content upon successful deletion.

- **Retrieve Product:**
  - Endpoint: `GET /products/{productId}`
  - Response: Status 200 OK with the product details.

- **Create Variant:**
  - Endpoint: `POST /products/{productId}/variants`
  - Request Payload: JSON representing the variant details.
  - Response: Status 201 Created with the created variant details.

- **Update Variant:**
  - Endpoint: `PUT /products/{productId}/variants/{variantId}`
  - Request Payload: JSON representing the updated variant details.
  - Response: Status 200 OK with the updated variant details.

- **Delete Variant:**
  - Endpoint: `DELETE /products/{productId}/variants/{variantId}`
  - Response: Status 200 No Content upon successful deletion.

- **Search Products:**
  - Endpoint: `GET /products/search/{query}`
  - Response: Status 200 OK with the products matching the search query.


## Postman Collection

Use the provided Postman collection to test the API. Import the E-Com.postman_collection.json file located in the root folder into Postman. The collection contains pre-configured requests for each API endpoint. Ensure that your server is running before making requests.

A Postman collection for testing the API endpoints can be found [here](https://galactic-robot-578954.postman.co/workspace/New-Team-Workspace~3282f0a4-03a5-4a8e-a3af-7f240f31a717/collection/29883361-25c18892-c97b-403e-9767-6c9ad53cdee0?action=share&creator=29883361)

## Architectural Decisions

This project follows a model-controller architecture, utilizing the popular Express.js framework for API development. MongoDB Atlas serves as the database, providing a scalable and cloud-based solution. The combination of Express, Mongoose, MongoDB, Chai, and Mocha ensures a robust and maintainable codebase.


## License

Follows the ISC.


Feel free to explore, test, and enhance the project based on your needs. We hope E-Com becomes a valuable resource for your e-commerce API development journey!
---