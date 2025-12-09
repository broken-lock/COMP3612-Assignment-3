const provider = require('../scripts/dataProvider');
const path = require('path');
const filePath = path.join(__dirname, '..', 'data', 'artists.json');
const artistsData = provider.readJSONFrom(filePath);
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json(artistsData);
});

router.get('/:country', (req, res) => {
    const country = req.params.country;
    const matches = artistsData.filter(artist => artist.Nationality.toLowerCase() === country.toLowerCase());

    if (matches && matches.length > 0) {
        res.json(matches);
    } else {
        res.status(404).json(
            {   
                success: false,
                message: `Artists: Could not find artists with the specified country in: ${country}`,
                query: req.query
            });       
    }
});

module.exports = router;