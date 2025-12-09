const provider = require('../scripts/dataProvider');
const path = require('path');
const filePath = path.join(__dirname, '..', 'data', 'artists.json');
const artistsData = provider.readJSONFrom(filePath);
const express = require('express');
const router = express.Router();
const { handle404Error } = require('../scripts/error');

router.get('/', (req, res) => {
    res.json(artistsData);
});

router.get('/:country', (req, res) => {
    const country = req.params.country;
    const matches = artistsData.filter(artist => artist.Nationality.toLowerCase() === country.toLowerCase());
    if (matches && matches.length > 0) {
        res.json(matches);
    } else {
        handle404Error(req, res, `Artists: Could not find artists with the specified country: ${country}`);
    }
});

module.exports = router;