const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug)

const postsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    categoryId: {type: mongoose.Schema.Types.ObjectId, ref: 'category', required: true},
    title: {type: String, required: true},
    content: {type: String, required: true},
    publishedDate: {type: Date, required: true, default: Date.now()},
    createdBy: {type: String, required: true},
    slug: { type: String, slug: "content" }
});

module.exports = mongoose.model('post', postsSchema);