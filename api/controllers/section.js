const Section = require('../models/Section');

module.exports = {

    getSections: async(req, res) => {
        try {
            const sections = await Section.find().select('_id name');

            res.status(200).json(sections);
        } catch (e) {
            console.log(e);
            res.status(400).json({errors: ["oops :("]})
        }
    },

    deleteSection: async (req, res) => {
        try {
            await Section.findByIdAndDelete(req.params.id);

            res.status(204).json('success!');
        } catch (e) {
            console.log(e);
            res.status(400).json({errors: ["oops :("]})
        }
    }
};
