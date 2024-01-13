const assert = require('chai').assert;
const request = require('supertest');
const app = require('../index');

describe('Product Search Functionality', () => {
  it('should retrieve products based on search query', async () => {
    const response = await request(app).get('/api/products/search/PS5');
    
    assert.equal(response.status, 200);
    assert.isArray(response.body);

    if (response.body.length > 0) {
      const firstProduct = response.body[0];
      
      assert.isObject(firstProduct);
      assert.property(firstProduct, '_id');
      assert.property(firstProduct, 'name');
      assert.property(firstProduct, 'description');
      assert.property(firstProduct, 'price');
      assert.property(firstProduct, 'variants');
      
      // Assuming the first product has at least one variant
      const firstVariant = firstProduct.variants[0];
      assert.property(firstVariant, 'name');
      assert.property(firstVariant, 'sku');
      assert.property(firstVariant, 'additional_cost');
      assert.property(firstVariant, 'stock_count');
    }
  });

});
