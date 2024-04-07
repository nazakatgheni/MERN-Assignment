const Product = require('../models/product.models');

module.exports = {

    getAllProduct: (req, res) => {
        Product.find()
            .then((allProduct) => {
                console.log(allProduct);
                res.json(allProduct);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            })
    },

    createProduct: (req, res) => {
        Product.create(req.body)
            .then((newProduct) => {
                console.log(newProduct);
                res.json(newProduct);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err)
            })
    },

    getOneProduct: (req, res) => {
        Product.findById(req.params.id)
            .then((oneProduct) => {
                console.log(oneProduct);
                res.json(oneProduct);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err)
            })
    },

    updateProduct: (req, res) => {
        const id = req.params.id;

        Product.findOneAndUpdate(
            { _id: id },
            req.body,
            {
                new: true,
                runValidators: true
            })
            .then(updateProduct => {
                console.log(res);
                res.json(updateProduct);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err)
            })
    },

    deleteProduct: (req, res) => {
        const id = req.params.id
        Product.deleteOne({ _id: id })
            .then((deletedProduct) => {
                console.log(deletedProduct);
                res.json(deletedProduct);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err)
            })
    }
}