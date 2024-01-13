const Product = require('../models/product');

// Controller for handling product-related operations
const homeController = {
    createProduct: async (req, res) => {
        try {
            const product = await Product.create(req.body);
            console.log('Product Created');
            res.status(201).json(product);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    updateProduct: async (req, res) => {
        try {
            const product = await Product.findByIdAndUpdate(
                req.params.productId,
                req.body,
                { new: true }
            );
            console.log('Product Updated');
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    deleteProduct: async (req, res) => {
        try {
            const product = await Product.findByIdAndDelete(
                req.params.productId,
                { new: true }
            );
            console.log('Product Deleted');
            res.status(200).json({ message: 'Product deleted successfully', deleted_Product: product });

        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    retrieveProduct: async (req, res) => {
        try {
            const product = await Product.findById(req.params.productId);
            console.log('Product Retrieved');
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    createVariant: async (req, res) => {
        try {
            const product = await Product.findById(req.params.productId);
            product.variants.push(req.body);
            await product.save();
            console.log('Variant Created');
            res.status(201).json(product);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    updateVariant: async (req, res) => {
        try {
            const product = await Product.findById(req.params.productId);
            const variant = product.variants.id(req.params.variantId);
            variant.set(req.body);
            await product.save();
            console.log('Variant Updated');
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    deleteVariant: async (req, res) => {
        try {
            const productId = req.params.productId;
            const variantId = req.params.variantId;
            /*
            const product = await Product.findById(productId);
            product.variants.id(variantId).remove();
            await product.save();
            */
            // variant.remove() not working properly, so had to use the $pull method

            const product = await Product.findByIdAndUpdate(
                productId,
                { $pull: { variants: { _id: variantId } } },
                { new: true }
            );

            if (!product) {
                return res.status(404).json({ error: 'Product not found' });
            }

            console.log('Variant Deleted');
            res.status(200).json({ message: 'Variant deleted', product: product });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

// Search Products
const searchProducts = async (req, res) => {
    try {
        const { query } = req.params;

        // Use a case-insensitive regular expression for flexible matching
        const searchRegex = new RegExp(query, 'i');

        // Search for products matching the query in name, description, or variant name
        const products = await Product.find({
            $or: [
                { name: searchRegex },
                { description: searchRegex },
                { 'variants.name': searchRegex },
            ],
        });

        console.log('Products Found');
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { homeController, searchProducts };
