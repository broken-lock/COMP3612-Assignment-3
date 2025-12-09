const provider = require('../scripts/dataProvider');
const path = require('path');
const filePath = path.join(__dirname, '..', 'data', 'galleries.json');
const galleriesData = provider.readJSONFrom(filePath);
const express = require('express');
const router = express.Router();
const { handle404Error } = require('../scripts/error');

router.get('/', (req, res) => {
    res.json(galleriesData);
});

router.get('/:country', (req, res) => {
    const country = req.params.country;
    const matches = galleriesData.filter(gallery => gallery.GalleryCountry.toLowerCase() == country.toLowerCase());
    if (matches && matches.length > 0) {
        res.json(matches);
    } else {
        handle404Error(req, res, `Galleries: Could not find galleries with the specified country: ${country}`);
    }
});

module.exports = router;