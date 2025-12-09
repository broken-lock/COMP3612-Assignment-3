const provider = require('../scripts/dataProvider');
const path = require('path');
const filePath = path.join(__dirname, '..', 'data', 'paintings-nested.json');
const paintingsData = provider.readJSONFrom(filePath);
const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
    const id = req.params.id;
    
    const matches = paintingsData.find(painting => painting.paintingID == id);
    console.log(paintingsData[1].paintingID === 578);
    if (matches) {
        res.json(matches);
    } else {
        res.status(404).json(
            {
                success: false,
                message: `Paintings: Could not the painting with the specified painting-id in: ${id}`,
                query: req.query
            });
    }
});

router.get('/gallery/:id', (req, res) => {
    const id = req.params.id;
    const matches =
        paintingsData.filter(painting => painting.gallery.galleryID == id);

    if (matches && matches.length > 0) {
        res.json(matches);
    } else {
        res.status(404).json(
            {
                success: false,
                message: `Paintings: Could not find paintings with the specified gallery-id in: ${id}`,
                query: req.query
            });
    }
});

router.get('/artist/:id', (req, res) => {
    const id = req.params.id;
    const matches = paintingsData.filter(painting => painting.artist.artistID == id);

    if (matches && matches.length > 0) {
        res.json(matches);
    } else {
        res.status(404).json(
            {
                success: false,
                message: `Paintings: Could not find paintings with the specified artist-id in: ${id}`,
                query: req.query
            });
    }
});

router.get('/year/:min/:max', (req, res) => {
    const minYear = req.params.min;
    const maxYear = req.params.max;

    const matches = paintingsData.filter(painting => painting.yearOfWork >= minYear && painting.yearOfWork <= maxYear);

    if (matches && matches.length > 0) {
        res.json(matches);
    } else {
        res.status(404).json(
            {
                success: false,
                message: `Paintings: Could not find paintings with the specified year ranges in: ${minYear}-${maxYear}`,
                query: req.query
            });
    }
});

router.get('/title/:text', (req, res) => {
    const text = req.params.text;
    const matches = paintingsData.filter(painting => painting.title.toLowerCase().includes(text));

    if (matches && matches.length > 0) {
        res.json(matches);
    } else {
        res.status(404).json(
            {
                success: false,
                message: `Paintings: Could not find paintings with the specified title in: ${text}`,
                query: req.query
            });
    }
});

router.get('/color/:name', (req, res) => {
    const name = req.params.name;
    console.log(paintingsData[0].details.annotation);
    const matches = paintingsData.filter(painting => painting.details.annotation.dominantColors.some(color => color.name.toLowerCase() == name.toLowerCase()));

    if (matches && matches.length > 0) {
        res.json(matches);
    } else {
        res.status(404).json(
            {
                success: false,
                message: `Paintings: Could not find paintings with the color name in: ${name}`,
                query: req.query
            });
    }
});

module.exports = router;