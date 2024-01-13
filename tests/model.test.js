const assert = require('chai').assert;
const mongoose = require('mongoose');
const Product = require('../models/product');
const dotenv = require('dotenv');

dotenv.config();
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

describe('Product Model', () => {

  // Clear the test database before each test
  /*
  beforeEach(async () => {
    await Product.deleteMany({});
  });
  */
 
  it('should save and retrieve a product', async () => {
    const productData = {
      name: 'Laptop',
      description: 'Powerful laptop for development',
      price: 999.99,
      variants: [
        {
          name: 'Intel Core i5',
          sku: 'I5SKU123',
          additional_cost: 50.00,
          stock_count: 50,
        },
        {
          name: 'Intel Core i7',
          sku: 'I7SKU456',
          additional_cost: 100.00,
          stock_count: 30,
        },
      ],
    };

    // Save the product
    const product = new Product(productData);
    const savedProduct = await product.save();

    // Retrieve the product from the database
    const retrievedProduct = await Product.findById(savedProduct._id);

    // Assert the retrieved product matches the saved product
    assert.equal(retrievedProduct.name, productData.name);
    assert.equal(retrievedProduct.description, productData.description);
    assert.equal(retrievedProduct.price, productData.price);

    // Assert the variants
    assert.equal(retrievedProduct.variants.length, productData.variants.length);

    for (let i = 0; i < productData.variants.length; i++) {
      const expectedVariant = productData.variants[i];
      const retrievedVariant = retrievedProduct.variants[i];

      assert.equal(retrievedVariant.name, expectedVariant.name);
      assert.equal(retrievedVariant.sku, expectedVariant.sku);
      assert.equal(retrievedVariant.additional_cost, expectedVariant.additional_cost);
      assert.equal(retrievedVariant.stock_count, expectedVariant.stock_count);
    }
  });

});
