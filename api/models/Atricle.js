const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articlesSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true
        },
        body: {
            type: String,
            required: true
        },
        section_id: {
            type: Schema.Types.ObjectId,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('articles', articlesSchema);
