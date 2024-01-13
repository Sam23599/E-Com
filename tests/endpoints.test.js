const assert = require('chai').assert;
const request = require('supertest');
const app = require('../index'); 

let createdProductId; 

describe('Product API Endpoints', () => {
  it('should create a new product', async () => {
    const productData = {
      name: 'Test Product',
      description: 'This is a test product.',
      price: 29.99,
      variants: [
        {
          name: 'Test Variant',
          sku: 'TESTSKU001',
          additional_cost: 10.00,
          stock_count: 20,
        },
      ],
    };

    const response = await request(app)
      .post('/api/products')
      .send(productData);

    assert.equal(response.status, 201);
    assert.isObject(response.body);
    assert.property(response.body, '_id');
    assert.equal(response.body.name, productData.name);
    assert.equal(response.body.description, productData.description);
    assert.equal(response.body.price, productData.price);
    assert.isArray(response.body.variants);
    assert.equal(response.body.variants.length, 1);

    // Store the created product ID for future tests
    createdProductId = response.body._id;
  });

  it('should retrieve a product by ID', async () => {
    // Use the dynamically created product ID
    const response = await request(app).get(`/api/products/${createdProductId}`);
    
    assert.equal(response.status, 200);
    assert.isObject(response.body);
    assert.property(response.body, '_id');
    assert.property(response.body, 'name');
    assert.property(response.body, 'description');
    assert.property(response.body, 'price');
    assert.property(response.body, 'variants');
  });

  it('should update an existing product', async () => {
    // Use the dynamically created product ID
    const updatedProductData = {
      name: 'Updated Test Product',
      description: 'Updated test product description',
      price: 39.99,
    };

    const response = await request(app)
      .put(`/api/products/${createdProductId}`)
      .send(updatedProductData);

    assert.equal(response.status, 200);
    assert.isObject(response.body);
    assert.property(response.body, '_id');
    assert.equal(response.body.name, updatedProductData.name);
    assert.equal(response.body.description, updatedProductData.description);
    assert.equal(response.body.price, updatedProductData.price);
  });

  it('should delete an existing product', async () => {
    // Use the dynamically created product ID
    const response = await request(app).delete(`/api/products/${createdProductId}`);

    assert.equal(response.status, 200);
    assert.isObject(response.body);
    assert.property(response.body, '_id');
    assert.property(response.body, 'name');
    assert.property(response.body, 'description');
    assert.property(response.body, 'price');
    assert.property(response.body, 'variants');
    assert.equal(response.body._id, createdProductId);
  });

});
