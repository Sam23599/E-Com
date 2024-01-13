const express = require('express');
const router = express.Router();
const { homeController, searchProducts } = require('../controllers/home_controller');

// Create Product
router.post('/products', homeController.createProduct);

// Update Product
router.put('/products/:productId', homeController.updateProduct);

// Delete Product
router.delete('/products/:productId', homeController.deleteProduct);

// Retrieve Product
router.get('/products/:productId', homeController.retrieveProduct);

// Create Variant
router.post('/products/:productId/variants', homeController.createVariant);

// Update Variant
router.put('/products/:productId/variants/:variantId', homeController.updateVariant);

// Delete Variant
router.delete('/products/:productId/variants/:variantId', homeController.deleteVariant);


// Search Products
router.get('/products/search/:query', searchProducts);

module.exports = router;