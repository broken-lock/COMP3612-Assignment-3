const provider = require('../scripts/dataProvider');
const path = require('path');
const filePath = path.join(__dirname, '..', 'data', 'galleries.json');
const galleriesData = provider.readJSONFrom(filePath);
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json(galleriesData);
});

router.get('/country', (req, res) => {
    const country = req.params.country;
    const matches = galleriesData.find(gallery => gallery.GalleyCountr.toLowerCase() == country.toLowerCase());

    if (matches && matches.length > 0) {
        res.json(matches);
    } else {
        res.status(404).json(
            {   
                success: false,
                message: `Galleries: Could not find galleries with the specified country in: ${country}`,
                query: req.query
            });       
    }
});

module.exports = router;