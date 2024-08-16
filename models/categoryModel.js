const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema(
    {
        categoryName: String,
        icon: String,
        categoryDoctor: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Doctor"
        }]
    },
    { timestamps: true }
)

const Category = mongoose.model('Category', categorySchema)

module.exports = Category