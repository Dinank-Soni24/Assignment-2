const category = require('../models/category');
const mongoose = require('mongoose');

// Add the category (post)
exports.category_create = (req, res) => {
    category.find({ categoryName: req.body.categoryName })
        .exec()
        .then(Category => {
            if (Category.length >= 1) {
                return res.status(409).json({
                    message: 'category name is alredy exists'
                })
            } else {
                const Category = new category({
                    _id: new mongoose.Types.ObjectId(),
                    categoryName: req.body.categoryName
                });
                Category.save()
                    .then(result => {
                        res.status(201).json({
                            message: 'Category is created Successfully'
                        })
                    })
                    .catch(err => {
                        res.status(500).json({
                            error: err,
                        })
                    })
            }
        })
}

// Get the category (get)
exports.category_get_all = (req, res) => {
    category.find()
        .exec()
        .then(docs => {
            res.status(200).json({
                data: docs
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err,
            })
        })
}

// Get one category
exports.category_get_one = (req, res) => {
    const id = req.params.categoryId;
    category.findById(id)
        .then(doc => {
            if (doc) {
                res.status(200).json({
                    product: doc
                })
            }
            else {
                res.status(404).json({
                    message: 'Category is not found'
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                error: err,
            })
        })
}

// update the category (patch)
exports.category_update = (req, res) => {
    const id = req.params.categoryId;

    category.updateMany({ _id: id }, { $set: req.body })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Category is Updated'
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err,
            })
        })
}

//delete the category (delete)
exports.category_deleted = (req, res) => {
    category.remove({ _id: req.params.categoryId })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Category is deleted'
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err,
            })
        })
}