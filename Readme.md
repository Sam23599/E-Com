---

# Project Name

Brief project description.

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
   git clone https://github.com/sam23599/
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

Update the `mongoose.js` file in the `config` directory with your MongoDB configuration. For example:

```javascript
module.exports = {
  atlasConnectionString: 'your-mongodb-atlas-connection-string',
};
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

## Architectural Decisions

The project follows a model-controller architecture using Express.js for API development. MongoDB Atlas is used as the database, and the project is built using Express, Mongoose, MongoDB, Chai, and Mocha.


## License

Follows the ISC.

---