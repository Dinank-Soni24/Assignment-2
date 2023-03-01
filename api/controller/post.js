const posts = require('../models/post');
const category = require('../models/category');
const mongoose = require('mongoose');

// add the post
exports.postCreate = (req, res) => {
    category.findById(req.body.categoryId)
        .then(Category => {
            if (!Category) {
                return res.status(404).json({
                    message: "category is not found"
                })
            }
            const Posts = new posts({
                _id: new mongoose.Types.ObjectId(),
                categoryId: req.body.categoryId,
                title: req.body.title,
                content: req.body.content,
                createdBy: req.body.createdBy,
                // slug: req.body.slug
            });
            Posts.save()
                .then(result => {
                    res.status(201).json({
                        message: 'Post is created Successfully'
                    })
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({
                        error: err
                    });
                });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });

}

//get all post
exports.postGetAll = (req, res) => {
    posts.find()
        .then(docs => {
            res.status(200).json({
                count: docs.length,
                Posts: docs
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}

//get one post
exports.postGetOne = (req, res) => {
    posts.findById(req.params.postsId)
        .then(docs => {
            if (!docs) {
                return res.status(404).json({
                    message: 'post is not found'
                })
            }
            res.status(200).json({
                Post: docs
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        });
}

//update posts
exports.postUpdate = (req, res) => {
    const id = req.params.postsId;
    category.findById(req.body.categoryId)
    .then(foundCategory => {
        console.log(foundCategory);
        if(!foundCategory){
            return res.status(404).json({
                message: "category is not found"
            })
        }
        posts.updateMany({ _id: id }, { $set: req.body })
        .then(result => {
            res.status(200).json({
                message: 'posts updated'
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
    
}

//delete posts
exports.postDelete = (req, res) => {
    posts.findById(req.params.postsId)
        .then(Posts => {
            if (!Posts) {
                return res.status(404).json({
                    message: "post is not found"
                })
            }
            const id = req.params.postsId;
            posts.findByIdAndRemove({ _id: id })
                .exec()
                .then(result => {
                    res.status(200).json({
                        message: 'post is deleted'
                    })
                })
                .catch(err => {
                    res.status(500).json({
                        error: err
                    });
                });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });


}