const provider = require('../scripts/dataProvider');
const path = require('path');
const filePath = path.join(__dirname, '..', 'data', 'paintings-nested.json');
const paintingsData = provider.readJSONFrom(filePath);
const express = require('express');
const router = express.Router();
const { handle404Error } = require('../scripts/error');

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const matches = paintingsData.find(painting => painting.paintingID == id);
    if (matches) {
        res.json(matches);
    } else {
        handle404Error(req, res, `Paintings: Could not find the painting with the specified painting-id: ${id}`);
    }
});

router.get('/gallery/:id', (req, res) => {
    const id = req.params.id;
    const matches = paintingsData.filter(painting => painting.gallery.galleryID == id);
    if (matches && matches.length > 0) {
        res.json(matches);
    } else {
        handle404Error(req, res, `Paintings: Could not find paintings with the specified gallery-id: ${id}`);
    }
});

router.get('/artist/:id', (req, res) => {
    const id = req.params.id;
    const matches = paintingsData.filter(painting => painting.artist.artistID == id);
    if (matches && matches.length > 0) {
        res.json(matches);
    } else {
        handle404Error(req, res, `Paintings: Could not find paintings with the specified artist-id: ${id}`);
    }
});

router.get('/year/:min/:max', (req, res) => {
    const minYear = parseInt(req.params.min);
    const maxYear = parseInt(req.params.max);
    const matches = paintingsData.filter(painting => painting.yearOfWork >= minYear && painting.yearOfWork <= maxYear);
    if (matches && matches.length > 0) {
        res.json(matches);
    } else {
        handle404Error(req, res, `Paintings: Could not find paintings with the specified year range: ${minYear}-${maxYear}`);
    }
});

router.get('/title/:text', (req, res) => {
    const text = req.params.text;
    const matches = paintingsData.filter(painting => painting.title.toLowerCase().includes(text.toLowerCase()));
    if (matches && matches.length > 0) {
        res.json(matches);
    } else {
        handle404Error(req, res, `Paintings: Could not find paintings with the specified title: ${text}`);
    }
});

router.get('/color/:name', (req, res) => {
    const name = req.params.name;
    const matches = paintingsData.filter(painting => painting.details.annotation.dominantColors.some(color => color.name.toLowerCase() == name.toLowerCase()));
    if (matches && matches.length > 0) {
        res.json(matches);
    } else {
        handle404Error(req, res, `Paintings: Could not find paintings with the color name: ${name}`);
    }
});

module.exports = router;