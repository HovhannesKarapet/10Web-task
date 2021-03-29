const Article = require('../models/Atricle');
const Section = require('../models/Section');


module.exports = {

    getArticlesBySection: async(req, res) => {
        try {
            const section = await Section.findById(req.params.id).select('name');
            const articles = await Article.find({section_id:req.params.id}).select('_id title');

            res.status(200).json({section_name: section.name, articles: articles});
        } catch (e) {
            console.log(e);
            res.status(400).json({errors: ["oops :("]})
        }
    },

    getAllArticles: async(req, res) => {
        try {
            const articles = await Article.find().select('_id title');

            res.status(200).json(articles);
        } catch (e) {
            console.log(e);
            res.status(400).json({errors: ["oops :("]})
        }
    },

    getArticle: async(req, res) => {
        try {
            const article = await Article.findOne({_id:req.params.id}).select('_id title body section_id');

            res.status(200).json(article);
        } catch (e) {
            console.log(e);
            res.status(400).json({errors: ["oops :("]})
        }
    },

    searchArticle: async (req, res) => {
        console.log(req.body);
        if(req.body.title.length < 3) {
            return res.status(400).json('too short word');
        }

        const value = { $regex: req.body.title, $options: "i"};
        const result = await Article.find({'title': value}).select('_id title');

        res.status(200).json(result);
    },

    createArticle: async (req, res) => {
        try {
            const article = new Article({
                title: req.body.title,
                body: req.body.body,
                section_id: req.params.section_id
            });

            await article.save();

            return res.status(201).json(article);
        } catch (e) {
            console.log(e);
            res.status(400).json({errors: ["oops :("]})
        }
    },

    deleteArticle: async (req, res) => {
        try {
            await Article.findByIdAndDelete(req.params.id);

            res.status(204).json('success!');
        } catch (e) {
            console.log(e);
            res.status(400).json({errors: ["oops :("]})
        }
    }
};
