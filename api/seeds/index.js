const seeder = require('mongoose-seed');
const Sections = require('../models/Section');
const keys = require('../config/config');


seeder.connect(keys.mongoURL, async () => {
    seeder.loadModels([
        'models/Section.js',
    ]);
    const sections = await Sections.find();
    if (!sections.length) {
        seeder.populateModels(require('./sections').data(),() => {
            seeder.disconnect();
        })
    } else seeder.disconnect();
});

module.exports = seeder;
